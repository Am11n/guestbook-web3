# Web3 On-Chain Guestbook dApp

## Title
Web3 On-Chain Guestbook (Solidity + Hardhat + Next.js + wagmi + viem)

## Objective
Bygge en minimal, men komplett Web3-applikasjon hvor brukere:
- Kobler til wallet
- Sender en melding (navn + tekst) til en smartkontrakt
- Leser og viser alle meldinger fra kontrakten

Målet er å lære hele Web3-flyten:
- Smartkontrakt
- Deploy til testnett (Sepolia)
- Wallet-integrasjon i frontend
- Lese og skrive on-chain data fra en Next.js-app

---

## Requirements

- Node.js (seneste LTS)
- pnpm eller npm
- Git repo initialisert
- Du kan bruke én monorepo-root med:
  - `/contracts` for Hardhat
  - `/web` for Next.js dApp

Teknologier:
- Solidity 0.8.x
- Hardhat (med TypeScript)
- Next.js (app router)
- TypeScript
- wagmi
- viem
- RainbowKit
- Tailwind CSS (for enkel styling, valgfritt men ønsket)

---

## High-level architecture

- Smartkontrakt `GuestBook` på Sepolia:
  - Lagrer en liste med `Entry` (sender, navn, melding, timestamp)
  - Event `EntryAdded` for hver ny melding
- Next.js-app:
  - Connect wallet via RainbowKit + wagmi
  - Form for navn + melding
  - Kaller `addEntry` på kontrakten
  - Leser `getEntries` og viser liste

On-chain:
- Kun navn og melding lagres i klartekst
- Brukerens adresse lagres automatisk (`msg.sender`)
- Timestamp med `block.timestamp`

---

## Project structure

Bruk denne strukturen i repoet:

```txt
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
