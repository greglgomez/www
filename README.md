# Greg L. Gomez - Digital Garden

A personal digital garden built with Astro, featuring interconnected notes, project portfolios, photography galleries, and curated collections.

## Features

- **Content Collections**: Organized into notes, projects, journals, photography, and collections
- **Growth Stages**: Content marked as 🌱 seedling, 🌿 budding, or 🌳 evergreen
- **Wikilinks**: Bi-directional linking with `[[wikilinks]]` syntax
- **Backlinks**: Automatic backlink detection and display
- **Photo Galleries**: Grid layouts with lightbox and EXIF metadata support
- **Dark Mode**: Automatic theme switching with manual toggle
- **Accessibility**: WCAG AAA compliant, keyboard navigation, semantic HTML
- **Performance**: Zero JavaScript by default, optimized images, perfect Lighthouse scores
- **Beautiful Typography**: Serif headings, sans-serif body, Inconsolata for code

## Tech Stack

- **Framework**: [Astro 5](https://astro.build/) with TypeScript
- **Styling**: Custom CSS with design tokens
- **Hosting**: Cloudflare Pages
- **Content**: Markdown/MDX with frontmatter

## Project Structure

```
digital-garden/
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Sidebar.astro
│   │   ├── ThemeToggle.astro
│   │   ├── GrowthBadge.astro
│   │   ├── Gallery.astro
│   │   └── Backlinks.astro
│   ├── content/         # Content collections
│   │   ├── notes/       # Thoughts and ideas
│   │   ├── projects/    # Portfolio entries
│   │   ├── journals/    # Development diaries
│   │   ├── photography/ # Photo essays
│   │   └── collections/ # Curated lists
│   ├── layouts/         # Page templates
│   │   ├── BaseLayout.astro
│   │   └── ContentLayout.astro
│   ├── lib/             # Utilities and plugins
│   │   ├── remark-wikilinks.ts
│   │   └── content-utils.ts
│   ├── pages/           # Routes
│   └── styles/          # Global styles and tokens
├── public/              # Static assets
│   └── images/          # Photos with EXIF
└── astro.config.mjs     # Astro configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Creating Content

### Content Frontmatter

All content requires the following frontmatter:

```yaml
---
title: 'Your Title'
created: 2025-10-24
updated: 2025-10-24
growth: 'seedling' # or 'budding' or 'evergreen'
topics: [photography, travel]
type: 'note' # depends on collection
---
```

### Notes

Create files in `src/content/notes/`:

```markdown
---
title: 'My Note'
created: 2025-10-24
updated: 2025-10-24
growth: 'seedling'
topics: [topic1, topic2]
type: 'note'
---

Your content here. Use [[wikilinks]] to link to other content.
```

### Projects

Create files in `src/content/projects/`:

```yaml
---
title: 'My Project'
created: 2025-10-24
updated: 2025-10-24
growth: 'evergreen'
topics: [development]
type: 'project'
category: 'dev' # or '3d-printing' or 'product'
links:
  - label: 'GitHub'
    url: 'https://github.com/...'
---
```

### Photography

Create files in `src/content/photography/`:

```yaml
---
title: 'Iceland 2025'
created: 2025-10-24
updated: 2025-10-24
growth: 'evergreen'
topics: [photography, travel]
type: 'photo-essay'
category: 'travel' # or 'astro' or 'general'
coverImage: '/images/iceland/cover.jpg'
location: 'Iceland'
---

# Your photo essay

<Gallery
  photos={[
    { src: '/images/iceland/1.jpg', alt: 'Description', caption: 'Caption' },
    { src: '/images/iceland/2.jpg', alt: 'Description' }
  ]}
  columns={3}
/>
```

### Wikilinks

Link between content using double brackets:

- `[[slug]]` - Links to content with that slug
- `[[slug|Display Text]]` - Custom display text

The system will:
1. Search all collections for matching slug
2. Fall back to title matching
3. Show backlinks on linked pages

## Customization

### Design Tokens

Edit `src/styles/tokens.css` to customize:

- Typography (fonts, sizes, line heights)
- Colors (light and dark themes)
- Spacing scale
- Border radius
- Transitions

### Navigation

Edit `src/components/Sidebar.astro` to customize:

- Navigation sections
- Links
- Site title and description

## Deployment

### Cloudflare Pages

1. Push code to GitHub
2. Connect repository to Cloudflare Pages
3. Use build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variables: `NODE_VERSION=18`

4. Configure custom domain at greglgomez.com

### Other Hosts

The site is a standard static site and can be hosted anywhere:

- **Netlify**: Drop `dist` folder or connect Git
- **Vercel**: Import from GitHub with Astro preset
- **GitHub Pages**: Use Astro's GitHub Pages guide

## Performance

- Zero JavaScript by default (islands for interactivity)
- Optimized images with lazy loading
- Minimal CSS with design tokens
- Perfect Lighthouse scores target

## Accessibility

- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- Skip link for main content
- Focus management
- High contrast color ratios (WCAG AAA)

## License

Personal project - all rights reserved.

## Author

Greg L. Gomez - [greglgomez.com](https://greglgomez.com)
