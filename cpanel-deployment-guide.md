# cPanel Deployment Guide

## Prerequisites
- cPanel hosting account with file manager access
- Node.js support (for building the project locally)

## Deployment Steps

### 1. Build the Static Site
Run the following commands locally:
```bash
npm install
npm run build
```

This will create an `out` folder with all static files.

### 2. Upload Files to cPanel
1. Log into your cPanel account
2. Open File Manager
3. Navigate to `public_html` (or your domain's document root)
4. Upload all contents from the `out` folder to your domain's root directory
5. Upload the `.htaccess` file to the same directory

### 3. File Structure on Server
Your cPanel file structure should look like:
```
public_html/
├── .htaccess
├── index.html
├── about/
│   └── index.html
├── blog/
│   ├── index.html
│   └── [slug]/
│       └── index.html
├── store/
│   └── index.html
├── _next/
│   └── static/
└── other static assets...
```

### 4. Configure Domain
- Ensure your domain points to the correct directory
- The main `index.html` should be in your domain's document root

### 5. Test the Deployment
- Visit your domain to ensure the site loads correctly
- Test navigation between pages
- Verify all images and assets load properly

## Important Notes

### Limitations of Static Export
- No server-side authentication (Supabase auth disabled)
- No API routes
- No server-side rendering
- No dynamic imports that require server

### Features That Work
- All static pages and content
- Client-side routing
- Static blog posts
- Contact forms (with external services)
- All styling and animations

### Troubleshooting
1. **404 Errors**: Ensure `.htaccess` is uploaded and mod_rewrite is enabled
2. **Missing Assets**: Check that all files from `out` folder are uploaded
3. **Broken Links**: Verify all internal links use relative paths

## Alternative: Using Subdirectory
If deploying to a subdirectory (e.g., `yoursite.com/blog`):
1. Update `next.config.js` with `basePath: '/blog'`
2. Rebuild the project
3. Upload to `public_html/blog/` instead

## Performance Optimization
- The `.htaccess` file includes compression and caching rules
- Images are optimized for web delivery
- CSS and JavaScript are minified

Your static site should now be live and accessible via your domain!