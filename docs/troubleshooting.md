# Troubleshooting Guide

## Overview

This guide provides solutions to common issues you might encounter while developing, testing, or deploying the Web3 Guestbook dApp.

## Development Issues

### TypeScript Errors

#### "Cannot find module 'chai' or its corresponding type declarations"
**Problem**: TypeScript cannot find the chai module declarations.
**Solution**: 
```bash
cd contracts
pnpm add -D @types/chai
```

#### "Property 'ethers' does not exist on type 'HardhatRuntimeEnvironment'"
**Problem**: TypeScript doesn't recognize ethers as a property.
**Solution**: Use type assertion in your code:
```typescript
import hre from "hardhat";
const { ethers } = hre as any;
```

### Dependency Issues

#### Missing Peer Dependencies
**Problem**: Warning messages about unmet peer dependencies.
**Solution**: These are usually harmless, but if needed:
```bash
pnpm add -D chai@4.2.0 @types/chai@4.2.0
```

#### Module Not Found Errors
**Problem**: Errors like "Cannot resolve module '@metamask/sdk'".
**Solution**: Install the missing module:
```bash
cd web
pnpm add @metamask/sdk
```

### Compilation Errors

#### Solidity Compilation Failures
**Problem**: Contract fails to compile.
**Solution**:
1. Check Solidity version in `hardhat.config.ts`
2. Verify syntax in `.sol` files
3. Run: `npx hardhat compile --force`

### Testing Issues

#### Tests Not Running
**Problem**: Tests show "0 passing" or don't execute.
**Solution**:
1. Check file extensions (should be `.ts`)
2. Verify import statements
3. Run specific test: `npx hardhat test test/GuestBook.test.ts`

#### Test Timeout Errors
**Problem**: Tests fail with timeout messages.
**Solution**:
1. Increase timeout in test configuration
2. Check for infinite loops in contract code
3. Verify Hardhat node is running for local tests

## Wallet Connection Issues

### RainbowKit Not Loading
**Problem**: Wallet connection modal doesn't appear.
**Solution**:
1. Verify WalletConnect project ID in `wagmiConfig.ts`
2. Check network configuration
3. Ensure all providers are correctly wrapped in `_app.tsx`

### Metamask Connection Problems
**Problem**: Unable to connect Metamask wallet.
**Solution**:
1. Check if Metamask is installed and unlocked
2. Verify site permissions in Metamask
3. Try switching networks in Metamask

### Unsupported Chain Error
**Problem**: "Unsupported chain" error when connecting wallet.
**Solution**:
1. Ensure Sepolia testnet is added to wallet
2. Check chain configuration in `wagmiConfig.ts`
3. Verify contract is deployed to correct network

## Network and Deployment Issues

### Insufficient Funds Error
**Problem**: "Insufficient funds for gas * price + value".
**Solution**:
1. Check account balance: `npx hardhat balance --network sepolia`
2. Get test ETH from Sepolia faucet
3. Verify private key in `.env` file

### Network Connection Failures
**Problem**: Cannot connect to Ethereum network.
**Solution**:
1. Verify RPC URL in `.env` file
2. Check network connectivity
3. Try alternative RPC providers (Infura, Alchemy)

### Contract Deployment Failures
**Problem**: Deployment script fails.
**Solution**:
1. Check Hardhat configuration
2. Verify private key has sufficient funds
3. Ensure contract compiles without errors
4. Check network configuration in `hardhat.config.ts`

### Contract Verification Issues
**Problem**: Etherscan verification fails.
**Solution**:
1. Verify Etherscan API key
2. Check contract is compiled with same settings
3. Ensure contract address is correct
4. Try manual verification on Etherscan website

## Frontend Issues

### Blank Page or Loading Issues
**Problem**: Frontend shows blank page or hangs.
**Solution**:
1. Check browser console for errors
2. Verify contract address in `contract.ts`
3. Ensure development server is running
4. Check network requests in browser dev tools

### Styling Issues
**Problem**: Components not styled correctly.
**Solution**:
1. Verify Tailwind CSS is properly configured
2. Check if styles are imported in `_app.tsx`
3. Ensure Tailwind classes are correctly applied

