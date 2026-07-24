# Crest Property Maintenance Website

A responsive static website for a commercial property maintenance company specializing in warehouse make-ready, cleaning, and facility care.

## Before publishing

1. Replace these placeholders in `index.html`:
   - `[add your business email]`
   - `714-686-7078`
   - `3400 Cottage Way, Ste G2 #36327, Sacramento, CA 95825`
2. Connect the contact form in `script.js` to Formspree, Basin, HubSpot, GoHighLevel, or another form handler.
3. Replace the two remote Unsplash background images with licensed local images if preferred.

## Run locally

Open Terminal in this folder and run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

```bash
git init
git add .
git commit -m "Launch Crest Property Maintenance website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

In GitHub, go to **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/root`, then save.
