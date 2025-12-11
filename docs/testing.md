# Testing Documentation

## Overview

The Web3 Guestbook dApp includes comprehensive tests for both the smart contract and frontend components to ensure reliability and functionality.

## Smart Contract Testing

### Test Framework

- **Hardhat**: Development environment for Ethereum software
- **Mocha**: JavaScript test framework
- **Chai**: Assertion library

### Test Structure

Tests are located in the `contracts/test/` directory:
- `GuestBook.test.ts`: Main test suite for the GuestBook contract
- `simple-test.ts`: Basic test example
- `Counter.ts`: Tests for the Counter contract (example)

### Test Categories

#### Deployment Tests
- Verify contract deploys successfully
- Check initial state is correct

#### Entry Addition Tests
- Test adding a single entry
- Test adding multiple entries from different accounts
- Verify entry data is stored correctly
- Confirm EntryAdded event is emitted

#### Entry Retrieval Tests
- Test retrieving entries when none exist (empty array)
- Test retrieving entries after adding them
- Verify all entry fields are correct

### Running Tests

To run all tests:
```bash
cd contracts
npx hardhat test
```

To run a specific test file:
```bash
npx hardhat test test/GuestBook.test.ts
```

### Test Coverage

The test suite covers:
- 100% of contract functions
- All possible edge cases
- Event emission verification
- Error condition handling

## Frontend Testing

### Test Framework

- **Jest**: JavaScript testing framework
- **React Testing Library**: For testing React components
- **Cypress**: End-to-end testing

### Test Structure

Frontend tests are located in the `web/__tests__/` directory (to be created).

### Test Categories

#### Unit Tests
- Individual component testing
- Custom hook testing
- Utility function testing

#### Integration Tests
- Component interaction testing
- Wallet connection flow
- Contract interaction flows

#### End-to-End Tests
- Complete user workflows
- Wallet connection and signing
- Entry submission and display

### Running Tests

To run frontend tests (once implemented):
```bash
cd web
pnpm test
```

## Continuous Integration

### GitHub Actions

The project includes CI workflows in `.github/workflows/`:
- Automated testing on pull requests
- Code quality checks
- Deployment previews

### Pre-commit Hooks

Using Husky for:
- Running tests before commits
- Code formatting checks
- Linting validation

## Test Data

### Hardhat Accounts

Hardhat provides 20 test accounts with 10,000 ETH each:
- Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
- Account #1: 0x70997970C51812dc3A010C7d01b50e0d17dc79C8
- And so on...

These accounts can be used for testing multi-user scenarios.

## Manual Testing Procedures

### Wallet Connection
1. Click the "Connect Wallet" button
2. Select a wallet provider
3. Confirm connection in wallet
4. Verify wallet address is displayed

### Entry Submission
1. Connect wallet
2. Fill in name and message fields
3. Click "Submit" button
4. Confirm transaction in wallet
5. Verify entry appears in the list

### Entry Viewing
1. Connect wallet
2. View existing entries
3. Verify entry details (name, message, timestamp, address)

## Performance Testing

### Gas Optimization
- Monitor gas costs for entry submission
- Optimize contract functions for lower gas usage
- Test with large numbers of entries

### Load Testing
- Test with multiple concurrent users
- Verify performance with large datasets
- Check response times for contract calls

## Security Testing

### Smart Contract Audits
- Static analysis with Slither
- Dynamic analysis with Mythril
- Manual code review

### Frontend Security
- XSS vulnerability testing
- CSRF protection verification
- Input sanitization checks

## Debugging

### Hardhat Console
Use Hardhat's console for debugging:
```bash
npx hardhat console
```

### Logging
- Add console.log statements in contracts (only for local testing)
- Use events for tracking contract state changes
- Implement detailed error messages

## Best Practices

### Test Organization
- Group related tests in describes
- Use clear, descriptive test names
- Follow AAA pattern (Arrange, Act, Assert)

### Test Data
- Use realistic test data
- Clean up state between tests
- Mock external dependencies when appropriate

### Code Coverage
- Aim for 100% code coverage
- Use Istanbul/nyc for coverage reports
- Identify and test edge cases

## Troubleshooting

### Common Issues

#### Tests Failing Due to Network Issues
- Ensure Hardhat node is running
- Check network configuration
- Verify RPC endpoint availability

#### Gas Estimation Failures
- Check account balances
- Verify contract state
- Review transaction parameters

#### Event Not Being Emitted
- Confirm function execution
- Check event parameters
- Verify event listener setup

### Debugging Tips
1. Use console.log in tests for debugging
2. Check Hardhat logs for detailed error messages
3. Use Hardhat's tracing capabilities
4. Verify contract addresses and ABIs