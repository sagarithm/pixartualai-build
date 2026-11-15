from bs4 import BeautifulSoup

with open('scraped_pages/public/landing.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

print('=== ALL SUBMENUS IN HEADER ===')
header = soup.find('header')
if header:
    for btn in header.find_all('button'):
        print('Button:', btn.get_text(strip=True))
        
    for mega in header.find_all(attrs={'role': 'region'}):
        print('Region aria-label:', mega.get('aria-label'))
        print(mega.prettify())
        print('='*50)
