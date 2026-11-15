with open('scraped_pages/public/landing.html', 'r', encoding='utf-8') as f:
    html = f.read()

pos = html.find('id="build-anything"')
if pos != -1:
    pos_right = html.find('<div class="flex flex-col', pos)
    print(html[pos_right:pos_right+3000])
