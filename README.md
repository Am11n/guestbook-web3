# Web3 On-Chain Guestbook dApp

A complete Web3 application that allows users to connect their wallet, send messages to a smart contract, and read/display all messages from the contract.

## Project Structure

```
root/
  contracts/
    hardhat.config.ts
    package.json
    contracts/
      GuestBook.sol
    scripts/
      deploy.ts
    test/
      GuestBook.test.ts
  web/
    package.json
    next.config.mjs
    tsconfig.json
    app/
      layout.tsx
      page.tsx
      globals.css
    lib/
      wagmiConfig.ts
      contract.ts
```

## Features

- Connect wallet via RainbowKit + wagmi
- Form for submitting name and message
- Stores entries on-chain in a smart contract
- Reads and displays all entries from the contract
- Real-time updates when new entries are added

## Technologies Used

- Solidity 0.8.24
- Hardhat (with TypeScript)
- Next.js (pages router)
- TypeScript
- wagmi v2
- viem
- RainbowKit
- Tailwind CSS

## Setup Instructions

### Smart Contract (contracts/)

1. Install dependencies:
   ```
   cd contracts
   pnpm install
   ```

2. Compile the contract:
   ```
   npx hardhat compile
   ```

3. Run tests:
   ```
   npx hardhat test
   ```

4. Deploy locally:
   ```
   npx hardhat node
   npx hardhat run scripts/deploy.ts --network localhost
   ```

5. Deploy to Sepolia (requires Infura project and private key):
   ```
   npx hardhat run scripts/deploy.ts --network sepolia
   ```

### Frontend (web/)

1. Install dependencies:
   ```
   cd web
   pnpm install
   ```

2. Start the development server:
   ```
   pnpm dev
   ```

3. Open your browser to http://localhost:3000

## Smart Contract Details

The GuestBook contract stores entries with the following information:
- Sender's address (automatically captured)
- Name (provided by user)
- Message (provided by user)
- Timestamp (automatically captured)

## Configuration

Before deploying to Sepolia, you'll need to:
1. Get an Infura project ID
2. Get a WalletConnect project ID from https://cloud.walletconnect.com/
3. Update the `.env` file in the contracts directory with your Sepolia RPC URL and private key
4. Update the `projectId` in `web/lib/wagmiConfig.ts` with your WalletConnect project ID
5. Update the contract address in `web/lib/contract.ts` with the deployed contract address

## License

MIT