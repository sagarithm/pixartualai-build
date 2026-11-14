from bs4 import BeautifulSoup

for fn in ['extracted_sidebar.html', 'extracted_main_panel.html']:
    with open('modulify_dumps/' + fn, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
        print(f'=== {fn} ===')
        for el in soup.find_all(['button', 'a', 'div']):
            cls = el.get('class', [])
            if any('hover:' in c or 'on-hover' in c or 'transition' in c for c in cls):
                print(f"{el.name} ({el.get_text(strip=True)[:25]}): {' '.join(cls)}")
