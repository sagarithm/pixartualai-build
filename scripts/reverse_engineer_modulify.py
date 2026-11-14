import json
import os
import sys
import time
from playwright.sync_api import sync_playwright

DUMP_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "modulify_dumps")
os.makedirs(DUMP_DIR, exist_ok=True)

def run_reverse_engineering():
    print("[*] Connecting to live Chrome instance over CDP (port 9222)...")
    with sync_playwright() as p:
        browser = p.chromium.connect_over_cdp("http://127.0.0.1:9222")
        contexts = browser.contexts
        if not contexts:
            print("[-] No browser context found.")
            return

        context = contexts[0]
        pages = context.pages
        print(f"[+] Total open pages: {len(pages)}")

        target_page = None
        for page in pages:
            if "modulify.ai" in page.url:
                target_page = page
                break

        if not target_page:
            print("[-] No modulify.ai page found.")
            return

        print(f"[+] Hooked into live Modulify tab: {target_page.url}")
        target_page.bring_to_front()
        time.sleep(1)

        # 1. Capture current theme and state from localStorage
        try:
            local_storage = target_page.evaluate("() => JSON.stringify(window.localStorage)")
            with open(os.path.join(DUMP_DIR, "local_storage.json"), "w", encoding="utf-8") as f:
                f.write(local_storage)
            print("[+] Captured localStorage state")
        except Exception as e:
            print(f"[-] Could not dump localStorage: {e}")

        # 2. Capture initial Dashboard state (Dark mode HTML + Screenshot)
        current_html = target_page.content()
        with open(os.path.join(DUMP_DIR, "dashboard_initial.html"), "w", encoding="utf-8") as f:
            f.write(current_html)
        target_page.screenshot(path=os.path.join(DUMP_DIR, "dashboard_initial.png"), full_page=True)
        print("[+] Saved dashboard initial HTML and screenshot")

        # 3. Inspect and extract all Project sub-items (Archive, Recently deleted, New folder)
        try:
            sidebar_html = target_page.eval_on_selector("aside, nav, [class*='sidebar']", "el => el.outerHTML")
            with open(os.path.join(DUMP_DIR, "sidebar.html"), "w", encoding="utf-8") as f:
                f.write(sidebar_html)
            print("[+] Captured live sidebar HTML structure")
        except Exception as e:
            print(f"[-] Could not extract sidebar outerHTML: {e}")

        # 4. Extract all SVGs from the current page
        try:
            svgs = target_page.eval_on_selector_all("svg", "elements => elements.map(el => el.outerHTML)")
            with open(os.path.join(DUMP_DIR, "svg_icons.json"), "w", encoding="utf-8") as f:
                json.dump(svgs, f, indent=2)
            print(f"[+] Extracted {len(svgs)} authentic SVG icons")
        except Exception as e:
            print(f"[-] Could not extract SVGs: {e}")

        # 5. Extract all project/template cards on the dashboard
        try:
            cards = target_page.evaluate("""() => {
                const results = [];
                document.querySelectorAll('a[href*="/dashboard/projects"], a[href*="/dashboard/studio"], [class*="card"]').forEach(el => {
                    results.push({
                        text: el.innerText,
                        href: el.getAttribute('href') || '',
                        classes: el.className
                    });
                });
                return results;
            }""")
            with open(os.path.join(DUMP_DIR, "dashboard_cards.json"), "w", encoding="utf-8") as f:
                json.dump(cards, f, indent=2)
            print(f"[+] Captured {len(cards)} card elements")
        except Exception as e:
            print(f"[-] Could not extract cards: {e}")

        # 6. Interact with dropdowns to capture open state HTML & Screenshots:
        # a) Workspace switcher
        try:
            ws_btn = target_page.query_selector("button:has-text('W...'), button:has-text('Workspace')")
            if ws_btn:
                ws_btn.click()
                time.sleep(0.5)
                target_page.screenshot(path=os.path.join(DUMP_DIR, "dropdown_workspace.png"))
                with open(os.path.join(DUMP_DIR, "dropdown_workspace.html"), "w", encoding="utf-8") as f:
                    f.write(target_page.content())
                ws_btn.click() # close
                time.sleep(0.3)
                print("[+] Captured workspace dropdown state")
        except Exception as e:
            print(f"[-] Error capturing workspace dropdown: {e}")

        # b) User profile menu
        try:
            user_btn = target_page.query_selector("button:has-text('Skegraphics1'), button:has-text('Sagarithm')")
            if user_btn:
                user_btn.click()
                time.sleep(0.5)
                target_page.screenshot(path=os.path.join(DUMP_DIR, "dropdown_user_profile.png"))
                with open(os.path.join(DUMP_DIR, "dropdown_user_profile.html"), "w", encoding="utf-8") as f:
                    f.write(target_page.content())
                user_btn.click() # close
                time.sleep(0.3)
                print("[+] Captured user profile menu state")
        except Exception as e:
            print(f"[-] Error capturing user menu: {e}")

        # c) Resources menu
        try:
            res_btn = target_page.query_selector("button:has-text('Resources'), a:has-text('Resources')")
            if res_btn:
                res_btn.click()
                time.sleep(0.5)
                target_page.screenshot(path=os.path.join(DUMP_DIR, "dropdown_resources.png"))
                with open(os.path.join(DUMP_DIR, "dropdown_resources.html"), "w", encoding="utf-8") as f:
                    f.write(target_page.content())
                res_btn.click() # close
                time.sleep(0.3)
                print("[+] Captured resources dropdown state")
        except Exception as e:
            print(f"[-] Error capturing resources dropdown: {e}")

        # 7. Visit key subpages without disrupting active session
        subpages = [
            "/dashboard/account",
            "/dashboard/account/notifications",
            "/dashboard/account/tokens",
            "/dashboard/account/affiliates",
            "/dashboard/workspace/settings",
            "/dashboard/workspace/members",
            "/dashboard/workspace/spending",
            "/dashboard/connectors",
            "/dashboard/domains",
            "/dashboard/projects",
            "/dashboard/skills",
            "/dashboard/templates"
        ]

        # Check any studio/project URLs present
        try:
            project_links = target_page.eval_on_selector_all("a[href*='/dashboard/projects/']", "elements => elements.map(el => el.getAttribute('href'))")
            for pl in set(project_links):
                if pl and pl not in subpages:
                    subpages.append(pl)
        except Exception as e:
            print(f"[-] Error reading project links: {e}")

        for sub in subpages:
            url = f"https://modulify.ai{sub}" if not sub.startswith("http") else sub
            slug = sub.strip("/").replace("/", "_")
            print(f"[*] Crawling {url}...")
            try:
                target_page.goto(url, wait_until="networkidle", timeout=15000)
                time.sleep(1.5)
                with open(os.path.join(DUMP_DIR, f"{slug}.html"), "w", encoding="utf-8") as f:
                    f.write(target_page.content())
                target_page.screenshot(path=os.path.join(DUMP_DIR, f"{slug}.png"), full_page=True)
                print(f"    [+] Saved {slug}")
            except Exception as e:
                print(f"    [-] Failed to crawl {url}: {e}")

        # Return back to dashboard at the end
        target_page.goto("https://modulify.ai/dashboard", wait_until="networkidle", timeout=15000)
        print("[+] Full reverse engineering crawl complete!")

if __name__ == "__main__":
    run_reverse_engineering()
