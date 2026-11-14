import json
from bs4 import BeautifulSoup

with open('scraped_pages/public/faqs.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

data = []
for h2 in soup.find_all('h2'):
    cat_name = h2.get_text(strip=True)
    if 'building' in cat_name.lower():
        continue
    # find parent container or following siblings
    parent = h2.find_parent('div', class_=lambda c: c and ('kit-fcard' in c or 'flex' in c or 'border' in c)) or h2.parent
    # Look for mfy-faq-item in this block
    items = []
    # In modulify faq layout, each category block contains h2 and a list of mfy-faq-item
    # let's look in the section or container that holds this h2
    # Find next sibling container with mfy-faq-item or inside parent
    block = h2.find_parent('div', class_=lambda c: c and 'border-t' in c) or h2.find_parent('div', class_='flex-col') or h2.parent
    for item in block.find_all('div', class_='mfy-faq-item'):
        btn = item.find('button')
        ans_div = item.find('div', class_='mfy-faq-a')
        if btn and ans_div:
            q = btn.get_text(strip=True).replace('Modulify', 'PixartualAI')
            a = ans_div.get_text(strip=True).replace('Modulify', 'PixartualAI')
            items.append({'q': q, 'a': a})
    if items:
        # Avoid duplicate categories
        if not any(d['category'] == cat_name for d in data):
            data.append({'category': cat_name, 'faqs': items})

print(f"Extracted {len(data)} FAQ categories with total {sum(len(c['faqs']) for c in data)} items")
with open('src/data/faqs_catalog.json', 'w', encoding='utf-8') as out:
    json.dump(data, out, indent=2)
print("Saved to src/data/faqs_catalog.json")
