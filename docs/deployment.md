# Deployment Documentation

## Overview

This document outlines the deployment procedures for both the smart contract and frontend components of the Web3 Guestbook dApp.

## Smart Contract Deployment

### Prerequisites

1. Ethereum wallet with test ETH (for testnet) or real ETH (for mainnet)
2. Infura/Alchemy account for RPC endpoints
3. WalletConnect project ID (for frontend)

### Environment Configuration

Create a `.env` file in the `contracts/` directory:

```env
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_PROJECT_ID
SEPOLIA_PRIVATE_KEY=YOUR_PRIVATE_KEY
```

### Testnet Deployment (Sepolia)

1. Ensure you have Sepolia ETH in your wallet
2. Configure your `.env` file with Sepolia RPC URL and private key
3. Deploy the contract:
   ```bash
   cd contracts
   npx hardhat run scripts/deploy.ts --network sepolia
   ```
4. Note the deployed contract address for frontend configuration

### Local Deployment

For development and testing:

1. Start a local Hardhat node:
   ```bash
   cd contracts
   npx hardhat node
   ```
2. In a separate terminal, deploy the contract:
   ```bash
   npx hardhat run scripts/deploy.ts --network localhost
   ```

### Mainnet Deployment

For production deployment:

1. Ensure you have sufficient ETH in your wallet
2. Update `hardhat.config.ts` with mainnet configuration:
   ```env
   MAINNET_RPC_URL=https://mainnet.infura.io/v3/YOUR_PROJECT_ID
   MAINNET_PRIVATE_KEY=YOUR_PRIVATE_KEY
   ```
3. Deploy the contract:
   ```bash
   npx hardhat run scripts/deploy.ts --network mainnet
   ```

### Verification

After deployment, verify the contract on Etherscan:

1. Get an Etherscan API key
2. Add to your `.env`:
   ```env
   ETHERSCAN_API_KEY=YOUR_ETHERSCAN_API_KEY
   ```
3. Verify the contract:
   ```bash
   npx hardhat verify --network sepolia DEPLOYED_CONTRACT_ADDRESS
   ```

## Frontend Deployment

### Environment Configuration

Update the contract address in `web/lib/contract.ts`:
```typescript
export const GUESTBOOK_ADDRESS = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
```

Get a WalletConnect project ID from [WalletConnect Cloud](https://cloud.walletconnect.com/) and update `web/lib/wagmiConfig.ts`:
```typescript
export const config = getDefaultConfig({
  appName: 'Web3 Guestbook',
  projectId: 'YOUR_WALLETCONNECT_PROJECT_ID',
  // ...
});
```

### Vercel Deployment

1. Push your code to GitHub
2. Sign up/in to [Vercel](https://vercel.com/)
3. Import your GitHub repository
4. Set the root directory to `web`
5. Deploy

### Netlify Deployment

1. Push your code to GitHub
2. Sign up/in to [Netlify](https://netlify.com/)
3. Import your GitHub repository
4. Set the publish directory to `web/out`
5. Set the build command to `cd web && pnpm build && pnpm export`
6. Deploy

### Manual Deployment

1. Build the frontend:
   ```bash
   cd web
   pnpm build
   ```
2. The built files will be in the `web/.next` directory
3. Serve the files using any static hosting service

### Docker Deployment

Create a `Dockerfile` in the `web/` directory:
```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
USER nextjs
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run the Docker container:
```bash
cd web
docker build -t guestbook-web3 .
docker run -p 3000:3000 guestbook-web3
```

## CI/CD Pipeline

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: cd contracts && npm install
      - run: cd contracts && npx hardhat compile
      - run: cd contracts && npx hardhat test
  deploy-contracts:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: cd contracts && npm install
      - run: cd contracts && npx hardhat run scripts/deploy.ts --network sepolia
        env:
          SEPOLIA_RPC_URL: ${{ secrets.SEPOLIA_RPC_URL }}
          SEPOLIA_PRIVATE_KEY: ${{ secrets.SEPOLIA_PRIVATE_KEY }}
  deploy-frontend:
    needs: deploy-contracts
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: cd web && npm install
      - run: cd web && npm run build
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          github-token: ${{ secrets.GITHUB_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

### Environment Secrets

Configure the following secrets in your GitHub repository settings:

- `SEPOLIA_RPC_URL`: Sepolia RPC URL
- `SEPOLIA_PRIVATE_KEY`: Private key for deployment
- `VERCEL_TOKEN`: Vercel authentication token
- `VERCEL_ORG_ID`: Vercel organization ID
- `VERCEL_PROJECT_ID`: Vercel project ID

## Monitoring and Maintenance

### Contract Monitoring

- Set up alerts for contract events
- Monitor gas usage and optimize as needed
- Track contract interactions and usage patterns

### Frontend Monitoring

- Implement analytics (Google Analytics, Plausible, etc.)
- Monitor performance metrics
- Track user interactions and flows

### Updates and Upgrades

#### Smart Contract Upgrades

For upgradeable contracts, use:
- OpenZeppelin Upgrades Plugins
- Proxy pattern implementation
- Migration scripts for data

#### Frontend Updates

- Version control with semantic versioning
- Automated deployment pipelines
- Feature flagging for gradual rollouts

## Backup and Recovery

### Contract Data

- Regularly export contract data
- Maintain multiple copies of deployment information
- Document contract addresses and ABIs

### Frontend Assets

- Store assets in version control
- Use CDNs for static asset delivery
- Implement backup strategies for user data

## Cost Management

### Gas Optimization

- Monitor gas costs for contract functions
- Optimize frequently called functions
- Consider batch operations for multiple entries

### Hosting Costs

- Monitor bandwidth and storage usage
- Optimize frontend bundle size
- Use caching strategies to reduce server load

## Security Considerations

### Deployment Security

- Never commit private keys to version control
- Use environment variables for sensitive data
- Rotate keys regularly

### Access Control

- Restrict deployment permissions
- Use separate accounts for deployment and daily use
- Implement multi-signature wallets for critical deployments

## Troubleshooting

### Common Deployment Issues

#### Insufficient Funds
- Ensure deployment account has sufficient ETH
- Check gas price estimates before deployment

#### Network Issues
- Verify RPC endpoint availability
- Check network configuration in `hardhat.config.ts`

#### Verification Failures
- Ensure contract is compiled with the same settings
- Check Etherscan API key validity

### Rollback Procedures

#### Smart Contract Rollback
- Deploy new contract version
- Migrate data if necessary
- Update frontend to use new contract address

#### Frontend Rollback
- Revert to previous commit
- Redeploy previous version
- Monitor for issues after rollback

## Best Practices

### Version Control
- Tag releases with semantic versioning
- Document breaking changes
- Maintain a changelog

### Documentation
- Keep deployment documentation up to date
- Document environment variables and configuration
- Provide clear instructions for new developers

### Testing
- Test deployment procedures in staging environment
- Verify all integrations work after deployment
- Perform smoke tests on deployed application