# Documentation Index

This directory contains comprehensive documentation for the Web3 Guestbook dApp.

## Getting Started

- [Quick Start Guide](quick-start.md) - Fastest way to get the project up and running
- [User Guide](user-guide.md) - End-user instructions for interacting with the dApp

## Technical Documentation

- [Architecture](architecture.md) - System design, components, and data flow
- [Contracts](contracts.md) - Smart contract details, development, and deployment
- [Frontend](frontend.md) - Frontend structure, components, and development
- [Deployment](deployment.md) - Deployment procedures and best practices
- [Testing](testing.md) - Testing strategies, procedures, and best practices

## Project Information

- [Contributing](contributing.md) - Guidelines for contributing to the project
- [Troubleshooting](troubleshooting.md) - Common issues and solutions

## Project Overview

The Web3 Guestbook dApp is a complete decentralized application that demonstrates a full Web3 development workflow. Users can:

1. Connect their Ethereum wallet
2. Submit entries with their name and message
3. View all entries stored permanently on the blockchain

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

## Directory Structure

```
docs/
├── architecture.md      # System architecture and design
├── contracts.md         # Smart contract documentation
├── contributing.md      # Contribution guidelines
├── deployment.md        # Deployment procedures
├── frontend.md          # Frontend documentation
├── quick-start.md       # Quick start guide
├── testing.md           # Testing documentation
├── troubleshooting.md   # Troubleshooting guide
└── user-guide.md        # End-user guide
```

## Reading Order

For new developers:
1. [Quick Start Guide](quick-start.md) - Get up and running quickly
2. [Architecture](architecture.md) - Understand the system design
3. [Contracts](contracts.md) - Learn about smart contract functionality
4. [Frontend](frontend.md) - Understand the frontend implementation
5. [Testing](testing.md) - Learn how to test the application
6. [Deployment](deployment.md) - Learn how to deploy to production

For end users:
1. [User Guide](user-guide.md) - How to use the application

For contributors:
1. [Contributing](contributing.md) - How to contribute to the project
2. [Testing](testing.md) - How to write and run tests
3. [Troubleshooting](troubleshooting.md) - How to resolve common issues