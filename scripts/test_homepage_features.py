import urllib.request

res = urllib.request.urlopen('http://localhost:3000', timeout=15)
html = res.read().decode('utf-8')
print('Homepage rendered status: 200 OK')
print('Contains Solutions submenu:', ('aria-label="Solutions"' in html and 'By role' in html))
print('Contains Resources submenu:', ('aria-label="Resources"' in html and 'Webflow Transfer' in html))
print('Contains Build Anything moving carousel:', ('Build Anything' in html and 'Landing pages' in html and 'Dashboards' in html))
