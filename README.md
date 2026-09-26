# Portfolio Slide Deck — Marketing Video Concepts

A lightweight, dependency-free presentation deck showcasing marketing video concepts built for a fictional global shipping brand, **Meridian**. Presents the work the way a live pitch deck would — navigable slide by slide, with progressive bullet reveals — instead of a static PDF or plain webpage.

**[View the live deck →](https://hwushyam2005.github.io/Meridian_Pulse_3/)** *(add your GitHub Pages link here once deployed)*

---

## What this is

A 6-slide deck covering three portfolio projects (a product launch video, a data-visualization explainer, and a talking-head overlay system) plus a skills summary and a closing slide linking to each live demo.

It behaves like a real presentation tool: arrow-key/click navigation, fade-and-slide transitions between slides, a progress counter, and click-to-reveal bullet points — but it's built entirely from plain HTML, CSS, and vanilla JavaScript. No frameworks, no build step, no installation.

## Inspired by Slidev

The idea for this deck's structure and feature set came from **[Slidev](https://sli.dev/)** — an open-source, Markdown-based presentation tool built for developers, using Vue and Vite under the hood. Slidev is a genuinely more powerful tool: it supports live-coding slides, real syntax highlighting, themes installable via npm, PDF/PPTX export, and presenter mode with speaker notes.

This project **does not use Slidev** or any of its underlying technology. Instead, it reimplements the *outcome* of a few of its core ideas using nothing but static web files, specifically so the deck could be built and hosted with zero installation:

| Slidev concept | How it's reproduced here |
|---|---|
| Markdown → slides | Each slide is a hand-written `<section class="slide">` in `index.html` |
| Keyboard/click navigation | Vanilla JS `keydown` listener + on-screen prev/next buttons |
| Slide transitions | CSS `opacity`/`transform` transitions |
| Themes | CSS custom properties (the Meridian navy/teal palette) |
| Click-to-reveal bullets (`v-click`) | JS toggles a `.shown` class on each list item, one at a time |
| Progress indicator | A `"n / total"` counter updated by the same navigation script |

Not reproduced: live-coding/syntax highlighting, presenter mode with synced speaker notes, and automated PDF/PPTX export — these genuinely require Slidev's underlying Vue/Vite/Playwright stack and don't have a meaningful static-file equivalent.

## Files

| File | Purpose |
|---|---|
| `index.html` | Slide content and structure only — no styling or logic. |
| `style.css` | Theme, layout, and all transition/animation styling. |
| `script.js` | Navigation (arrow keys, buttons), progressive bullet reveal, and the progress counter. |

Kept separate for readability. `index.html` links to both other files by relative path, so **all three files must stay in the same folder**.

## Viewing locally

Open `index.html` directly in any browser — double-click it, or drag it into a browser tab. No build step, server, or install required.

**Controls:**
- **→ / Space** — reveal the next bullet, then advance to the next slide once all bullets are shown
- **←** — go back a slide
- On-screen prev/next buttons and the progress counter also work (touch-friendly for mobile)
