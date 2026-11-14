import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.connect_over_cdp('http://127.0.0.1:9222')
        context = browser.contexts[0]
        page = None
        for p_page in context.pages:
            if 'modulify' in p_page.url:
                page = p_page
                break
        if not page:
            print('Modulify tab not found')
            return
        print('Current tab URL:', page.url)

        # Print all <a> tags currently in the DOM
        links = await page.eval_on_selector_all('a', '''
            elements => elements.map(el => ({
                text: el.innerText.trim(),
                href: el.getAttribute('href')
            }))
        ''')
        for l in links:
            if l['href'] and ('dashboard' in l['href'] or 'account' in l['href'] or 'settings' in l['href']):
                print(f"{l['text']} -> {l['href']}")

asyncio.run(run())
