# Frattas website

Static rebuild of frattas.ca. No build step. Hosted on GitHub Pages from the `main` branch of
https://github.com/eddyatrecipebook/frattas-website.

- `index.html` – the page
- `css/style.css` – all styling (colours and type match the original Squarespace theme)
- `js/main.js` – fills in the current copyright year and runs the mobile menu
- `images/` – logo, client logos, favicon PNGs and the venue photo
- `favicon.ico` – browser tab icon (the F from the logo on brand charcoal)
- `.nojekyll` – tells GitHub Pages to serve the files as they are

## Updating the site

Edit the files, commit, and push to `main`. GitHub Pages redeploys within a minute or two:

```bash
git add -A
git commit -m "Describe the change"
git push
```

## Pointing frattas.ca at GitHub Pages

1. At the domain registrar, add these DNS records:
   - `www` → CNAME → `eddyatrecipebook.github.io`
   - `@` (apex) → A records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
2. In the repo on GitHub: Settings → Pages → Custom domain → enter `www.frattas.ca` and save.
   GitHub adds a `CNAME` file to the repo; commit or pull it so it isn't lost.
3. Once the DNS check passes, tick "Enforce HTTPS" on the same page.
4. Cancel the Squarespace subscription only after the new site is live on the domain.

## Fonts

Poppins loads from Google Fonts. To avoid the third-party request, download the woff2 files,
put them in `fonts/`, and replace the `<link>` in `index.html` with `@font-face` rules.
