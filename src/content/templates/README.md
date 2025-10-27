# Obsidian Templates Guide

These templates help you quickly create new content with the correct frontmatter.

## Available Templates

- **note.md** - For thoughts, ideas, and learning notes
- **project.md** - For portfolio entries and completed work
- **journal.md** - For development diaries and progress logs
- **photo-essay.md** - For photography with galleries
- **collection.md** - For curated lists and resources

## How to Use Templates in Obsidian

### 1. Configure Templates (One Time Setup)

1. Open Obsidian Settings (⚙️)
2. Go to **Core plugins** → Enable **Templates**
3. Go to **Templates** settings
4. Set **Template folder location** to: `.obsidian/templates`
5. (Optional) Set **Date format**: `YYYY-MM-DD`
6. (Optional) Set **Time format**: `HH:mm`

### 2. Using a Template

**Option A: Command Palette**
1. Create a new note (or open existing)
2. Press `Cmd+P` (Mac) or `Ctrl+P` (Windows/Linux)
3. Type "insert template"
4. Select the template you want

**Option B: Hotkey**
1. Go to Settings → Hotkeys
2. Search for "Templates: Insert template"
3. Assign a hotkey (e.g., `Cmd+T`)
4. Use the hotkey in any note

### 3. Fill in the Frontmatter

After inserting a template:

1. **Replace `{{title}}`** with your actual title (if not auto-filled)
2. **Update dates** (usually auto-filled to today)
3. **Set growth stage**:
   - `seedling` - New, rough ideas
   - `budding` - Developing content
   - `evergreen` - Polished, mature content
4. **Add topics**: `[photography, travel]`
5. **For projects**: Update `category` (dev, 3d-printing, or product)
6. **For journals**: Set `project` name and `entry` number
7. **For photo-essays**: Set `category` (travel, astro, or general)

### 4. Save to Correct Folder

Make sure to save your note in the right collection folder:

- Notes → `notes/`
- Projects → `projects/`
- Journals → `journals/`
- Photo essays → `photography/`
- Collections → `collections/`

## Template Variables

Obsidian supports these variables in templates:

- `{{title}}` - Current note title
- `{{date}}` - Current date (uses format from settings)
- `{{date:YYYY-MM-DD}}` - Custom date format
- `{{time}}` - Current time

## Example Workflow

### Creating a New Note

1. Open Obsidian in your `src/content/` vault
2. Press `Cmd+N` to create a new note
3. Name it: `my-new-idea`
4. Press `Cmd+P` → "Insert template" → Select `note.md`
5. Fill in frontmatter (title auto-fills, dates auto-fill)
6. Add topics: `topics: [learning, digital-garden]`
7. Write your content
8. Add wikilinks: `[[related-note]]`
9. Save!

### Creating a Project

1. Create new note in `projects/` folder
2. Insert `project.md` template
3. Update:
   - `category: dev` (or `3d-printing` or `product`)
   - `growth: evergreen` (since projects are usually complete)
   - Add your project links (GitHub, demo, etc.)
4. Write project description
5. Save!

## Tips

- **Growth stages**: Start everything as `seedling`, upgrade as you develop
- **Topics**: Be consistent with naming (lowercase, dashes for multi-word)
- **Wikilinks**: Use `[[slug]]` format - matches the filename without .md
- **Draft mode**: Add `draft: true` to hide content from site
- **Featured**: Add `featured: true` to highlight on homepage

## Quick Reference

### Growth Stages
- 🌱 `seedling` - New ideas, < 500 words
- 🌿 `budding` - Developing, 500-1500 words
- 🌳 `evergreen` - Mature, 1500+ words

### Project Categories
- `dev` - Software/web development
- `3d-printing` - 3D modeling and printing
- `product` - Product management work

### Photo Categories
- `travel` - Travel photography
- `astro` - Astrophotography
- `general` - Everything else

## Need Help?

See the main project documentation:
- `/README.md` - Project overview
- `/CONTENT_GUIDE.md` - Detailed content creation guide
- `/DEPLOYMENT.md` - Deployment instructions
