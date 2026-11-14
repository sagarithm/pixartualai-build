import urllib.request
import json

try:
    tabs = json.loads(urllib.request.urlopen('http://127.0.0.1:9222/json').read())
    for t in tabs:
        if 'modulify' in t.get('url', ''):
            print(f"{t.get('title')} -> {t.get('url')}")
except Exception as e:
    print("Error:", e)
