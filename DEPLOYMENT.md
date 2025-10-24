# Deployment Guide

## Cloudflare Pages Deployment

### Initial Setup

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Digital garden setup"
   git remote add origin https://github.com/yourusername/digital-garden.git
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to Pages → Create a project
   - Connect your GitHub account
   - Select the `digital-garden` repository

3. **Configure Build Settings**
   - **Production branch**: `main`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave empty)

4. **Environment Variables**
   Add the following:
   - `NODE_VERSION`: `18`

5. **Deploy**
   - Click "Save and Deploy"
   - Wait for the build to complete
   - Your site will be available at `digital-garden.pages.dev`

### Custom Domain Setup

1. **Add Custom Domain**
   - In Cloudflare Pages project settings
   - Go to "Custom domains"
   - Click "Set up a custom domain"
   - Enter `greglgomez.com`

2. **DNS Configuration**
   - If your domain is managed by Cloudflare:
     - CNAME record will be auto-configured
   - If your domain is elsewhere:
     - Add a CNAME record pointing to `digital-garden.pages.dev`
     - Or use Cloudflare nameservers (recommended)

3. **SSL/TLS**
   - Cloudflare automatically provisions SSL certificates
   - Ensure SSL/TLS mode is set to "Full" or "Full (strict)"

### Continuous Deployment

Every push to `main` will automatically:
1. Trigger a new build
2. Run `npm run build`
3. Deploy to Cloudflare Pages
4. Update your site at greglgomez.com

### Preview Deployments

Every pull request automatically gets a preview URL:
- Format: `<PR_NUMBER>-digital-garden.pages.dev`
- Perfect for reviewing changes before merging

## Alternative Hosting Options

### Netlify

1. **Deploy**
   ```bash
   npm install netlify-cli -g
   netlify deploy --prod
   ```

2. **Or use Git integration**
   - Connect repository in Netlify dashboard
   - Build command: `npm run build`
   - Publish directory: `dist`

### Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

3. **Or use Git integration**
   - Import project from GitHub
   - Vercel auto-detects Astro configuration

### GitHub Pages

1. **Add GitHub Actions workflow** (`.github/workflows/deploy.yml`):
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   permissions:
     contents: read
     pages: write
     id-token: write

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: 18
         - run: npm ci
         - run: npm run build
         - uses: actions/upload-pages-artifact@v2
           with:
             path: ./dist

     deploy:
       needs: build
       runs-on: ubuntu-latest
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - uses: actions/deploy-pages@v2
           id: deployment
   ```

2. **Enable GitHub Pages**
   - Repository Settings → Pages
   - Source: GitHub Actions
   - Custom domain: greglgomez.com

## Post-Deployment Checklist

- [ ] Verify site loads at greglgomez.com
- [ ] Test dark mode toggle
- [ ] Check wikilinks work correctly
- [ ] Test navigation on mobile
- [ ] Verify backlinks appear
- [ ] Test gallery lightbox functionality
- [ ] Check accessibility with Lighthouse
- [ ] Verify SSL certificate is active
- [ ] Test page load performance

## Monitoring & Analytics

### Cloudflare Analytics (Built-in)
- Already enabled with Cloudflare Pages
- View in Cloudflare Dashboard → Pages → Analytics
- Privacy-friendly, no cookie banner needed

### Optional: Add Plausible Analytics

1. **Add script to BaseLayout.astro**:
   ```html
   <script defer data-domain="greglgomez.com" src="https://plausible.io/js/script.js"></script>
   ```

2. **Sign up at [plausible.io](https://plausible.io)**

3. **Add site to Plausible dashboard**

## Troubleshooting

### Build Fails

- Check Node version is 18+
- Verify all dependencies are in package.json
- Check build logs for specific errors

### Images Not Loading

- Ensure images are in `public/images/`
- Check image paths start with `/`
- Verify images are committed to git

### Wikilinks Not Working

- Check slug format matches content filenames
- Verify wikilink syntax: `[[slug]]` or `[[slug|Text]]`
- Check browser console for JavaScript errors

### Custom Domain Not Working

- Verify DNS records are correct
- Allow up to 24 hours for DNS propagation
- Check SSL/TLS mode is "Full" or "Full (strict)"

## Maintenance

### Update Dependencies

```bash
# Check for updates
npm outdated

# Update packages
npm update

# Update Astro
npm install astro@latest

# Test locally
npm run dev
npm run build
```

### Backup

Your content is version-controlled with Git. Regular commits to GitHub serve as backups.

Consider:
- Keeping a local copy of `public/images/`
- Exporting content periodically
- Using Git tags for major versions

## Performance Optimization

### Already Implemented
- Zero JavaScript by default
- Image lazy loading
- Minimal CSS
- Static site generation
- Cloudflare CDN

### Future Optimizations
- Image compression automation
- WebP/AVIF conversion
- Font subsetting
- Critical CSS inlining
