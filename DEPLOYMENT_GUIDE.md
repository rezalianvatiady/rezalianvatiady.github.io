# 🚀 Deployment Guide — GitHub Pages

> Step-by-step guide to deploy your new portfolio to `https://github.com/rezalianvatiady/rezalianvatiady.github.io`

---

## ⚠️ IMPORTANT: Read This First

**DO NOT just delete and replace everything blindly.** Your existing repo has content (geojson, datascience, old images, etc.) that you might want to keep. Follow the backup steps below.

---

## 📋 Step 1: Backup Your Existing Repo

### Option A: Clone to Backup Folder (Recommended)

```powershell
# Go to a backup location (NOT inside D:\Upwork_Project)
cd D:\
git clone https://github.com/rezalianvatiady/rezalianvatiady.github.io.git rezalianvatiady-backup-2026

# Verify backup
cd rezalianvatiady-backup-2026
dir
```

### Option B: Download ZIP from GitHub

1. Go to https://github.com/rezalianvatiady/rezalianvatiady.github.io
2. Click green **"Code"** button → **"Download ZIP"**
3. Save as `rezalianvatiady-old-backup.zip` somewhere safe

### Option C: Create a Backup Branch

```powershell
cd D:\rezalianvatiady.github.io  # your existing local clone
git checkout -b backup-old-portfolio
git push origin backup-old-portfolio
git checkout main
```

This creates a `backup-old-portfolio` branch on GitHub with all your old files.

---

## 📋 Step 2: Clone Your Repo (if not already cloned)

```powershell
cd D:\
git clone https://github.com/rezalianvatiady/rezalianvatiady.github.io.git
cd rezalianvatiady.github.io
```

---

## 📋 Step 3: Extract the New Portfolio

1. Extract `rezalianvatiady.github.io-main.zip` to a temporary location:

```powershell
cd D:\
mkdir new-portfolio-temp
cd new-portfolio-temp
powershell Expand-Archive -Path "D:\path\to\rezalianvatiady.github.io-main.zip" -DestinationPath .
```

You should see a folder `rezalianvatiady.github.io-main/` containing:
- `index.html`
- `scraping-portfolio-deck.html`
- `_next/` folder
- `reza-photo.png`
- `.nojekyll`
- etc.

---

## 📋 Step 4: Replace Files in Your Repo

### ⚠️ CRITICAL: Keep the `.git` folder!

```powershell
# Go to your cloned repo
cd D:\rezalianvatiady.github.io

# Delete ALL old files EXCEPT .git folder
# (PowerShell command to delete everything except .git)
Get-ChildItem -Force | Where-Object { $_.Name -ne ".git" } | Remove-Item -Recurse -Force

# Copy new portfolio files from the temp folder
Copy-Item -Path "D:\new-portfolio-temp\rezalianvatiady.github.io-main\*" -Destination "D:\rezalianvatiady.github.io\" -Recurse -Force

# Don't forget hidden files like .nojekyll
Copy-Item -Path "D:\new-portfolio-temp\rezalianvatiady.github.io-main\.nojekyll" -Destination "D:\rezalianvatiady.github.io\" -Force

# Verify files are there
dir -Force
```

You should see:
```
.nojekyll
404.html
_next/
index.html
logo.svg
README.md
DEPLOYMENT_GUIDE.md
reza-photo.png
reza-photo2.png
reza-photo3.jpg
reza-photo4.png
robots.txt
scraping-portfolio-deck.html
```

---

## 📋 Step 5: Commit and Push

```powershell
cd D:\rezalianvatiady.github.io

# Add all files
git add -A

# Commit
git commit -m "Portfolio v2.0 — Next.js redesign with scraping frameworks showcase"

# Push to GitHub
git push origin main
```

---

## 📋 Step 6: Verify GitHub Pages Settings

1. Go to https://github.com/rezalianvatiady/rezalianvatiady.github.io/settings/pages
2. Under **"Build and deployment"**:
   - **Source**: Deploy from a branch
   - **Branch**: `main` / `(root)`
   - Click **Save** if you made changes

3. Wait 2-5 minutes for GitHub Actions to build

4. Check the green box at top: "Your site is live at https://rezalianvatiady.github.io/"

---

## 📋 Step 7: Verify Your Live Site

1. Visit https://rezalianvatiady.github.io
2. You should see:
   - Dark-themed portfolio with blue/cyan accents
   - Hero section with your photo
   - Career section showing "Founder & Lead AI Engineer" as CURRENT
   - Projects section with ZalinOS, ODIS, WST cards
   - Project Presentations subsection with 13 slide deck cards
   - Presentation deck at https://rezalianvatiady.github.io/scraping-portfolio-deck.html

---

## 🔄 If Something Goes Wrong

### Rollback to Old Version

```powershell
cd D:\rezalianvatiady.github.io

# Option 1: If you created a backup branch
git checkout backup-old-portfolio
git push origin main --force

# Option 2: If you have a local backup folder
# Delete current files, copy from backup, commit, push
```

### Common Issues

| Issue | Solution |
|-------|----------|
| CSS/JS not loading | Ensure `.nojekyll` file exists in root |
| 404 on subpages | Not applicable — this is a single-page site |
| Images not showing | Ensure `reza-photo.png` is in root, not in a subfolder |
| Deck not accessible | Ensure `scraping-portfolio-deck.html` is in root |
| Site shows old version | Wait 5 min, or check Settings → Pages → Build status |
| `_next/` folder missing | Re-extract ZIP, ensure hidden folders are copied |

---

## 📁 What About Old Content?

Your old repo had folders like:
- `geojson/` — GIS data files
- `datascience/` — old data science project HTML files
- `img/` — old project images
- `icons/` — map icons
- `assets/` — Leaflet map assets
- `css/` — old CSS files
- `js/` — old JavaScript files

**These are NOT referenced by the new portfolio.** If you want to keep them for reference:

1. Create an `archive/` folder in the new site
2. Move old content there
3. They won't affect the new portfolio

```powershell
# In your repo, after Step 4:
mkdir archive
# Copy old content from backup to archive/
Copy-Item -Path "D:\rezalianvatiady-backup-2026\geojson" -Destination "archive\" -Recurse
Copy-Item -Path "D:\rezalianvatiady-backup-2026\datascience" -Destination "archive\" -Recurse
# ... etc
git add -A
git commit -m "Archive old portfolio content"
git push origin main
```

---

## ✅ Quick Summary

```
1. BACKUP old repo           ← git clone to backup folder
2. EXTRACT new ZIP           ← to temp location
3. DELETE old files in repo  ← keep .git folder!
4. COPY new files to repo    ← including .nojekyll
5. COMMIT and PUSH           ← git add, commit, push
6. WAIT 2-5 minutes          ← GitHub Pages builds
7. VERIFY at rezalianvatiady.github.io
```

---

**Need help?** Check GitHub Pages docs: https://docs.github.com/en/pages
