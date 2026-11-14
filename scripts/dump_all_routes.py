import asyncio
import os
from playwright.async_api import async_playwright

ROUTES = [
    ('domains', 'https://modulify.ai/dashboard/domains'),
    ('connectors', 'https://modulify.ai/dashboard/connectors'),
    ('skills', 'https://modulify.ai/dashboard/skills'),
    ('plans', 'https://modulify.ai/dashboard/plans'),
    ('members', 'https://modulify.ai/dashboard/members'),
    ('settings', 'https://modulify.ai/dashboard/settings'),
    ('affiliates', 'https://modulify.ai/dashboard/affiliates'),
    ('archive', 'https://modulify.ai/dashboard/archive'),
    ('recently_deleted', 'https://modulify.ai/dashboard/recently-deleted'),
]

async def run():
    os.makedirs('modulify_dumps/routes', exist_ok=True)
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

        for name, url in ROUTES:
            print(f'Navigating to {url}...')
            try:
                await page.goto(url, wait_until='networkidle', timeout=15000)
                await page.wait_for_timeout(1000)
                html = await page.content()
                with open(f'modulify_dumps/routes/{name}.html', 'w', encoding='utf-8') as f:
                    f.write(html)
                await page.screenshot(path=f'modulify_dumps/routes/{name}.png', full_page=True)
                print(f'Saved {name}')
            except Exception as e:
                print(f'Error navigating to {name}: {e}')

        # Navigate back to dashboard home
        await page.goto('https://modulify.ai/dashboard', wait_until='networkidle', timeout=15000)
        print('Finished all route dumps!')

asyncio.run(run())
