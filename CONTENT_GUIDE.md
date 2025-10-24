# Content Creation Guide

Quick reference for creating and managing content in your digital garden.

## Content Types

### Notes
**Location**: `src/content/notes/`
**Purpose**: Thoughts, ideas, learning notes

```markdown
---
title: 'Note Title'
created: 2025-10-24
updated: 2025-10-24
growth: 'seedling'  # or 'budding' or 'evergreen'
topics: [topic1, topic2]
type: 'note'
---

Your content here...
```

### Projects
**Location**: `src/content/projects/`
**Purpose**: Portfolio entries, completed work

```markdown
---
title: 'Project Name'
created: 2025-10-24
updated: 2025-10-24
growth: 'evergreen'
topics: [development, 3d-printing]
type: 'project'
category: 'dev'  # or '3d-printing' or 'product'
links:
  - label: 'GitHub'
    url: 'https://github.com/...'
  - label: 'Live Demo'
    url: 'https://...'
---

Project description and details...
```

### Journals
**Location**: `src/content/journals/`
**Purpose**: Development diaries, progress logs

```markdown
---
title: 'Night Sight Development - Week 1'
created: 2025-10-24
updated: 2025-10-24
growth: 'budding'
topics: [development, night-sight]
type: 'journal'
project: 'night-sight'
entry: 1
---

What I worked on this week...
```

### Photography
**Location**: `src/content/photography/`
**Purpose**: Photo essays, galleries

```markdown
---
title: 'Iceland Adventure 2025'
created: 2025-10-24
updated: 2025-10-24
growth: 'evergreen'
topics: [photography, travel]
type: 'photo-essay'
category: 'travel'  # or 'astro' or 'general'
coverImage: '/images/iceland/cover.jpg'
location: 'Reykjavik, Iceland'
---

Story about your photos...

## Gallery

import Gallery from '../../components/Gallery.astro';

<Gallery
  photos={[
    {
      src: '/images/iceland/photo1.jpg',
      alt: 'Northern lights over glacier',
      caption: 'Jökulsárlón at midnight'
    },
    {
      src: '/images/iceland/photo2.jpg',
      alt: 'Waterfall in sunlight'
    }
  ]}
  columns={3}
/>
```

### Collections
**Location**: `src/content/collections/`
**Purpose**: Curated lists, bookmarks, resources

```markdown
---
title: 'Photography Gear I Love'
created: 2025-10-24
updated: 2025-10-24
growth: 'evergreen'
topics: [photography, gear]
type: 'collection'
---

My favorite photography equipment...

## Cameras

- Sony A7IV - [[my-camera-setup]]
- ...
```

## Frontmatter Reference

### Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Content title |
| `created` | date | Creation date (YYYY-MM-DD) |
| `updated` | date | Last updated date |
| `growth` | enum | `seedling`, `budding`, or `evergreen` |
| `topics` | array | List of topic tags |
| `type` | string | Content type (must match collection) |

### Optional Fields

| Field | Type | Available For | Description |
|-------|------|---------------|-------------|
| `featured` | boolean | All | Show on homepage |
| `draft` | boolean | All | Hide from public |
| `category` | string | projects, photography | Sub-category |
| `links` | array | projects | External links |
| `project` | string | journals | Associated project name |
| `entry` | number | journals | Entry number |
| `coverImage` | string | photography | Cover image path |
| `location` | string | photography | Photo location |

## Growth Stages Explained

### 🌱 Seedling
- New ideas
- Rough thoughts
- May change significantly
- Under 500 words typically

### 🌿 Budding
- Developing concepts
- Partially formed
- Being actively worked on
- 500-1500 words

### 🌳 Evergreen
- Mature content
- Well-researched
- Regularly maintained
- 1500+ words or complete projects

## Wikilinks

### Basic Syntax
```markdown
[[slug]]              # Links to content with that slug
[[slug|Custom Text]]  # Link with custom display text
```

### How It Works
1. System searches all collections for matching slug
2. Falls back to matching title (case-insensitive)
3. Converts spaces to dashes automatically

