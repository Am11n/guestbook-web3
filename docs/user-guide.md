# User Guide

## Welcome to the Web3 Guestbook dApp

This guide will help you understand and use the Web3 Guestbook decentralized application. The guestbook allows you to leave messages on the Ethereum blockchain that are permanently stored and publicly accessible.

## Table of Contents

- [Getting Started](#getting-started)
- [Connecting Your Wallet](#connecting-your-wallet)
- [Signing the Guestbook](#signing-the-guestbook)
- [Viewing Entries](#viewing-entries)
- [Understanding Blockchain Storage](#understanding-blockchain-storage)
- [FAQ](#faq)

## Getting Started

### What You'll Need

1. **A cryptocurrency wallet**: We recommend Metamask, but any WalletConnect-compatible wallet will work
2. **Some test ETH**: If you're using a testnet, you'll need test ETH (free)
3. **A modern web browser**: Chrome, Firefox, Safari, or Edge

### Accessing the Application

1. Visit the deployed application URL (provided by the project maintainer)
2. Or run it locally by following the development setup instructions

## Connecting Your Wallet

### Step 1: Install a Wallet

If you don't already have a wallet:
1. Install Metamask browser extension ([metamask.io](https://metamask.io))
2. Complete the setup process
3. Create or import a wallet

### Step 2: Get Test ETH (Testnet Only)

If you're using a testnet version:
1. Switch Metamask to the Sepolia testnet
2. Visit a faucet like [sepoliafaucet.com](https://sepoliafaucet.com)
3. Paste your wallet address to receive test ETH

### Step 3: Connect to the dApp

1. Navigate to the guestbook application
2. Click the "Connect Wallet" button in the top right corner
3. Select your wallet provider from the options
4. Approve the connection in your wallet
5. Your wallet address will now be displayed

## Signing the Guestbook

### Step 1: Fill Out the Form

1. Enter your name in the "Name" field
2. Enter your message in the "Message" field
3. Review your entry for accuracy

### Step 2: Submit Your Entry

1. Click the "Submit" button
2. Review the transaction details in your wallet
3. Confirm the transaction (you may need to pay a small gas fee)
4. Wait for the transaction to complete (usually 15-30 seconds)

### Step 3: Confirmation

1. After the transaction completes, your entry will appear in the guestbook
2. You'll see a success message confirming your entry was added
3. Your entry is now permanently stored on the blockchain

## Viewing Entries

### Current Entries

All guestbook entries are displayed below the submission form:
- Entries are sorted with newest at the top
- Each entry shows the name, message, timestamp, and wallet address
- Wallet addresses are shortened for readability (e.g., 0x1234...5678)

### Entry Details

Each entry displays:
- **Name**: The name provided by the user
- **Message**: The user's message
- **Timestamp**: When the entry was submitted (in your local timezone)
- **Address**: The Ethereum address of the submitter

## Understanding Blockchain Storage

### Permanence

Entries in the guestbook are stored on the Ethereum blockchain, which means:
- They cannot be deleted or modified
- They will persist as long as Ethereum exists
- They are publicly accessible to anyone

### Cost

Submitting an entry requires a small gas fee:
- This fee pays for the computational work to store your entry
- Fees vary based on network congestion
- Testnets don't use real money, so fees are effectively zero

### Transparency

All entries are public:
- Anyone can view all entries
- Your wallet address is visible with each entry
- Consider this before submitting personal information

## FAQ

### Do I need cryptocurrency to use this?

For the testnet version: You need test ETH, which is free.
For the mainnet version: You need real ETH to pay gas fees.

### Is there a limit to how many entries I can submit?

There's no technical limit, but each entry costs gas fees.
Be respectful and avoid spamming the guestbook.

### Can entries be deleted?

No, entries are permanently stored on the blockchain and cannot be deleted.

### Is my personal information safe?

Everything you submit becomes permanently public on the blockchain.
Don't include sensitive personal information in your entries.

### Why does it take time to submit an entry?

Transactions must be processed by the Ethereum network.
During busy periods, this may take longer than usual.

### What happens if I close the browser during submission?

The transaction will still complete on the blockchain.
Refresh the page to see your entry once it's confirmed.

### Can I edit my entry after submitting?

No, entries cannot be modified once submitted to the blockchain.

### What if I make a mistake in my entry?

Submit a new entry with the correct information.
The old entry will remain, but you can clarify it in your new entry.

### Why do I need to pay gas fees?

Gas fees compensate the network for processing and storing your entry.
They also prevent spam and ensure network security.

### Can I use any wallet?

Any WalletConnect-compatible wallet should work.
Popular options include Metamask, Coinbase Wallet, and Trust Wallet.

### What is a testnet?

A testnet is a testing environment that mimics the real Ethereum network but uses fake ETH.
It's perfect for testing applications without spending real money.

### How do I switch to a testnet?

In Metamask:
1. Click the network dropdown
2. Select "Sepolia" testnet
3. If Sepolia isn't listed, you may need to add it manually

### What if my transaction fails?

Common reasons for failure:
- Insufficient funds for gas fees
- Network congestion
- Invalid input data

If a transaction fails, you won't be charged, and you can try again.

## Best Practices

### Before Submitting

1. Double-check your name and message for accuracy
2. Remember that entries are permanent and public
3. Ensure you have sufficient funds for gas fees

### Privacy Considerations

1. Avoid sharing sensitive personal information
2. Use a nickname if you prefer more privacy
3. Understand that your wallet address will be public

### Being Respectful

1. Be kind and respectful in your messages
2. Avoid spamming or submitting multiple similar entries
3. Keep messages appropriate for a public forum

## Troubleshooting

### Wallet Won't Connect

1. Ensure your wallet extension is installed and unlocked
2. Check that you're on the correct network
3. Try refreshing the page
4. Check browser console for error messages

### Transaction Stuck

1. Check your wallet for pending transactions
2. Network congestion may cause delays
3. You can cancel and resubmit with higher gas fees

### Entry Not Appearing

1. Wait a few minutes for blockchain confirmation
2. Refresh the page
3. Check if the transaction was successful in your wallet

### Application Not Loading

1. Check your internet connection
2. Try refreshing the page
3. Clear your browser cache
4. Try a different browser

## Support

If you encounter issues not covered in this guide:

1. Check the [Troubleshooting Guide](troubleshooting.md) for technical issues
2. Open an issue on the GitHub repository
3. Contact the project maintainer if contact information is provided

## Feedback

We'd love to hear your feedback on the Web3 Guestbook dApp!

You can:
1. Submit feedback through the application (if implemented)
2. Open an issue on GitHub with suggestions
3. Contribute improvements through pull requests

Thank you for using the Web3 Guestbook dApp!