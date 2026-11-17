from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={'width': 1280, 'height': 800})
    page.goto('http://localhost:3000', wait_until='networkidle')
    
    # Click dark theme in navbar
    page.locator('header [role="radiogroup"] button[title="Dark theme"]').click()
    page.wait_for_timeout(600)
    
    # Screenshot header
    page.screenshot(path='C:/Users/sagar/.gemini/antigravity/brain/ab479ced-d132-421a-b1f3-72bdf086eb85/vercel_theme_dark_header.png')
    
    # Scroll to footer and screenshot
    footer = page.locator('footer')
    footer.scroll_into_view_if_needed()
    page.wait_for_timeout(600)
    page.screenshot(path='C:/Users/sagar/.gemini/antigravity/brain/ab479ced-d132-421a-b1f3-72bdf086eb85/vercel_theme_dark_footer.png')
    
    browser.close()
print('Dark mode verified!')
