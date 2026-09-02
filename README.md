# Frattas website

Static rebuild of frattas.ca. No build step: upload the contents of this folder to any web host
(Netlify, Cloudflare Pages, GitHub Pages, nginx, Apache, S3) and point the domain at it.

- `index.html` – the page
- `css/style.css` – all styling (colours and type match the original Squarespace theme)
- `js/main.js` – fills in the current copyright year and runs the mobile menu
- `images/` – logo, client logos, favicon PNGs and the venue photo
- `favicon.ico` – browser tab icon (the F from the logo on brand charcoal)

Poppins loads from Google Fonts. To avoid the third-party request, download the woff2 files,
put them in `fonts/`, and replace the `<link>` in `index.html` with `@font-face` rules.