### API Route Errors
**Problem**: API routes return 500 errors.
**Solution**:
1. Check server console for error messages
2. Verify API route file structure
3. Ensure required dependencies are installed

## Environment Issues

### Environment Variables Not Loading
**Problem**: Process.env variables are undefined.
**Solution**:
1. Verify `.env` file is in correct directory
2. Check variable names match exactly
3. Restart development server
4. Ensure variables are prefixed with NEXT_PUBLIC_ for frontend access

### Port Conflicts
**Problem**: "Port already in use" error.
**Solution**:
1. Kill process using the port: `lsof -i :3000` then `kill -9 PID`
2. Use different port: `PORT=3001 pnpm dev`
3. Let Next.js choose available port: `pnpm dev --port 0`

## Git and Version Control Issues

### Large Number of Files to Commit
**Problem**: Thousands of files showing as uncommitted.
**Solution**:
1. Verify `.gitignore` files are properly configured
2. Check if `node_modules` or build artifacts are tracked
3. Run: `git status` to see actual tracked files
4. Remove tracked files that should be ignored: `git rm --cached <file>`

### Merge Conflicts
**Problem**: Conflicts when merging branches.
**Solution**:
1. Use merge tool: `git mergetool`
2. Manually edit conflicted files
3. Mark as resolved: `git add <resolved-file>`
4. Complete merge: `git commit`

## Performance Issues

### Slow Development Server
**Problem**: Long build times or slow hot reloading.
**Solution**:
1. Check system resources (CPU, memory)
2. Clear Next.js cache: `rm -rf .next`
3. Increase Node.js memory: `NODE_OPTIONS=--max-old-space-size=4096 pnpm dev`

### High Gas Costs
**Problem**: Expensive contract interactions.
**Solution**:
1. Optimize Solidity code
2. Reduce storage operations
3. Use events instead of storing data when possible

## Browser-Specific Issues

### Compatibility Problems
**Problem**: App works in one browser but not another.
**Solution**:
1. Check browser console for errors
2. Verify browser supports required Web3 features
3. Test with latest versions of Chrome, Firefox, Safari

### Metamask Specific Issues
**Problem**: Issues only with Metamask wallet.
**Solution**:
1. Update Metamask to latest version
2. Reset Metamask account: Settings → Advanced → Reset Account
3. Check Metamask network configuration

## Security Issues

### Private Key Exposure
**Problem**: Accidentally committed private key.
**Solution**:
1. Immediately revoke compromised key
2. Generate new private key
3. Update `.env` file
4. Check git history and remove if necessary

### CORS Errors
**Problem**: Cross-origin resource sharing errors.
**Solution**:
1. Configure CORS headers on server
2. Check if requests are to correct domains
3. Verify wallet connection is established

## Debugging Techniques

### Using Console Logs
**Frontend**: Add `console.log()` statements in React components
**Smart Contracts**: Use `console.log()` in Solidity (Hardhat only)

### Hardhat Console
Access Hardhat runtime environment:
```bash
cd contracts
npx hardhat console
```

### Browser Developer Tools
1. Check Console tab for errors
2. Inspect Network tab for failed requests
3. Use React DevTools for component debugging

### Hardhat Tracing
Enable verbose logging:
```bash
npx hardhat --verbose test
```

## Common Solutions Summary

| Issue | Solution |
|-------|----------|
| Module not found | `pnpm add <module-name>` |
| TypeScript errors | Check imports and use type assertions |
| Wallet connection fails | Verify WalletConnect project ID |
| Insufficient funds | Get test ETH from faucet |
| Tests not running | Check file extensions and imports |
| Blank page | Check browser console for errors |
| Port conflicts | Kill process or use different port |
| Git tracking too many files | Verify `.gitignore` configuration |

## Getting Help

If you encounter issues not covered in this guide:

1. Check the official documentation for each technology:
   - [Hardhat Docs](https://hardhat.org/docs)
   - [Next.js Docs](https://nextjs.org/docs)
   - [Wagmi Docs](https://wagmi.sh/docs)
   - [RainbowKit Docs](https://www.rainbowkit.com/docs)

2. Search community forums:
   - [Ethereum Stack Exchange](https://ethereum.stackexchange.com/)
   - [GitHub Discussions](https://github.com/topics/web3)

3. File an issue on the project repository if you believe you've found a bug.