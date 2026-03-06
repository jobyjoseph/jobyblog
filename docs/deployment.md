# Deployment

This guide covers how to deploy your Headless Shopify application to production on Vercel.

## Vercel

This project is optimized for deployment on [Vercel](https://vercel.com), the platform created by the makers of Next.js.

### Deploy to Vercel

1. **Push your code to a Git repository** (GitHub, GitLab, or Bitbucket)

2. **Import your project to Vercel:**
   - Visit [vercel.com/new](https://vercel.com/new)
   - Import your Git repository
   - Vercel will detect it's a Next.js project automatically

3. **Configure environment variables:**
   - In your Vercel project settings, go to **Environment Variables**
   - Add the following variables:
     ```
     NEXT_PUBLIC_SHOPIFY_STOREFRONT_GRAPHQL_ENDPOINT
     NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN
     BETTER_AUTH_SECRET
     SHOPIFY_MULTIPASS_SECRET (if using social login)
     GOOGLE_CLIENT_ID (if using Google login)
     GOOGLE_CLIENT_SECRET (if using Google login)
     ```
   - Make sure to add them for all environments (Production, Preview, Development)

4. **Deploy:**
   - Click **Deploy**
   - Vercel will build and deploy your application
   - Your app will be available at a `.vercel.app` URL

### Automatic Deployments

Once connected, Vercel will automatically deploy:

- **Production**: Every push to your main/master branch
- **Preview**: Every push to other branches and pull requests

## Environment Variables

Ensure all required environment variables are set in Vercel:

**Required:**

```env
NEXT_PUBLIC_SHOPIFY_STOREFRONT_GRAPHQL_ENDPOINT=your_endpoint
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_token
BETTER_AUTH_SECRET=your_auth_secret
```

**Optional (for social login):**

```env
SHOPIFY_MULTIPASS_SECRET=your_multipass_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

**Important:**

- Generate a new `BETTER_AUTH_SECRET` for production using `openssl rand -base64 32`
- Never use the same secrets in development and production
- Update Google OAuth redirect URIs to include your production domain

## Production Checklist

Before deploying to production:

- [ ] Test the production build locally (`pnpm build && pnpm start`)
- [ ] Verify all environment variables are set
- [ ] Generate production-specific `BETTER_AUTH_SECRET`
- [ ] Update Google OAuth redirect URIs to production domain
- [ ] Test authentication flows (sign up, sign in, forgot password)
- [ ] Test Google social login (if enabled)
- [ ] Verify cart functionality
- [ ] Check mobile responsiveness
- [ ] Test with real Shopify data
- [ ] Review security settings
- [ ] Set up error monitoring (Sentry, etc.)
- [ ] Configure analytics
- [ ] Set up custom domain (optional)
- [ ] Test all API routes under production URL

## Performance Optimization

The project is built with performance in mind:

- ✅ Server-side rendering (SSR)
- ✅ Static generation where possible
- ✅ Image optimization with Next.js Image component
- ✅ Code splitting
- ✅ Lazy loading
- ✅ GraphQL query optimization

## Monitoring

Consider setting up:

- **Error tracking**: Sentry, Rollbar, or similar
- **Performance monitoring**: Vercel Analytics, Google Analytics
- **Uptime monitoring**: UptimeRobot, Pingdom

## Domain Configuration

1. Go to your project settings in Vercel
2. Navigate to **Domains**
3. Add your custom domain
4. Follow the DNS configuration instructions
5. Wait for SSL certificate provisioning

## Security

Remember to:

- Keep your Shopify access tokens secure
- Never commit `.env` files to version control
- Use different tokens for development and production
- Regularly rotate API tokens
- Generate unique `BETTER_AUTH_SECRET` for each environment
- Store authentication tokens in HTTP-only cookies
- Keep Google OAuth secrets secure
- Regularly update dependencies for security patches
- Enable HTTPS (automatic on Vercel)
- Set up proper CORS policies
- Review and update OAuth redirect URIs
- Monitor for suspicious authentication attempts

## Troubleshooting

### Build Failures

- Check Node.js version (requires 20+)
- Verify all dependencies are installed
- Check for TypeScript errors: `pnpm tsc --noEmit`
- Review build logs for specific errors

### Runtime Errors

- Verify environment variables are set correctly
- Check Shopify API credentials
- Review server logs
- Test API endpoints individually

## Next Steps

- Learn about [Contributing](./contributing) to the project
- Check the [GitHub Repository](https://github.com/jobyjoseph/headless-shopify) for updates
- Join the community discussions
