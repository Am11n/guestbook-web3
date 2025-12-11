# Smart Contracts Documentation

## Overview

The smart contract for the Web3 Guestbook dApp is built using Solidity and Hardhat. It provides a simple on-chain storage mechanism for guestbook entries.

## Contract Structure

### GuestBook.sol

The main contract that handles guestbook entries.

#### State Variables

- `entries`: An array of `Entry` structs that stores all guestbook entries

#### Structs

```solidity
struct Entry {
    address sender;     // Address of the person who submitted the entry
    string name;        // Name provided by the user
    string message;     // Message provided by the user
    uint256 timestamp;  // Timestamp when the entry was submitted
}
```

#### Events

- `EntryAdded(address indexed sender, string name, string message, uint256 timestamp)`: Emitted when a new entry is added

#### Functions

##### addEntry

```solidity
function addEntry(string calldata name, string calldata message) external
```

Adds a new entry to the guestbook.

**Parameters:**
- `name`: The name of the person submitting the entry
- `message`: The message content

**Modifiers:**
- `external`: Can only be called from outside the contract

##### getEntries

```solidity
function getEntries() external view returns (Entry[] memory)
```

Returns all guestbook entries.

**Returns:**
- An array of all `Entry` structs

**Modifiers:**
- `external`: Can only be called from outside the contract
- `view`: Does not modify state

## Development

### Prerequisites

- Node.js >= 18.0.0
- pnpm
- Hardhat

### Setup

1. Navigate to the contracts directory:
   ```bash
   cd contracts
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

### Compilation

Compile the contracts:
```bash
npx hardhat compile
```

### Testing

Run the test suite:
```bash
npx hardhat test
```

### Deployment

#### Local Deployment

1. Start a local Hardhat node:
   ```bash
   npx hardhat node
   ```

2. In a separate terminal, deploy the contract:
   ```bash
   npx hardhat run scripts/deploy.ts --network localhost
   ```

#### Testnet Deployment

1. Configure environment variables in `.env`:
   ```
   SEPOLIA_RPC_URL=your_sepolia_rpc_url
   SEPOLIA_PRIVATE_KEY=your_private_key
   ```

2. Deploy to Sepolia:
   ```bash
   npx hardhat run scripts/deploy.ts --network sepolia
   ```

## Security Considerations

- The contract does not implement any access controls, meaning anyone can submit entries
- There are no rate limiting mechanisms to prevent spam
- Gas costs for adding entries increase as the array grows larger
- Consider implementing pagination for large datasets

## Future Improvements

- Add moderation features
- Implement rate limiting
- Add entry deletion functionality
- Include entry editing capabilities
- Add spam protection mechanisms