### Examples
```markdown
See my [[digital-gardens]] note.
Learn about [[digital-gardens|digital gardening]].
Check out the [[night-sight]] project.
```

### Best Practices
- Use descriptive slugs (filename without .md)
- Keep slugs lowercase with dashes
- Link early and often
- Update links when renaming files

## Topics System

### Creating Topics
Just add them to the `topics` array:

```yaml
topics: [photography, travel, iceland, astro-photography]
```

### Topic Naming
- Use lowercase
- Use dashes for multi-word topics
- Be consistent (choose one term and stick with it)
- Think about how you'll browse/filter later

### Common Topics
- Content type: `note`, `tutorial`, `guide`
- Domain: `photography`, `development`, `product-management`
- Technology: `astro`, `typescript`, `3d-printing`
- Status: `work-in-progress`, `archived`

## Photo Galleries

### Adding Photos

1. **Save images** to `public/images/[folder]/`
   ```
   public/
     images/
       iceland/
         photo1.jpg
         photo2.jpg
   ```

2. **Use Gallery component** in your content:
   ```markdown
   import Gallery from '../../components/Gallery.astro';

   <Gallery
     photos={[
       {
         src: '/images/iceland/photo1.jpg',
         alt: 'Description for accessibility',
         caption: 'Optional caption'
       }
     ]}
     columns={3}
   />
   ```

### Gallery Options
- `columns`: Number of columns (2, 3, or 4)
- Each photo needs `src` and `alt`
- `caption` is optional

### Photo Optimization Tips
- Use JPG for photos (good compression)
- Aim for 1920px wide max
- Compress before uploading (tools: ImageOptim, TinyPNG)
- Keep file sizes under 500KB when possible

## Workflow Tips

### Starting a New Note
```bash
# Create file
touch src/content/notes/my-new-note.md

# Add frontmatter
# Start writing
# Link to related content with [[wikilinks]]
```

### Growing Content
1. Start as seedling (rough ideas)
2. Develop to budding (add detail, links)
3. Mature to evergreen (polish, maintain)

### Content Maintenance
- Update `updated` field when making changes
- Add more wikilinks as you create related content
- Upgrade growth stage as content matures
- Review and update evergreen content periodically

### Drafts
Hide unfinished content:
```yaml
draft: true
```

### Featured Content
Show on homepage:
```yaml
featured: true
```

## File Naming

### Good Names
- `digital-gardens.md`
- `night-sight-v2.md`
- `iceland-2025.md`
- `product-management-principles.md`

### Avoid
- `note1.md` (not descriptive)
- `My Cool Idea.md` (use dashes, not spaces)
- `temp.md` (not meaningful)

## Writing Tips

### Be Yourself
- Write naturally
- Don't worry about polish (especially for seedlings)
- Share the process, not just results

### Link Often
- Link to related notes
- Create notes for concepts you reference
- Build a web of ideas

### Keep It Growing
- Return to old notes
- Add new insights
- Update growth stages
- Create new links

### Use Markdown Features
```markdown
# Headings for structure

**Bold** for emphasis
*Italic* for quotes or titles

- Lists
- Are
- Great

> Blockquotes for important points

`code` for technical terms

\`\`\`
code blocks for longer snippets
\`\`\`
```

## Common Issues

### Link Not Working?
- Check slug matches filename (without .md)
- Try lowercase version
- Verify file exists in correct collection

### Photos Not Showing?
- Ensure path starts with `/`
- Check file is in `public/images/`
- Verify filename is correct (case-sensitive)

### Build Errors?
- Check frontmatter syntax (proper YAML)
- Verify dates are YYYY-MM-DD format
- Ensure required fields are present
- Check for typos in growth/type/category enums

## Next Steps

1. Create your first note in `src/content/notes/`
2. Add some wikilinks to connect ideas
3. Upload photos to `public/images/`
4. Create a photo essay
5. Document a project
6. Start a development journal

Remember: Your digital garden grows over time. Start small, iterate, and enjoy the process!
