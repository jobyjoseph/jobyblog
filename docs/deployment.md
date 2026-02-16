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

```env
NEXT_PUBLIC_SHOPIFY_STOREFRONT_GRAPHQL_ENDPOINT=your_endpoint
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_token
```

## Production Checklist

Before deploying to production:

- [ ] Test the production build locally (`pnpm build && pnpm start`)
- [ ] Verify all environment variables are set
- [ ] Test authentication flows
- [ ] Verify cart functionality
- [ ] Check mobile responsiveness
- [ ] Test with real Shopify data
- [ ] Review security settings
- [ ] Set up error monitoring (Sentry, etc.)
- [ ] Configure analytics
- [ ] Set up custom domain (optional)

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
- Enable HTTPS (automatic on Vercel)
- Set up proper CORS policies

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
