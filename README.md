# Umar Tolibov portfolio

A static, dependency-free portfolio page.

## Files

- `index.html`: the page. Project cards are marked with `[brackets]`, which you fill in before publishing.
- `style.css`: layout, light and dark theme.
- `assets/`: screenshots. Names must match the `src` values in `index.html`:
  - `ielts-1.png`, `ielts-2.png`
  - `click-usta-1.png`
  - `my-cloud-1.png`
  - `apartments-1.png`

## Before publishing

1. Replace every `[bracketed]` placeholder with real text.
2. Only show screenshots without real personal data, keys, student records or client names.
3. Open `index.html` in a browser and check it at phone width.

## Publish on GitHub Pages (optional)

Run these in a new folder, not in the IELTS repo:

```bash
cd C:/Users/rajab/Documents/GitHub/umar-portfolio
git init
git add .
git commit -m "Add portfolio site"
```

Create an empty public repository on GitHub, for example `umar-portfolio`, then:

```bash
git branch -M main
git remote add origin https://github.com/wlvUmar/umar-portfolio.git
git push -u origin main
```

In the repo's Settings, open Pages, select "Deploy from a branch", choose `main` and `/ (root)`. The site will be at `https://wlvUmar.github.io/umar-portfolio/`.
