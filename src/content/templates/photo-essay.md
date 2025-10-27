---
title: "{{title}}"
created: {{date:YYYY-MM-DD}}
updated: {{date:YYYY-MM-DD}}
growth: evergreen
topics: [photography]
type: photo-essay
category: travel
coverImage: /images/folder/cover.jpg
location: Location Name
---

# {{title}}

Story about your photos...

## Gallery

import Gallery from '../../components/Gallery.astro';

<Gallery
  photos={[
    {
      src: '/images/folder/photo1.jpg',
      alt: 'Description for accessibility',
      caption: 'Optional caption'
    },
    {
      src: '/images/folder/photo2.jpg',
      alt: 'Description'
    }
  ]}
  columns={3}
/>

## Details

Date: {{date:YYYY-MM-DD}}
Location:
Camera:

## Related

- [[]]
