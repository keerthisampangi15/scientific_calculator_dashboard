@echo off
REM Opens index.html in Google Chrome

set "chromePath=C:\Program Files\Google\Chrome\Application\chrome.exe"
set "filePath=%~dp0index.html"

if exist "%chromePath%" (
    start "" "%chromePath%" "file:///%filePath%"
) else (
    echo Chrome not found at %chromePath%. Please update the path if needed.
    pause
)
