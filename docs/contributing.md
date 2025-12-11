# Contributing Guide

## Welcome

Thank you for considering contributing to the Web3 Guestbook dApp! This document provides guidelines and best practices for contributing to the project.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct:
- Be respectful and inclusive
- Be collaborative and helpful
- Focus on what is best for the community
- Show empathy towards other community members

## How to Contribute

### Reporting Bugs

Before submitting a bug report:
1. Check existing issues to avoid duplicates
2. Ensure you're using the latest version
3. Gather relevant information (error messages, steps to reproduce, environment)

When submitting a bug report, include:
- Clear and descriptive title
- Steps to reproduce the issue
- Expected vs. actual behavior
- Screenshots if applicable
- Environment details (OS, browser, node version, etc.)

### Suggesting Enhancements

Enhancement suggestions are welcome! When suggesting enhancements:
1. Check existing issues and feature requests
2. Provide a clear and descriptive title
3. Explain why the enhancement would be useful
4. Include examples or mockups if possible

### Code Contributions

#### Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/guestbook-web3.git
   ```
3. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

#### Development Setup

1. Install dependencies for both contracts and web:
   ```bash
   cd contracts && pnpm install
   cd ../web && pnpm install
   ```

2. Run tests to ensure everything works:
   ```bash
   cd contracts && npx hardhat test
   cd ../web && pnpm test
   ```

#### Making Changes

1. Follow the existing code style and conventions
2. Write clear, commented code
3. Add tests for new functionality
4. Update documentation as needed
5. Ensure all tests pass before submitting

#### Commit Messages

Follow conventional commit format:
- `feat: Add new feature`
- `fix: Resolve issue with wallet connection`
- `docs: Update documentation`
- `test: Add tests for guestbook entries`
- `refactor: Improve contract structure`
- `chore: Update dependencies`

#### Pull Request Process

1. Ensure your branch is up to date with main:
   ```bash
   git fetch origin
   git rebase origin/main
   ```

2. Push your branch to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

3. Open a pull request against the main branch
4. Fill out the PR template completely
5. Request review from maintainers

### Pull Request Guidelines

#### Before Submitting

- [ ] Tests pass locally
- [ ] Code follows project style guidelines
- [ ] Documentation updated (if needed)
- [ ] Commit messages are clear and follow conventions
- [ ] Branch is up to date with main

#### PR Description

Include in your pull request:
1. Description of changes
2. Related issue numbers (if applicable)
3. Testing instructions
4. Screenshots (if UI changes)
5. Breaking changes (if any)

## Development Standards

### Code Quality

#### TypeScript
- Use strict typing
- Avoid `any` type when possible
- Follow TypeScript best practices
- Use interfaces for complex object structures

#### Solidity
- Follow Solidity style guide
- Use appropriate visibility modifiers
- Include NatSpec documentation
- Implement proper error handling
- Consider gas optimization

#### React/Next.js
- Use functional components with hooks
- Follow React best practices
- Implement proper error boundaries
- Use TypeScript for prop typing

### Testing

#### Smart Contract Tests
- Cover all functions and edge cases
- Test event emissions
- Verify state changes
- Include negative test cases

#### Frontend Tests
- Unit test custom hooks
- Test component rendering
- Verify user interactions
- Mock external dependencies

### Documentation

Keep documentation up to date:
- Update README files when changing setup
- Document new features
- Update API documentation
- Include code comments for complex logic

## Style Guides

### Git Commit Messages

- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit first line to 72 characters or less
- Reference issues and pull requests liberally

### TypeScript Style

- Use PascalCase for types and interfaces
- Use camelCase for variables and functions
- Use UPPER_CASE for constants
- Prefer const over let
- Use arrow functions for callbacks

### Solidity Style

- Use mixedCase for function and variable names
- Use CapitalizedWords for contract names
- Use ALL_CAPS for constants
- Include NatSpec comments for all public functions
- Follow 4-space indentation

### React Style

- Use functional components
- Extract custom hooks for reusable logic
- Use TypeScript interfaces for props
- Implement proper error handling
- Follow component composition patterns

## Community

### Communication Channels

- GitHub Issues: Bug reports and feature requests
- GitHub Discussions: General discussion and questions
- Pull Requests: Code reviews and contributions

### Recognition

Contributors will be recognized in:
- Release notes
- Contributor list
- Project documentation

## Resources

### Learning Materials

For new contributors unfamiliar with technologies:
- [Solidity Documentation](https://docs.soliditylang.org/)
- [Hardhat Documentation](https://hardhat.org/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Wagmi Documentation](https://wagmi.sh/docs)
- [RainbowKit Documentation](https://www.rainbowkit.com/docs)

### Development Tools

Recommended tools for development:
- VS Code with Solidity and TypeScript extensions
- Metamask for wallet testing
- Hardhat for local blockchain development
- Etherscan for contract verification

## Questions?

If you have any questions about contributing, feel free to:
1. Open an issue with your question
2. Ask in GitHub Discussions
3. Contact the maintainers directly

Thank you for contributing to the Web3 Guestbook dApp!