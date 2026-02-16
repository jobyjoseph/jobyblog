# Configuration

This page covers all the configuration options for the Headless Shopify project.

## Environment Variables

The following environment variables are required to run the application:

### Required Variables

#### `NEXT_PUBLIC_SHOPIFY_STOREFRONT_GRAPHQL_ENDPOINT`

Your Shopify Storefront GraphQL API endpoint.

**Format:**

```
https://your-store.myshopify.com/api/2024-01/graphql.json
```

**How to get it:**

1. Go to your Shopify Admin
2. Navigate to Settings → Apps and sales channels
3. Create a custom app or use an existing one
4. Copy the Storefront API endpoint

#### `NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN`

Your Shopify Storefront API access token.

**How to get it:**

1. In your Shopify Admin, go to the custom app
2. Navigate to API credentials
3. Copy the Storefront API access token

### Example .env File

```env
# Shopify Storefront API Configuration
NEXT_PUBLIC_SHOPIFY_STOREFRONT_GRAPHQL_ENDPOINT=https://your-store.myshopify.com/api/2024-01/graphql.json
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_access_token_here
```

## Shopify Setup

To use this project, you need a Shopify store with the Storefront API enabled. There are two ways to set this up:

### Option 1: Using the Headless App (Recommended)

The easiest way to get started is by using the official **Headless** app from Shopify.

1. Log in to your Shopify Admin
2. Go to **Settings** → **Apps and sales channels**
3. Click **Shopify App Store**
4. Search for **"Headless"** (official Shopify app)
5. Click **Install** and follow the prompts
6. Once installed, the Headless app will automatically:
   - Generate a Storefront API access token
   - Configure the required API scopes
   - Provide you with the API credentials

7. Copy the credentials from the Headless app dashboard:
   - Storefront API endpoint
   - Storefront API access token

**Benefits of using the Headless app:**

- Quick and easy setup
- Automatic scope configuration
- Official Shopify support
- Purpose-built for headless storefronts

### Option 2: Creating a Custom App

Alternatively, you can create a custom app manually:

1. Log in to your Shopify Admin
2. Go to **Settings** → **Apps and sales channels**
3. Click **Develop apps**
4. Click **Create an app**
5. Name your app (e.g., "Headless Storefront")
6. Click **Create app**

### Configuring API Access (Custom App)

1. In your custom app, go to **Configuration**
2. Under **Storefront API**, click **Configure**
3. Enable the required access scopes:
   - Read products
   - Read customers
   - Read orders
   - Write cart
   - Read cart
4. Save your changes
5. Go to **API credentials** and copy your access token

## Next.js Configuration

The project uses Next.js 16 with the App Router. Configuration is managed in `next.config.ts`.

### Key Features Enabled

- **Turbopack** for faster builds
- **GraphQL file loading**
- **TypeScript** support
- **Tailwind CSS** integration

## Authentication Configuration

The project uses **Better-Auth** for authentication. Configuration can be found in the authentication setup files.

## Important Notes

- Never commit your `.env` file to version control
- Keep your Storefront API access token secure
- Rotate your tokens regularly for security
- Use different credentials for development and production

## Next Steps

- Learn about the [Project Structure](./project-structure)
- Deploy your app with the [Deployment Guide](./deployment)
