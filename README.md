# Web3 On-Chain Guestbook dApp

A complete Web3 application that allows users to connect their wallet, send messages to a smart contract, and read/display all messages from the contract.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Installation](#installation)
  - [Smart Contract Setup](#smart-contract-setup)
  - [Frontend Setup](#frontend-setup)
- [Development](#development)
  - [Running Tests](#running-tests)
  - [Deploying Contracts](#deploying-contracts)
  - [Running the Frontend](#running-the-frontend)
- [Documentation](#documentation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project demonstrates a complete Web3 workflow by implementing an on-chain guestbook where users can:
- Connect their Ethereum wallet
- Submit entries with their name and message
- View all entries stored on the blockchain

## Features

- Wallet connection via RainbowKit
- Form for submitting name and message entries
- On-chain storage of entries in a smart contract
- Real-time display of all guestbook entries
- Responsive UI with Tailwind CSS

## Technology Stack

### Smart Contracts
- Solidity ^0.8.24
- Hardhat (development environment)
- Ethers.js (library for interacting with Ethereum)
- Chai (testing framework)

### Frontend
- Next.js 14 (React framework)
- TypeScript
- Wagmi v2 (React hooks for Ethereum)
- Viem (TypeScript interface for Ethereum)
- RainbowKit (wallet connection UI)
- Tailwind CSS (styling)

## Project Structure

```
guestbook-web3/
├── contracts/              # Smart contract project
│   ├── contracts/          # Solidity contracts
│   ├── scripts/            # Deployment scripts
│   ├── test/               # Contract tests
│   ├── hardhat.config.ts   # Hardhat configuration
│   └── package.json        # Contract dependencies
├── web/                    # Frontend application
│   ├── lib/                # Application libraries
│   ├── pages/              # Page components
│   ├── public/             # Static assets
│   ├── styles/             # CSS styles
│   ├── next.config.mjs     # Next.js configuration
│   └── package.json        # Frontend dependencies
└── docs/                   # Documentation files
```

## Prerequisites

- Node.js (v18 or higher)
- pnpm (package manager)
- Git

## Quick Start

For detailed instructions, see [Quick Start Guide](docs/quick-start.md). Here's the abbreviated version:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/guestbook-web3.git
   cd guestbook-web3
   ```

2. Install dependencies:
   ```bash
   cd contracts && pnpm install
   cd ../web && pnpm install
   ```

3. Start local blockchain:
   ```bash
   cd contracts
   npx hardhat node
   ```

4. Deploy contract (in another terminal):
   ```bash
   cd contracts
   npx hardhat run scripts/deploy.ts --network localhost
   ```

5. Update contract address in `web/lib/contract.ts`

6. Start frontend:
   ```bash
   cd web
   pnpm dev
   ```

7. Visit `http://localhost:3000`

## Installation

### Smart Contract Setup

1. Navigate to the contracts directory:
   ```bash
   cd contracts
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

### Frontend Setup

1. Navigate to the web directory:
   ```bash
   cd web
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

## Development

### Running Tests

To run the smart contract tests:

```bash
cd contracts
npx hardhat test
```

### Deploying Contracts

#### Local Deployment

1. Start a local Hardhat node:
   ```bash
   cd contracts
   npx hardhat node
   ```

2. In a separate terminal, deploy the contract:
   ```bash
   npx hardhat run scripts/deploy.ts --network localhost
   ```

#### Testnet Deployment (Sepolia)

1. Configure your environment variables in `contracts/.env`:
   ```
   SEPOLIA_RPC_URL=your_sepolia_rpc_url
   SEPOLIA_PRIVATE_KEY=your_private_key
   ```

2. Deploy to Sepolia:
   ```bash
   npx hardhat run scripts/deploy.ts --network sepolia
   ```

### Running the Frontend

1. Start the development server:
   ```bash
   cd web
   pnpm dev
   ```

2. Open your browser to `http://localhost:3000`

## Documentation

Comprehensive documentation is available in the `docs/` directory:

- [Architecture](docs/architecture.md) - System design and components
- [Contracts](docs/contracts.md) - Smart contract details and development
- [Frontend](docs/frontend.md) - Frontend structure and components
- [Deployment](docs/deployment.md) - Deployment procedures and best practices
- [Testing](docs/testing.md) - Testing strategies and procedures
- [Troubleshooting](docs/troubleshooting.md) - Common issues and solutions
- [Contributing](docs/contributing.md) - Guidelines for contributing
- [User Guide](docs/user-guide.md) - End-user instructions
- [Quick Start](docs/quick-start.md) - Fastest way to get up and running

## Deployment

### Smart Contract Deployment

See [Deploying Contracts](#deploying-contracts) section above.

### Frontend Deployment

The frontend can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.

For Vercel:
1. Push your code to GitHub
2. Import the project to Vercel
3. Set the root directory to `web`
4. Deploy

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.