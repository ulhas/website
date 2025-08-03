# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a peronal website for Ulhas hosted on https://oolhaas.com. It is created using Hugo and deployed on Github pages. We are using bear as the theme for this website.

This website is meant for Ulhas to write about anything and everything. This will have a posts page, a manifesto page and a home page which will have my profile, top posts and latest manifesto.

## Important Notes

- You should keep the website simple in terms of code and UI
- You *ALWAYS* follow YAGNI
- You will cross check and self-criticise your outputs

## Essential Commands

```bash
# Run local development server (auto-reload on changes)
hugo server

# Build the site for production
hugo

# Create new blog post
hugo new blog/post-title.md

# Create new page
hugo new page-name.md
```

## Architecture & Key Files

### Configuration
- `hugo.toml` - Main Hugo configuration (baseURL, title, theme)
- `CNAME` - GitHub Pages custom domain configuration
- `.github/workflows/hugo.yml` - Automated deployment pipeline (Hugo v0.128.0)

### Content Structure
- `content/` - Markdown files for pages and blog posts
- `content/blog/` - Blog posts directory
- `static/` - Static assets (images, downloads)
- `public/` - Generated site output (gitignored)

### Theme Customization
The site uses Hugo Bear Blog theme as a Git submodule. To customize:
- Override templates: Create files in `layouts/` matching theme structure
- Custom CSS: Add to `layouts/partials/custom_head.html`
- Theme location: `themes/hugo-bearblog/`

## Deployment

The site automatically deploys to GitHub Pages when pushing to the `main` branch. The GitHub Action:
1. Builds with Hugo 0.128.0 and Dart Sass
2. Minifies output
3. Deploys to GitHub Pages

Note: There's a domain name discrepancy - hugo.toml shows `oolhas.com` while CNAME shows `oolhaas.com`. Verify correct domain before making changes.

## Creating Content

Hugo Bear Blog supports:
- Blog posts with categories and tags
- Static pages
- Custom HTML in markdown via shortcodes
- No JavaScript, minimal CSS for fast loading

Content front matter example:
```yaml
---
title: "Post Title"
date: 2024-01-01
tags: ["tag1", "tag2"]
---
```
