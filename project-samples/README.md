# project-samples/

This is your drop-in folder for new project files. It's separate from `portfolio-assets/`
(which already holds the finished e-commerce and resume files) so you always know where to
put something new, by niche.

```
project-samples/
├── ecommerce/       → linked from projects-ecommerce.html
├── smm/             → linked from projects-smm.html
├── ai-automation/    → linked from projects-ai-automation.html
└── funnel-seo/       → linked from projects-funnel-seo.html
```

## smm/ — exact filenames the site already expects

`projects-smm.html` already has download buttons pointing at these filenames. Drop files
with these **exact names** into `project-samples/smm/` and the buttons work immediately,
no code changes needed:

- `Client-Welcome-Packet.docx`
- `SMM-Client-Hub-Setup-Guide.md`
- `Client-Tracker-Import.csv`
- `Content-Calendar-Import.csv`
- `Monthly-Analytics-Report.docx`
- `Packages-Services-Proposal.docx`
- `Social-Media-Manager-Portfolio.docx`
- `Social-Media-Strategy-Guide.docx`

## ai-automation/ and funnel-seo/

These niches are new and don't have finished files yet — `projects-ai-automation.html` and
`projects-funnel-seo.html` currently show placeholder "slots" (the same pattern the
e-commerce page uses for future screenshots/videos). Once you record a workflow demo or
a funnel screenshot:

1. Save it into the matching subfolder here, using a clear filename (the pages suggest one
   next to each slot).
2. Open the page's `.html` file, find the `media-slot` you're replacing, and either:
   - swap it for `<img src="project-samples/ai-automation/your-file.png" alt="...">`, or
   - swap it for `<video src="project-samples/ai-automation/your-file.mp4" controls></video>`,
   - or just link it: `<a href="project-samples/ai-automation/your-file.mp4">Watch ↗</a>`.

## ecommerce/

For any *new* e-commerce proof beyond what's already in `portfolio-assets/` — extra
screenshots, a second before/after, another SOP. Same pattern: drop the file here, add a
card or swap a slot in `projects-ecommerce.html` pointing at it.

## General rule

Any button on the site that says "Download" or "View" is just an `<a href="...">` pointing
at a file path. If the path exists in the repo, the button works — nothing else to wire up.
See the main `README.md` for the full GitHub Pages publish steps.
