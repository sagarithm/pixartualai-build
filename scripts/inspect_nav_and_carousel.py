from bs4 import BeautifulSoup
import re

with open('scraped_pages/public/landing.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

print('--- HEADER NAV ITEMS ---')
header = soup.find('header')
nav = header.find('nav') if header else None
if nav:
    print(nav.prettify()[:2000])

print('\n--- ALL FLYOUTS/MENUS IN PAGE ---')
for el in soup.find_all(attrs={'data-state': True}):
    print('data-state element:', el.name, el.get('class'), el.get('data-state'))

# Look for solutions and resources menu content
for a in soup.find_all('a'):
    text = a.get_text(' ', strip=True)
    if 'Founders' in text and 'Ship your site' in text:
        print('Found Solutions menu item link:', a.parent.prettify()[:500])
        break

print('\n--- BUILD ANYTHING SECTION ---')
for sec in soup.find_all('section'):
    h2 = sec.find('h2')
    if h2 and 'Build Anything' in h2.get_text():
        print(sec.prettify()[:2500])
        break
