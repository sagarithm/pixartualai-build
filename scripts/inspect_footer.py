from bs4 import BeautifulSoup

with open('scraped_pages/public/landing.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')
    footer = soup.find('footer')
    if footer:
        print("=== FOOTER LINKS ===")
        for col in footer.find_all('div', recursive=True):
            h = col.find(['h3', 'h4', 'div'], class_=lambda c: c and ('font-semibold' in c or 'text-xs' in c or 'uppercase' in c))
            links = col.find_all('a')
            if links and len(links) >= 3:
                header_text = h.get_text(strip=True) if h else "Column"
                print(f"Group: {header_text}")
                for l in links:
                    print(f"  {l.get_text(strip=True)} -> {l.get('href')}")
