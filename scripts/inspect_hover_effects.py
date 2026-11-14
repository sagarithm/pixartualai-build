import asyncio
import json
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.connect_over_cdp('http://127.0.0.1:9222')
        context = browser.contexts[0]
        page = context.pages[0]

        # Extract all styles and CSS rules related to hover
        hover_info = await page.evaluate('''() => {
            const results = {};
            // Check button hover styles
            const buttons = Array.from(document.querySelectorAll('button, a'));
            const samples = buttons.slice(0, 30).map(b => {
                const cs = window.getComputedStyle(b);
                return {
                    tag: b.tagName,
                    text: b.innerText.trim().slice(0, 20),
                    className: b.className,
                    transition: cs.transition,
                    cursor: cs.cursor,
                    borderRadius: cs.borderRadius,
                    backgroundColor: cs.backgroundColor,
                    color: cs.color,
                    boxShadow: cs.boxShadow
                };
            });

            // Extract CSS rules containing :hover
            const hoverRules = [];
            for (const sheet of document.styleSheets) {
                try {
                    for (const rule of sheet.cssRules) {
                        if (rule.selectorText && rule.selectorText.includes(':hover')) {
                            hoverRules.push({
                                selector: rule.selectorText,
                                cssText: rule.cssText
                            });
                            if (hoverRules.length > 50) break;
                        }
                    }
                } catch (e) {}
                if (hoverRules.length > 50) break;
            }

            return { samples, hoverRules };
        }''')

        with open('modulify_dumps/hover_styles.json', 'w', encoding='utf-8') as f:
            json.dump(hover_info, f, indent=2)
        print("Extracted hover info, sample count:", len(hover_info['samples']), "rules count:", len(hover_info['hoverRules']))

asyncio.run(run())
