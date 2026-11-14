import json
from bs4 import BeautifulSoup

with open('scraped_pages/public/compare.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

data = []
for sec in soup.find_all('section'):
    h2 = sec.find('h2')
    if not h2:
        continue
    sec_title = h2.get_text(strip=True)
    cards = []
    for a in sec.find_all('a', href=lambda h: h and '/compare/' in h):
        href = a['href'].replace('/compare/modulify-vs-', '/compare/pixartual-vs-')
        h3 = a.find('h3')
        p = a.find('p')
        title = h3.get_text(strip=True) if h3 else ''
        desc = p.get_text(strip=True) if p else ''
        if not title:
            lines = [t.strip() for t in a.strings if t.strip()]
            if lines:
                title = lines[0]
                desc = ' '.join(lines[1:])
        title = title.replace('Modulify', 'PixartualAI')
        desc = desc.replace('Modulify', 'PixartualAI')
        cards.append({'title': title, 'desc': desc, 'href': href})
    if cards:
        data.append({'category': sec_title, 'cards': cards})

print(f"Extracted {len(data)} categories with total {sum(len(c['cards']) for c in data)} cards")
with open('src/data/comparisons_catalog.json', 'w', encoding='utf-8') as out:
    json.dump(data, out, indent=2)
print("Saved to src/data/comparisons_catalog.json")
