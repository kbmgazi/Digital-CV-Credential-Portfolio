# KB Mgazi — Professional Portfolio

A static, dependency-free personal CV and certification portfolio site. Pure HTML5, CSS3, and vanilla JavaScript — no frameworks, no build step, no backend.

```
professional-portfolio/
│
├── index.html              All page content and structure
├── css/
│   └── style.css           Design system (CSS variables) + all styling
├── js/
│   └── script.js           All editable data + interactivity
├── assets/
│   ├── images/              Profile photo goes here
│   ├── certificates/        Certificate images go here
│   └── documents/           CV.pdf goes here
└── README.md                 This file
```

Open `index.html` directly in a browser — everything works locally with no server required.

---

## Editing your information

Almost everything you'll want to change lives in **`js/script.js`**, in a set of clearly labeled arrays and objects near the top of the file. You do not need to touch `index.html` for routine content updates.

### Personal / hero content
The name, headline, and summary text are in `index.html` under `<section class="hero" id="home">`. Edit the text directly.

### Profile stats (hero snapshot + metrics strip)
```js
const profileStats = {
  certifications: "[ADD]",
  projects: "[ADD]",
  technologies: "[ADD]",
  experience: "[ADD]"
};
```
Replace each `"[ADD]"` with a real value, e.g. `"3+"`. Don't inflate these — leave them accurate.

### Work experience
Edit the `experience` array. Copy the existing object as a template for each additional role:
```js
{
  organization: "Company Name",
  position: "Job Title",
  startDate: "Jan 2025",
  endDate: "Present",
  location: "City, Country",
  description: "One or two sentence summary.",
  responsibilities: ["...", "..."],
  tools: ["...", "..."],
  achievements: ["..."]
}
```

### Education
Edit the `education` array the same way — copy the existing object, add a new entry per qualification.

### Adding a certification
1. Save the certificate file into `assets/certificates/` — either an image (JPG/PNG) **or a PDF**. Both are supported; if your certificate is a PDF, you can use it as-is with no conversion.
2. Open `js/script.js` and add a new object to the `certifications` array:
   ```js
   {
     name: "AWS Certified Cloud Practitioner",
     issuer: "Amazon Web Services",
     category: "Cloud",
     issueDate: "2026",
     expiryDate: "N/A",
     credentialId: "XXXXXXXX",
     status: "Active",
     description: "Short description of what this certification covers.",
     image: "assets/certificates/aws-cloud-practitioner.jpg",
     verificationUrl: "https://www.credly.com/your-verification-link"
   }
   ```
3. `category` must be one of the values already listed in the `certCategories` array (or add a new one to both places if you need another category).
4. `status` should be one of: `Active`, `In Progress`, `Completed`, `Expired` — this controls the colored status pill.
5. Leave `verificationUrl` as an empty string `""` if there's no official verification page yet — the "Verify Credential" button will simply be hidden.

The certification grid, filters, and search box all update automatically — no other file needs to change.

### Uploading a certificate image or PDF
Just drop the file into `assets/certificates/` and reference its path in the `image` field, as above. Images use `loading="lazy"` automatically. If a certificate is a `.pdf` file, the card automatically shows a "PDF Certificate" tile instead of a photo thumbnail, and clicking it opens the full PDF inline in the certificate viewer using the browser's built-in PDF renderer — "Open Full Size" opens it in a new tab. If an image fails to load, a placeholder icon is shown in its place — you'll never see a broken-image icon.

### Adding a project
Edit the `projects` array in `js/script.js`, following the existing object shape. Leave `githubUrl` or `demoUrl` as `""` if not applicable — the link will simply be omitted (a `[ADD GITHUB LINK]` note shows instead).

### Adding your CV PDF
Save your CV as `CV.pdf` inside `assets/documents/`. The **Download CV** button in the Resume section already points to `assets/documents/CV.pdf` — no code changes needed.

### Adding your profile photo
Save your photo into `assets/images/`. In `index.html`, find the `about-photo` block and either:
- Uncomment/add an `<img src="assets/images/your-photo.jpg" alt="Your Name">` tag, or
- Replace the existing `photo-placeholder` div with the image tag directly.

### Skills
Edit the `skillGroups` array in `js/script.js`. Each group has a `category`, an optional `note`, and an `items` array. Add `level: "Proficient"` (or `"Familiar"`, `"Working Knowledge"`, `"Advanced"`) to any skill item only once you've deliberately assessed yourself at that level — omit `level` entirely otherwise, and no badge will show.

### Contact links
Update the placeholder links directly in `index.html`, in the `<section id="contact">` block: replace `YOUR_EMAIL`, `YOUR_LINKEDIN_URL`, and `YOUR_GITHUB_URL`.

---

## Changing colors

All colors are defined as CSS variables at the top of `css/style.css`:

```css
:root {
  --color-navy: #0B1F3A;
  --color-charcoal: #263238;
  --color-grey: #667085;
  --color-white: #FFFFFF;
  --color-ivory: #F8F6F0;
  --color-forest: #1F5D42;
  --color-burgundy: #6D1F2B;
  --color-teal: #0F5B66;
}
```
Change a value once here and it updates everywhere that color is used. A dark theme is also defined under `[data-theme="dark"]` in the same file.

## Typography

Fonts are loaded from Google Fonts in `index.html` (`IBM Plex Sans` for headings, `Source Sans 3` for body text) and referenced via `--font-display` / `--font-body` in `css/style.css`.

---

## Features included

- Sticky navigation with active-section highlighting and a mobile hamburger menu
- Certification cards with category filtering and a live search box
- Certificate image viewer (modal/lightbox) — closes on Escape, outside click, or the close button; keyboard accessible
- Light/dark theme toggle (resets to system preference each visit — no browser storage is used, per the constraints of this environment)
- Scroll-reveal animations that respect `prefers-reduced-motion`
- Print-friendly resume section (`Ctrl/Cmd+P` while viewing the Resume section trims the page to just the CV content)
- Semantic HTML, visible keyboard focus states, alt text, and ARIA labels throughout

---

## Deploying

### GitHub Pages
1. Push this folder to a GitHub repository.
2. In the repository, go to **Settings → Pages**.
3. Under "Build and deployment", set **Source** to "Deploy from a branch".
4. Choose your default branch (e.g. `main`) and the `/ (root)` folder, then save.
5. GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/` within a few minutes.

### AWS S3 + CloudFront
1. Create an S3 bucket (any globally unique name).
2. Upload the entire contents of this folder to the bucket (keep the same folder structure).
3. Under the bucket's **Properties**, enable **Static website hosting**, and set `index.html` as the index document.
4. If serving directly from S3, update the bucket policy to allow public `s3:GetObject` access (or, for a private bucket, keep it locked down and let CloudFront handle public access via an Origin Access Control).
5. Create a **CloudFront distribution** with the S3 bucket (or its static website endpoint) as the origin.
6. Set the default root object to `index.html`.
7. (Optional) Attach a custom domain and an ACM SSL certificate to the CloudFront distribution.
8. Once deployed, CloudFront will serve the site over HTTPS at its `*.cloudfront.net` domain, or your custom domain if configured.

---

## What's intentionally left out

- No contact form: this is a static site with no backend. Adding a working form would require a third-party service (e.g. Formspree, Getform) or your own backend endpoint.
- No fabricated content: certifications, projects, dates, and credential IDs are left as clearly marked `[ADD ...]` placeholders where real information wasn't provided. Replace every placeholder before sending this site to a recruiter or employer — search the project for `[ADD` to find them all.
- No personal identification numbers, home address, or private documents are included or should be added.