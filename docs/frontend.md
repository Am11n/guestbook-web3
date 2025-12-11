# Frontend Documentation

## Overview

The frontend of the Web3 Guestbook dApp is built with Next.js, TypeScript, and various Web3 libraries to provide a seamless user experience for interacting with the smart contract.

## Technology Stack

- **Next.js**: React framework for production-ready applications
- **TypeScript**: Typed superset of JavaScript
- **Wagmi**: React hooks for Ethereum
- **Viem**: TypeScript interface for Ethereum
- **RainbowKit**: Wallet connection UI
- **Tailwind CSS**: Utility-first CSS framework

## Project Structure

```
web/
├── lib/                    # Custom libraries and utilities
│   ├── contract.ts         # Contract configuration
│   ├── guestbook.ts        # Custom hooks for guestbook interactions
│   └── wagmiConfig.ts      # Wagmi configuration
├── pages/                  # Page components
│   ├── _app.tsx            # App component with providers
│   ├── _document.tsx        # Document component
│   ├── index.tsx           # Home page
│   └── api/                # API routes
├── public/                 # Static assets
├── styles/                 # CSS styles
├── next.config.mjs         # Next.js configuration
└── package.json            # Dependencies
```

## Key Components

### lib/contract.ts

Contains the contract address and ABI (Application Binary Interface) needed to interact with the deployed smart contract.

### lib/guestbook.ts

Custom hooks for interacting with the guestbook contract:
- `useGuestbookEntries`: Fetches all entries from the contract
- `useAddGuestbookEntry`: Handles adding new entries to the contract
- `useWatchGuestbookEntries`: Watches for new entries in real-time

### lib/wagmiConfig.ts

Configuration for Wagmi and RainbowKit, including:
- Supported chains (Sepolia testnet)
- WalletConnect project ID
- Transport configuration

### pages/_app.tsx

The main application component that wraps the entire app with:
- WagmiProvider
- RainbowKitProvider
- QueryClientProvider

### pages/index.tsx

The main page that includes:
- Wallet connection button
- Form for submitting new entries
- Display of all guestbook entries

## Development

### Prerequisites

- Node.js >= 18.0.0
- pnpm

### Setup

1. Navigate to the web directory:
   ```bash
   cd web
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

### Running the Development Server

Start the development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

Create a production build:
```bash
pnpm build
```

Start the production server:
```bash
pnpm start
```

## Custom Hooks

### useGuestbookEntries

Fetches all entries from the guestbook contract.

**Usage:**
```typescript
const { entries, isLoading, isError } = useGuestbookEntries();
```

**Returns:**
- `entries`: Array of guestbook entries
- `isLoading`: Boolean indicating if data is loading
- `isError`: Boolean indicating if an error occurred

### useAddGuestbookEntry

Handles adding new entries to the guestbook contract.

**Usage:**
```typescript
const { addEntry, isPending, isSuccess, isError } = useAddGuestbookEntry();
```

**Functions:**
- `addEntry(name, message)`: Submits a new entry

**Returns:**
- `isPending`: Boolean indicating if transaction is pending
- `isSuccess`: Boolean indicating if transaction succeeded
- `isError`: Boolean indicating if an error occurred

### useWatchGuestbookEntries

Watches for new entries in real-time.

**Usage:**
```typescript
useWatchGuestbookEntries((entry) => {
  // Handle new entry
});
```

## Styling

The application uses Tailwind CSS for styling. All styles are utility classes applied directly to HTML elements.

## Wallet Integration

Wallet integration is handled by RainbowKit, which provides:
- Multiple wallet options
- Responsive UI components
- Session persistence
- Chain switching capabilities

## Error Handling

The frontend includes error handling for:
- Wallet connection issues
- Transaction failures
- Network errors
- Contract interaction errors

## Responsive Design

The application is fully responsive and works on:
- Desktop browsers
- Tablet devices
- Mobile devices

## Future Improvements

- Add pagination for large numbers of entries
- Implement entry filtering and sorting
- Add user profile features
- Include social sharing functionality
- Add dark mode toggle
- Implement internationalization