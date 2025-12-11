# Quick Start Guide

## Overview

Get up and running with the Web3 Guestbook dApp quickly with this guide. This document provides the fastest path to deploying and using the application.

## Prerequisites

Install these tools first:

1. **Node.js** (v18 or higher)
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version`

2. **pnpm** (package manager)
   - Install with: `npm install -g pnpm`
   - Verify installation: `pnpm --version`

3. **Git**
   - Download from [git-scm.com](https://git-scm.com/)
   - Verify installation: `git --version`

## Quick Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/guestbook-web3.git
cd guestbook-web3
```

### 2. Install Dependencies

```bash
# Install smart contract dependencies
cd contracts
pnpm install

# Install frontend dependencies
cd ../web
pnpm install
```

### 3. Start Local Blockchain

In a new terminal window:

```bash
cd contracts
npx hardhat node
```

This starts a local Ethereum network with pre-funded accounts.

### 4. Deploy Contract

In another terminal window:

```bash
cd contracts
npx hardhat run scripts/deploy.ts --network localhost
```

Note the contract address that's printed.

### 5. Configure Frontend

Update `web/lib/contract.ts` with the deployed contract address:

```typescript
export const GUESTBOOK_ADDRESS = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
```

### 6. Start Frontend

```bash
cd web
pnpm dev
```

Visit `http://localhost:3000` in your browser.

## Quick Usage

### Connect Wallet

1. Click "Connect Wallet" button
2. Select "MetaMask" (or your preferred wallet)
3. Accept connection in your wallet

### Sign Guestbook

1. Enter your name and message
2. Click "Submit"
3. Confirm transaction in your wallet
4. Wait for confirmation (~15 seconds)
5. See your entry appear in the list

## Alternative: Testnet Deployment

Want to try on a real testnet? Here's how:

### 1. Get Test ETH

1. Get Sepolia ETH from [sepoliafaucet.com](https://sepoliafaucet.com)
2. You'll need to provide your wallet address

### 2. Configure Environment

Create `contracts/.env`:

```env
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID
SEPOLIA_PRIVATE_KEY=YOUR_WALLET_PRIVATE_KEY
```

### 3. Deploy to Sepolia

```bash
cd contracts
npx hardhat run scripts/deploy.ts --network sepolia
```

### 4. Update Frontend

Update `web/lib/contract.ts` with the new contract address.

## Quick Development Workflow

### Smart Contract Development

1. Modify `contracts/contracts/GuestBook.sol`
2. Compile: `npx hardhat compile`
3. Test: `npx hardhat test`
4. Redeploy: `npx hardhat run scripts/deploy.ts --network localhost`

### Frontend Development

1. Modify files in `web/pages/` or `web/lib/`
2. Changes automatically reload in browser
3. No need to restart development server

### Testing

Run smart contract tests:
```bash
cd contracts
npx hardhat test
```

## Common Commands

### Contracts Directory

```bash
# Start local blockchain
npx hardhat node

# Compile contracts
npx hardhat compile

# Run tests
npx hardhat test

# Deploy locally
npx hardhat run scripts/deploy.ts --network localhost

# Deploy to Sepolia
npx hardhat run scripts/deploy.ts --network sepolia
```

### Web Directory

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Run linter
pnpm lint

# Run formatter
pnpm format
```

## Troubleshooting

### "Module not found" errors

Install missing modules:
```bash
cd web
pnpm add @metamask/sdk @walletconnect/ethereum-provider
```

### Wallet connection issues

1. Ensure wallet extension is installed and unlocked
2. Check that you're on the correct network
3. Refresh the page

### Transaction failures

1. Check you have sufficient ETH for gas fees
2. Verify you're on the correct network
3. Check browser console for error messages

## Next Steps

After getting the basic setup working:

1. **Explore the code**: Check the [Architecture Documentation](architecture.md)
2. **Run tests**: See [Testing Documentation](testing.md)
3. **Customize**: Modify the contract or frontend to add features
4. **Deploy**: Learn about production deployment in [Deployment Documentation](deployment.md)

## Useful Resources

- [Hardhat Documentation](https://hardhat.org/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Wagmi Documentation](https://wagmi.sh/docs)
- [RainbowKit Documentation](https://www.rainbowkit.com/docs)
- [Solidity Documentation](https://docs.soliditylang.org/)

## Getting Help

If you get stuck:

1. Check the detailed documentation in the `docs/` folder
2. Look at the console output for error messages
3. Search for similar issues in the project's GitHub issues
4. Ask for help in community forums

Happy coding!