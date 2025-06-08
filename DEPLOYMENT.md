# Deployment Guide

## Important: HTTPS Requirement for Geolocation

Modern browsers require HTTPS for using geolocation features. The location sharing feature in this application will only work when:

1. The website is served over HTTPS in production
2. Or when accessing via localhost during development

## Deployment Options

### 1. Vercel (Recommended)

The easiest way to deploy this Next.js application with HTTPS:

1. Create a [Vercel account](https://vercel.com/signup) if you don't have one
2. Install the Vercel CLI: `npm i -g vercel`
3. From your project directory, run: `vercel`
4. Follow the prompts to deploy your application
5. Vercel automatically provides HTTPS for all deployments

### 2. Netlify

Another simple option with automatic HTTPS:

1. Create a [Netlify account](https://app.netlify.com/signup)
2. Install the Netlify CLI: `npm install -g netlify-cli`
3. Build your application: `npm run build`
4. Deploy with: `netlify deploy`
5. For production: `netlify deploy --prod`

### 3. Self-hosting with HTTPS

If you're self-hosting:

1. Build the application: `npm run build`
2. Set up a web server (Nginx, Apache, etc.)
3. Obtain an SSL certificate:
   - [Let's Encrypt](https://letsencrypt.org/) provides free SSL certificates
   - Use Certbot: https://certbot.eff.org/ for easy certificate installation
4. Configure your web server to use HTTPS

## Development Mode with HTTPS

For local development with HTTPS:

### Method 1: Using mkcert

1. Install [mkcert](https://github.com/FiloSottile/mkcert)
2. Run: `mkcert -install`
3. Generate certificates: `mkcert localhost`
4. Update your Next.js configuration in `next.config.js`:

```js
const { createServer } = require('https');
const { readFileSync } = require('fs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // HTTPS server for development
  devServer: (config) => {
    return (app, server) => {
      const httpsOptions = {
        key: readFileSync('./localhost-key.pem'),
        cert: readFileSync('./localhost.pem')
      };
      
      const httpsServer = createServer(httpsOptions, app);
      httpsServer.listen(3000, () => {
        console.log('HTTPS server listening on port 3000');
      });
    };
  }
};

module.exports = nextConfig;
```

### Method 2: Chrome Flag for Development

For Chrome, you can enable insecure origins for geolocation during development:

1. Open Chrome and navigate to: `chrome://flags/#unsafely-treat-insecure-origin-as-secure`
2. Add your development URL (e.g., `http://localhost:3000`)
3. Restart Chrome

**Note:** This method is only for development purposes and should not be used in production.

## Troubleshooting

If you encounter issues with geolocation:

1. Ensure the site is accessed via HTTPS or localhost
2. Check that users have granted location permissions in their browser
3. Some mobile devices may require location services to be enabled at the system level
4. VPNs or proxy services might interfere with accurate geolocation 