@echo off
echo Starting Google Chrome with Remote Debugging on port 9222...
taskkill /F /IM chrome.exe >nul 2>&1
timeout /t 1 >nul
start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222 --user-data-dir="%LOCALAPPDATA%\Google\Chrome\User Data"
echo Chrome launched! Once logged into Modulify, let the agent know to begin the full reverse-engineering crawl.
pause
