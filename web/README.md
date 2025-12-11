# Web3 Guestbook Frontend

This is the frontend application for the Web3 Guestbook dApp, built with Next.js, TypeScript, Wagmi, and RainbowKit.

## Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## WalletConnect Configuration

To enable wallet connections, you need to obtain a WalletConnect project ID:

1. Go to [WalletConnect Cloud](https://cloud.walletconnect.com/)
2. Sign up for an account
3. Create a new project
4. Copy the project ID
5. Create a `.env.local` file in the web directory with the following content:
   ```
   NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_actual_project_id_here
   ```

Without a valid project ID, wallet connections will not work properly.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!