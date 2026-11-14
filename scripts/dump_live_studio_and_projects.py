import asyncio
import os
import json
from playwright.async_api import async_playwright

async def run():
    os.makedirs('modulify_dumps/studio_live', exist_ok=True)
    async with async_playwright() as p:
        browser = await p.chromium.connect_over_cdp('http://127.0.0.1:9222')
        context = browser.contexts[0]

        studio_page = None
        for page in context.pages:
            if 'teal-tide-zmk' in page.url:
                studio_page = page
                break
        
        if studio_page:
            print("Found studio page:", studio_page.url)
            html = await studio_page.content()
            with open('modulify_dumps/studio_live/studio_teal_tide.html', 'w', encoding='utf-8') as f:
                f.write(html)
            await studio_page.screenshot(path='modulify_dumps/studio_live/studio_teal_tide.png')
            print("Dumped studio page")

            # Extract detailed elements from studio
            data = await studio_page.evaluate('''() => {
                const nav = document.querySelector('header')?.outerHTML || '';
                const aside = document.querySelector('aside')?.outerHTML || '';
                const main = document.querySelector('main')?.outerHTML || '';
                const iframes = Array.from(document.querySelectorAll('iframe')).map(f => f.src);
                return { nav, aside, main, iframes };
            }''')
            with open('modulify_dumps/studio_live/elements.json', 'w', encoding='utf-8') as f:
                json.dump(data, f, indent=2)

        # Now check projects page
        projects_page = None
        for page in context.pages:
            if 'projects' in page.url and 'teal-tide' not in page.url:
                projects_page = page
                break
        
        if not projects_page:
            # Open projects in new or existing tab
            page = context.pages[0]
            await page.goto('https://modulify.ai/dashboard/projects', wait_until='networkidle')
            projects_page = page

        if projects_page:
            print("Dumping projects page:", projects_page.url)
            await projects_page.wait_for_timeout(2000)
            html = await projects_page.content()
            with open('modulify_dumps/studio_live/projects_page.html', 'w', encoding='utf-8') as f:
                f.write(html)
            await projects_page.screenshot(path='modulify_dumps/studio_live/projects_page.png')
            print("Dumped projects page")

asyncio.run(run())
