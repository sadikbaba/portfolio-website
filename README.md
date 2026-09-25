# Abubakar Rabiu Baba Portfolio

A responsive personal portfolio for Abubakar Rabiu Baba, also known as Sadik. It presents my full-stack development work, current move toward AI engineering, selected projects, resume, and contact details.

## About the portfolio

The site is built with plain HTML, CSS, and JavaScript. It has no package manager, build step, or framework dependency.

### Features

- Responsive dark interface with a collapsible contact card on mobile
- About, Resume, Portfolio, Blog, and Contact views
- Portfolio cards with category filters
- Resume timeline, education, technical skills, and career direction
- Downloadable two-page CV PDF and a print-friendly resume source
- Contact form that submits messages to `sadikbaba360@gmail.com`
- GitHub, X, LinkedIn, and email links

## Run locally

You can open `index.html` directly in a browser. For a more reliable local preview, run a small static web server from the project folder:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

The site itself does not need a build or install step. The contact form needs an internet connection because it uses FormSubmit.

## Edit the portfolio

### Profile and contact details

Edit `index.html` to update the profile, education, social links, about text, and contact details. Social links appear in the sidebar and contact section.

### Projects and filters

Project cards are in `index.html`. Each card has a `data-category` value. Keep it set to `web`, `app`, or `api` so the category filters continue to work. Update each project's title, summary, category, and GitHub link together.

### Styling and behavior

- `css/styles.css` contains the colors, layout, responsive rules, cards, and controls
- `js/script.js` handles section navigation, the mobile contact toggle, project filters, and contact form submission

## Update the resume PDF

`resume.html` is the editable source for the printable resume. Update its text and links, open it in a browser, then choose **Print / Save as PDF** and save the result as `assets/Abubakar-Baba-CV.pdf`.

The Resume section links to that PDF. Replacing the PDF at the same path updates the file visitors download. The PDF is an exported copy, so edits to `resume.html` do not change the PDF automatically.

## Contact form setup

The form uses FormSubmit to forward visitor messages to `sadikbaba360@gmail.com`. The first form submission triggers a one-time email confirmation. Confirm that message in the inbox before expecting future submissions to be forwarded. The form also displays a direct email link if submission fails.

FormSubmit is an external service, so form submissions are sent through its endpoint before they reach the inbox.

## Project files

```text
├── assets/
│   ├── Abubakar-Baba-CV.pdf
│   └── header-pic.png
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── index.html
├── resume.html
└── README.md
```

## Current direction

**Full-Stack Development → AI Engineering **
