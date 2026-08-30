# Khent — Multi-Niche Virtual Assistant Portfolio

A lightweight, multi-page static portfolio designed for GitHub Pages. No build step, no
framework, no database — upload the files as they are.

## Site map

- `index.html` — home page: all four niches, toolkit, why-hire-me, experience, requirements
- `about.html` — bio and background
- `projects.html` — sample library **hub**, links out to each niche
- `projects-ecommerce.html` — e-commerce niche samples
- `projects-smm.html` — social media management niche samples (with click-to-preview)
- `projects-ai-automation.html` — AI automation niche samples
- `projects-funnel-seo.html` — funnel building & SEO niche samples
- `contact.html` — static contact form
- `resume.html` — embedded downloadable resume with QR codes
- `style.css` / `script.js` — shared design, dark mode, reveal animation, lightbox preview
- `portfolio-assets/` — existing e-commerce + resume proof files
- `project-samples/` — **your drop-in folder** for new niche files (see its own README)

## Before publishing

1. Review your contact links in `contact.html`.
2. Confirm the QR URLs in `resume.html` if you rename the repository.
3. Drop real files into `project-samples/` (see `project-samples/README.md` for exact
   filenames the SMM page already expects) and add screenshots/videos where the niche
   pages currently show placeholder "slots."
4. The existing DOCX/XLSX/PDF samples are already in `portfolio-assets/` and linked from
   the e-commerce page and resume.

## Upload to GitHub Pages

1. Create a new GitHub repository (or open your existing portfolio repository).
2. In the repository, choose **Add file → Upload files**.
3. Drag the complete contents of this folder into the upload area — keep `index.html` in
   the repository root, not inside another folder. Upload the `portfolio-assets/` and
   `project-samples/` folders the same way (drag the whole folder in).
4. Scroll down, enter a commit message such as `Add multi-niche VA portfolio`, and choose
   **Commit changes**.
5. Open **Settings → Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**, select `main` (or
   `master`) and the `/ (root)` folder, then click **Save**.
7. Wait for GitHub to publish, then open the Pages URL shown there. It normally looks like
   `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

If the repository is named `YOUR-USERNAME.github.io`, the site URL is simply
`https://YOUR-USERNAME.github.io/`.

## How buttons connect to files (or Notion, or anything else)

Every "Download," "View," or "Sneak peek" button on this site is one of two things:

**1. A plain link (`<a href="...">`) — used for real downloads.**
It points at a file's path *inside this repository*. Once that file exists at that exact
path and you've pushed it to GitHub, the button works — there's nothing else to configure.

```html
<a class="btn" href="portfolio-assets/khent-benedict-balulot-resume.pdf">Download PDF ↗</a>
```

To point a button at a file you're adding yourself, either:
- Reuse an existing button and just add the file at the path it already points to
  (this is how `project-samples/smm/` is set up — see its README for the exact filenames), or
- Add a new file anywhere in the repo, then set `href` to its path relative to the HTML
  file it's linked from, e.g. `href="project-samples/ai-automation/n8n-demo.pdf"`.

**2. A link to an outside page — used for Notion, Google Drive, Loom, etc.**
Same `<a href="...">` tag, just with a full URL instead of a local path:

```html
<a class="btn alt" href="https://your-notion-page.notion.site/..." target="_blank">View in Notion ↗</a>
```

- **Notion:** open the page, click **Share → Publish to web**, copy that URL into `href`.
- **Google Drive file:** right-click the file → **Share → Copy link**, then set link access
  to "Anyone with the link," and use that URL as the `href`. For a file you want to *embed*
  rather than just link to, Drive also gives you a "Get embed code" `<iframe>` snippet.
- **Loom video:** click **Share**, copy the link, and use it directly.

Always add `target="_blank"` on outside links so they open in a new tab instead of
navigating the visitor away from your site.

**3. The in-page preview ("Sneak peek") — used on `projects-smm.html`.**
This doesn't link anywhere; it opens a small popup showing a text excerpt, a CSV-style
table, or an image, using a shared lightbox in `script.js`. To add one to your own card:

```html
<div class="file-card" data-preview data-preview-type="text"
     data-preview-cap="Excerpt — Your-File.docx"
     data-preview-text="A short excerpt, using &#10; for line breaks.">
  ...
  <a class="file-cta primary" href="project-samples/smm/Your-File.docx">Download ↗</a>
</div>
```

`data-preview-type` can be `text`, `table` (pass `data-preview-rows` as a JSON array of
rows), or `image` (pass `data-preview-src`). The download button inside the card still
works normally — clicks on the button don't trigger the popup.

## Where to edit your content

- Change navigation or page wording in the matching HTML file.
- Change colors, glass surfaces, responsive layout and animations in `style.css`.
- Change menu, dark mode, scroll reveals, the lightbox preview and the email form in
  `script.js`.
- Replace `PHOTO SLOT` / `VIDEO SLOT` / `FUNNEL SLOT` boxes across the niche project pages
  with real media as your portfolio grows — each box names its suggested filename.

The tool marks use Simple Icons through their public CDN, so an internet connection is
needed for those logos to load. The rest of the site is self-contained.
