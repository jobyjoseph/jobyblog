# Project Structure

Understanding the project structure will help you navigate and modify the codebase effectively.

## Overview

```
headless-shopify/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # Shared UI components
│   ├── integrations/     # Third-party integrations
│   │   └── shopify/      # Shopify Storefront API
│   ├── lib/              # Core library code
│   │   ├── auth.ts       # Better-Auth configuration
│   │   ├── auth-client.ts # Better-Auth client setup
│   │   ├── shopify-auth-plugin.ts # Custom Shopify auth plugin
│   │   └── shopify/      # Shopify utilities
│   │       ├── multipass.ts # Multipass token generation
│   │       └── getCurrentUser.ts # User data fetching
│   ├── providers/        # App-wide providers
│   └── utils/            # Utility functions
├── public/               # Static assets
├── @types/               # TypeScript type definitions
└── ...config files
```

## Key Directories

### `src/app`

Contains all routes, pages, and layouts using Next.js 16 App Router.

**Structure:**

- Route-based file system
- Server and client components
- API routes
- Layout components

**Example pages:**

- Home page
- Product Listing Page (PLP)
- Product Detail Page (PDP)
- Search
- Cart
- Account pages (profile, orders, addresses)
- Authentication pages (login, register, forgot password, reset password)

**API Routes:**

- `/api/auth/*`: Better-Auth authentication endpoints
- `/api/shopify/multipass`: Multipass token exchange for social login
- `/api/shopify/customer`: Customer data endpoints
- `/api/shopify/cart-buyer-identity`: Cart buyer identity updates

### `src/components`

Reusable UI components shared across the application.

**Examples:**

- Header/Navigation
- Footer
- Product cards
- Cart components
- Form elements
- Buttons and other UI primitives

### `src/integrations/shopify`

All Shopify Storefront API related code.

**Contains:**

- GraphQL queries (in `.graphql` files)
- GraphQL mutations
- Type definitions for Shopify data
- API client configuration
- Helper functions for Shopify operations

**Key features:**

- Type-safe GraphQL operations
- Cart management
- Product fetching
- Customer authentication
- Multipass integration for social login

### `src/lib`

Core library code for authentication and Shopify utilities.

**Authentication files:**

- **`auth.ts`**: Better-Auth server configuration with plugins and social providers
- **`auth-client.ts`**: Better-Auth client setup for use in React components
- **`shopify-auth-plugin.ts`**: Custom Better-Auth plugin that integrates with Shopify Customer API
- **`shopify-auth-client.ts`**: Client-side plugin for Shopify authentication methods

**Shopify utilities:**

- **`shopify/multipass.ts`**: Generates Multipass tokens for social login
- **`shopify/getCurrentUser.ts`**: Fetches current authenticated user data

### `src/providers`

Application-wide context providers and state management.

**Examples:**

- **Session provider**: Manages user authentication state
- **Cart provider**: Global cart state and operations
- **Theme provider**: Dark/light mode management
- Any other global state management

**Session Provider features:**

- Monitors user authentication status
- Provides user data across the app
- Handles session refresh
- Error handling for authentication failures

### `src/utils`

Utility functions and helpers used throughout the application.

**Common utilities:**

- Formatting functions (currency, dates)
- Validation helpers
- Type guards
- Common algorithms

## Configuration Files

### `next.config.ts`

Next.js configuration including:

- GraphQL file loader setup
- Build optimizations
- Environment variable handling
- Webpack configuration

### `codegen.ts`

GraphQL Code Generator configuration for generating TypeScript types from GraphQL schemas and operations.

### `tsconfig.json`

TypeScript configuration with strict type checking and path aliases.

### `tailwind.config.js`

Tailwind CSS configuration for styling:

- Custom theme
- Color palette
- Spacing scale
- Responsive breakpoints

### `eslint.config.mjs`

ESLint configuration for code quality and consistency.

### `postcss.config.mjs`

PostCSS configuration for CSS processing.

## GraphQL Files

GraphQL queries and mutations are stored in `.graphql` files within the Shopify integration directory.

**Benefits:**

- Better IDE support
- Type generation
- Easier to maintain
- Separation of concerns

## Type Definitions

The `@types` directory contains custom TypeScript type definitions for:

- Shopify entities
- API responses
- Component props
- Utility types

## Best Practices

1. **Component Organization**: Keep components small and focused
2. **Type Safety**: Use TypeScript strictly throughout
3. **GraphQL Operations**: Store in `.graphql` files
4. **Naming Conventions**: Follow the existing patterns
5. **File Structure**: Keep related files together

## Next Steps

- Learn about [Deployment](./deployment)
- Read [Contributing Guidelines](./contributing)
- Explore the [GitHub Repository](https://github.com/jobyjoseph/headless-shopify)
