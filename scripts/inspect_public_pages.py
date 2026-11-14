from bs4 import BeautifulSoup
import os

for f in sorted(os.listdir('scraped_pages/public')):
    if f.endswith('.html'):
        p = os.path.join('scraped_pages/public', f)
        with open(p, 'r', encoding='utf-8') as fh:
            soup = BeautifulSoup(fh.read(), 'html.parser')
            h1 = soup.find('h1')
            h2s = [h.get_text(strip=True) for h in soup.find_all('h2')][:4]
            title = soup.find('title')
            print(f"=== {f:25} ===")
            print(f"  Title: {title.get_text(strip=True) if title else 'None'}")
            print(f"  H1: {h1.get_text(strip=True) if h1 else 'None'}")
            print(f"  H2s: {h2s}")
