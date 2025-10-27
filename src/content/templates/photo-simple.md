---
title: "{{title}}"
created: {{date:YYYY-MM-DD}}
updated: {{date:YYYY-MM-DD}}
growth: evergreen
type: photo-essay
---

# {{title}}

Story about your photos...

**Location:**
**Date:** {{date:YYYY-MM-DD}}

## Gallery

import Gallery from '../../components/Gallery.astro';

<Gallery
  photos={[
    {
      src: '/images/folder/photo1.jpg',
      alt: 'Description',
      caption: 'Optional caption'
    }
  ]}
  columns={3}
/>

## Related

- [[]]
