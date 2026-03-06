# Getting Started

This guide will help you set up and run the Headless Shopify project locally.

## Requirements

Before you begin, ensure you have the following installed:

- **Node.js** 20 or higher
- **pnpm** 9 or higher

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/jobyjoseph/headless-shopify.git
cd headless-shopify
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Configure Environment Variables

Copy the `.env.example` file to `.env` (create it if it doesn't exist):

```bash
cp .env.example .env
```

Then update the `.env` file with your credentials:

```env
# Shopify Configuration (Required)
NEXT_PUBLIC_SHOPIFY_STOREFRONT_GRAPHQL_ENDPOINT=your_endpoint_here
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_token_here

# Authentication (Required)
BETTER_AUTH_SECRET=your_generated_secret

# Google Social Login (Optional)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Shopify Multipass (Optional - Shopify Plus only)
SHOPIFY_MULTIPASS_SECRET=your_multipass_secret
```

#### Required Variables

- **Shopify API credentials**: Get these from your Shopify admin
- **BETTER_AUTH_SECRET**: Generate using `openssl rand -base64 32`

#### Optional Variables

- **Google OAuth credentials**: Only needed if you want Google social login
- **Shopify Multipass secret**: Only needed for social login (requires Shopify Plus)

See the [Configuration](./configuration) page for detailed instructions on obtaining each credential.

### 4. Run the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application running.

## Available Scripts

The following scripts are available in the project:

- `pnpm dev` – Start the development server
- `pnpm build` – Create a production build
- `pnpm start` – Start the production server
- `pnpm lint` – Run ESLint to check for code issues

## Next Steps

- Learn about [Configuration](./configuration) options
- Explore the [Project Structure](./project-structure)
- Understand [Deployment](./deployment) options
- Read about [Contributing](./contributing) to the project
