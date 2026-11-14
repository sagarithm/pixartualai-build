import urllib.request
import os

PAGES = [
    ('landing', 'https://modulify.ai/'),
    ('pricing', 'https://modulify.ai/pricing'),
    ('solutions', 'https://modulify.ai/solutions'),
    ('compare', 'https://modulify.ai/compare'),
    ('faqs', 'https://modulify.ai/faqs'),
    ('insights', 'https://modulify.ai/insights'),
    ('founders', 'https://modulify.ai/founders'),
    ('made_in_modulify', 'https://modulify.ai/made-in-modulify'),
    ('contact', 'https://modulify.ai/contact'),
    ('enterprise_teams', 'https://modulify.ai/enterprise-teams'),
    ('designers', 'https://modulify.ai/designers'),
    ('marketers', 'https://modulify.ai/marketers'),
    ('product_managers', 'https://modulify.ai/product-managers'),
    ('sales', 'https://modulify.ai/sales'),
    ('ops', 'https://modulify.ai/ops'),
    ('terms', 'https://modulify.ai/terms'),
    ('privacy', 'https://modulify.ai/privacy'),
    ('webflow_transfer', 'https://modulify.ai/webflow-transfer'),
]

os.makedirs('scraped_pages/public', exist_ok=True)

for name, url in PAGES:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8')
        with open(f'scraped_pages/public/{name}.html', 'w', encoding='utf-8') as f:
            f.write(html)
        print(f"Downloaded {name:20}: {len(html)} bytes")
    except Exception as e:
        print(f"Error downloading {name:20}: {e}")
