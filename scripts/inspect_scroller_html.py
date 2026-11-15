with open('scraped_pages/public/landing.html', 'r', encoding='utf-8') as f:
    html = f.read()

pos = html.find('class="scroller"')
if pos != -1:
    print(html[pos:pos+1500])
