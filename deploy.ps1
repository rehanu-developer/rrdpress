# Git Push Script for RRD Press
Write-Host "Initializing Git repository..."

# Add all files
git add .

# Commit
Write-Host "Committing changes..."
git commit -m "Initial commit - RRD Press static website with blogs"

# Rename branch to main
git branch -M main

# Add remote
Write-Host "Adding remote..."
git remote add origin https://github.com/rehanu-developer/rrdpress.git

# Push
Write-Host "Pushing to GitHub..."
git push -u origin main

Write-Host "Done!"
