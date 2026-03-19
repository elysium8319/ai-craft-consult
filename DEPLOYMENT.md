# Deployment Guide

This guide will help you deploy your React + Vite landing page to a hosting platform with a custom domain.

## Quick Deploy Options

### Option 1: Vercel (Recommended ⭐)

**Easiest and fastest deployment with excellent custom domain support**

#### Steps:
1. **Sign up** at [vercel.com](https://vercel.com)
2. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```
3. **Deploy from GitHub** (recommended):
   - Push your code to GitHub
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Vercel will auto-detect Vite and configure everything
   - Click "Deploy"

4. **Or deploy from command line**:
   ```bash
   cd /Users/matt.coughlan92/modern-landing-page
   vercel
   ```

5. **Add custom domain**:
   - Go to your project dashboard on Vercel
   - Click "Settings" → "Domains"
   - Add your custom domain (e.g., `yourdomain.com`)
   - Follow the DNS instructions (usually add an A record or CNAME)
   - Vercel automatically provisions SSL certificate

**Why Vercel?**
- ✅ Auto-detects Vite configuration
- ✅ Automatic HTTPS/SSL
- ✅ Global CDN
- ✅ One-click custom domain setup
- ✅ Free tier is very generous
- ✅ Auto-deploys when you push to Git

---

### Option 2: Netlify

**Great alternative with drag-and-drop deployment**

#### Steps:
1. **Build your project**:
   ```bash
   npm run build
   ```

2. **Deploy via drag-and-drop**:
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag your `dist` folder to the page
   - Done! You get a URL instantly

3. **Or connect to GitHub**:
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy"

4. **Add custom domain**:
   - Go to "Domain settings"
   - Click "Add custom domain"
   - Follow DNS setup instructions
   - Free SSL included

---

### Option 3: Cloudflare Pages

**Fast global CDN with great free tier**

#### Steps:
1. **Sign up** at [pages.cloudflare.com](https://pages.cloudflare.com)
2. **Connect GitHub repository**
3. **Configure build**:
   - Build command: `npm run build`
   - Build output directory: `dist`
4. **Deploy**
5. **Add custom domain**:
   - Go to "Custom domains"
   - Add your domain
   - Update DNS settings if domain is on Cloudflare (automatic)

---

### Option 4: GitHub Pages

**Free hosting directly from your GitHub repo**

#### Steps:
1. **Install gh-pages**:
   ```bash
   npm install -D gh-pages
   ```

2. **Update package.json**:
   ```json
   {
     "homepage": "https://yourusername.github.io/modern-landing-page",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js**:
   ```js
   export default defineConfig({
     base: '/modern-landing-page/',
     plugins: [react()],
   })
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Custom domain** (optional):
   - Add a `CNAME` file to the `public` folder with your domain
   - Configure DNS with your domain provider

---

## DNS Configuration for Custom Domains

### For Apex Domain (example.com):
Add these DNS records at your domain registrar:

**Vercel:**
```
Type: A
Name: @
Value: 76.76.21.21
```

**Netlify:**
```
Type: A
Name: @
Value: 75.2.60.5
```

### For Subdomain (www.example.com):
```
Type: CNAME
Name: www
Value: [your-site].vercel.app (or netlify.app)
```

### Verification:
- DNS changes can take 24-48 hours to propagate
- Use [dnschecker.org](https://dnschecker.org) to verify
- Most platforms provide automatic SSL (HTTPS) once DNS is configured

---

## Before Deployment - Customize Your Site

Make sure to update these in [App.jsx](src/App.jsx):
- Replace "YourBrand" with your actual brand name
- Update the hero section text
- Customize features to match your product
- Update pricing if applicable
- Add your social links in the footer
- Replace placeholder content with real information

---

## Build Locally to Test

Before deploying, test the production build locally:

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

Open [http://localhost:4173](http://localhost:4173) to see the production version.

---

## Troubleshooting

### Build fails on deployment platform:
- Make sure `package.json` has correct build script
- Verify Node version (use Node 18+)
- Check that all dependencies are in `package.json`, not just `devDependencies`

### Custom domain not working:
- Wait 24-48 hours for DNS propagation
- Verify DNS records with `dig yourdomain.com` or online tools
- Make sure you've removed any conflicting DNS records
- Check that domain isn't parked or forwarded elsewhere

### 404 on page refresh:
- Most platforms handle this automatically for SPAs
- For manual hosting, configure server to redirect all routes to `index.html`

---

## Recommended Workflow

1. **Develop locally**: `npm run dev`
2. **Push to GitHub**: Commit and push your changes
3. **Auto-deploy**: Platform automatically builds and deploys
4. **Monitor**: Check deployment logs if something fails
5. **Iterate**: Make changes, push, and watch it deploy automatically

---

**Need help?** Check the platform-specific documentation:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages)
