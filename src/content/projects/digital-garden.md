---
title: 'Digital Garden Website'
created: 2025-10-24
updated: 2025-10-24
growth: 'budding'
topics: [development, web, digital-garden]
type: 'project'
category: 'dev'
links:
  - label: 'Live Site'
    url: 'https://greglgomez.com'
---

This is the website you're currently viewing! A personal digital garden built from scratch using modern web technologies.

## Motivation

I wanted a place to:

- Share my thoughts and ideas as they develop
- Document my projects and learning journey
- Showcase my photography
- Build interconnected knowledge over time

Traditional blogs didn't fit this model - they're too linear, too polished, too chronological. I wanted something more organic, something that grows and evolves.

## Technical Approach

Built with [[welcome|Astro]] for maximum performance and flexibility:

- **Zero JavaScript by default** - Progressive enhancement where needed
- **Content collections** - Type-safe, organized content management
- **Wikilinks** - Bi-directional linking between content
- **Photo galleries** - With EXIF metadata support
- **Dark mode** - Respects system preferences with manual override

See my [[digital-gardens|notes on digital gardens]] for more on the philosophy behind this approach.

## Features

### Growth Stages

Content is marked by maturity:
- 🌱 **Seedling** - New ideas, rough thoughts
- 🌿 **Budding** - Developing concepts
- 🌳 **Evergreen** - Polished, mature content

### Wikilinks & Backlinks

Content can reference other content using `[[wikilinks]]`. The system automatically:
- Resolves links across all content types
- Shows backlinks on each page
- Enables non-linear exploration

### Beautiful Typography

Careful attention to readability:
- Serif typefaces for headings
- Sans-serif for body text
- Monospace (Inconsolata) for code
- Optimal line lengths and spacing

## Future Enhancements

- Full-text search
- Content graph visualization
- RSS feeds
- Commenting system (maybe)
- Photo EXIF extraction automation

## Links

Check out the code or the live site using the links above!
