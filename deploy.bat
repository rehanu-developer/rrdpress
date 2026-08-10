@echo off
git init
git add .
echo Initial commit
git commit -m "Initial commit - RRD Press static website with blogs"
git branch -M main
echo.
echo Repository initialized. Now add remote:
echo git remote add origin https://github.com/rehanu-developer/rrdpress.git
echo git push -u origin main
pause
