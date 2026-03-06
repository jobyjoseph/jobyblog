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

#### `BETTER_AUTH_SECRET`

Secret key for Better-Auth authentication library.

**How to generate:**

```bash
openssl rand -base64 32
```

This secret is used to sign and verify authentication tokens. Keep it secure and never commit it to version control.

#### `SHOPIFY_MULTIPASS_SECRET`

Shopify Multipass secret for social login integration (requires Shopify Plus).

**How to get it:**

1. Log in to your Shopify Admin
2. Navigate to **Settings** → **Customer accounts**
3. Enable **Multipass** (available only on Shopify Plus plans)
4. Copy the Multipass secret key

**Note:** Multipass is only available on Shopify Plus plans. If you're on a lower plan, social login integration won't be available.

#### `GOOGLE_CLIENT_ID` (Optional)

Google OAuth Client ID for Google social login.

**How to get it:**

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to **APIs & Services** → **Credentials**
4. Click **Create Credentials** → **OAuth client ID**
5. Configure the OAuth consent screen
6. Set application type to **Web application**
7. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://yourdomain.com/api/auth/callback/google` (production)
8. Copy the Client ID

#### `GOOGLE_CLIENT_SECRET` (Optional)

Google OAuth Client Secret that pairs with the Client ID.

**Security:** Keep this secret secure and never commit it to version control.

### Example .env File

```env
# Shopify Storefront API Configuration
NEXT_PUBLIC_SHOPIFY_STOREFRONT_GRAPHQL_ENDPOINT=https://your-store.myshopify.com/api/2024-01/graphql.json
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_access_token_here

# Better-Auth Configuration
BETTER_AUTH_SECRET=your_generated_secret_here

# Shopify Multipass (Shopify Plus only)
SHOPIFY_MULTIPASS_SECRET=your_multipass_secret_here

# Google OAuth (Optional - for social login)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
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

## Authentication Configuration

The project uses **Better-Auth** for authentication with a custom Shopify plugin.

### Authentication Features

- **Email/Password authentication** via Shopify Customer API
- **Google Social Login** via OAuth 2.0 and Shopify Multipass
- **Forgot password** and **Reset password** flows
- **Customer account management**
- **Secure cookie-based sessions**

### Better-Auth Setup

Better-Auth is configured in `src/lib/auth.ts` with:

1. **Next.js cookies plugin** for secure session management
2. **Custom Shopify plugin** that integrates with Shopify's Customer API
3. **Social providers** (Google OAuth)

### Google Social Login Setup

To enable Google social login:

1. Set up a Google Cloud project and OAuth credentials (see `GOOGLE_CLIENT_ID` above)
2. Enable Multipass in your Shopify admin (Shopify Plus required)
3. Add the required environment variables
4. The integration automatically:
   - Authenticates users via Google OAuth
   - Creates/signs in Shopify customers via Multipass
   - Stores access tokens in secure HTTP-only cookies

**Note:** Google social login requires a Shopify Plus account for Multipass functionality.

## Important Notes

- Never commit your `.env` file to version control
- Keep your Storefront API access token secure
- Rotate your tokens regularly for security
- Use different credentials for development and production

## Next Steps

- Learn about the [Project Structure](./project-structure)
- Deploy your app with the [Deployment Guide](./deployment)
