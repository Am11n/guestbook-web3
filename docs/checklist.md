# Web3 On-Chain Guestbook dApp  
Full prosjektplan med sjekkliste for Cursor AI

## Cursor Task Style
Du er en senior Web3 fullstack-utvikler som jobber i et helt nytt repo.  
Følg stegene i rekkefølge.  
Ikke introduser ekstra rammeverk.  
Hold koden ren, typesikker og enkel.

---

# ✔️ Step-by-step Task Checklist

## 1. Opprett `contracts`-prosjekt med Hardhat
- [ ] Opprett mappe `contracts` i prosjektroten  
- [ ] Initialiser Node-prosjekt i `contracts` (`pnpm init` eller `npm init -y`)  
- [ ] Installer Hardhat med TypeScript-støtte:  
  - [ ] `pnpm add -D hardhat typescript ts-node @types/node`  
  - [ ] `pnpm add -D @nomicfoundation/hardhat-toolbox`  
- [ ] Kjør `npx hardhat` og velg TypeScript-prosjekt  
- [ ] Sett Solidity-versjon i `hardhat.config.ts` til `0.8.24`  
- [ ] Legg til sepolia-nettverk med RPC-URL og private key (fra `.env`)  
- [ ] Opprett `.env` i `contracts` med:  
  - [ ] `SEPOLIA_RPC_URL=...`  
  - [ ] `SEPOLIA_PRIVATE_KEY=...`  
- [ ] Oppdater `hardhat.config.ts` til å lese `.env` via `dotenv`  

---

## 2. Implementer `GuestBook.sol`
- [ ] Opprett `contracts/GuestBook.sol`  
- [ ] Implementer kontrakten iht. spesifikasjon  
- [ ] Kjør `npx hardhat compile` og verifiser at den kompilerer uten feil  

---

## 3. Skriv tester for kontrakten
- [ ] Opprett `test/GuestBook.test.ts`  
- [ ] Test deploy av kontrakt  
- [ ] Test kall til `addEntry(name, message)`  
- [ ] Test at `getEntries` returnerer korrekt antall entries  
- [ ] Test innhold:  
  - [ ] `sender`  
  - [ ] `name`  
  - [ ] `message`  
  - [ ] `timestamp > 0`  
- [ ] Test at `EntryAdded`-event emittes med korrekt data  
- [ ] Kjør `npx hardhat test` og verifiser at alle tester passerer  

---

## 4. Deploy-script til Sepolia
- [ ] Opprett `scripts/deploy.ts`  
- [ ] Hent `GuestBook` factory i scriptet  
- [ ] Deploy kontrakten  
- [ ] Logg kontraktadressen i terminalen  
- [ ] Kjør deploy:  
  - [ ] `npx hardhat run scripts/deploy.ts --network sepolia`  
- [ ] Kopier kontraktadresse til frontend-oppsettet (f.eks. `.env` i `web` eller `web/lib/contract.ts`)  

---

## 5. Opprett `web`-prosjekt (Next.js)
- [ ] Opprett mappe `web` i prosjektroten  
- [ ] Initier Next.js 14/15 med TypeScript (`pnpm create next-app web --ts`)  
- [ ] Fjern demo-innhold  
- [ ] Sett opp basisstruktur:  
  - [ ] `app/layout.tsx`  
  - [ ] `app/page.tsx`  
  - [ ] `app/globals.css`  

---

## 6. Installer wagmi, viem og RainbowKit
- [ ] Installer: `pnpm add wagmi viem @rainbow-me/rainbowkit`  
- [ ] Opprett `web/lib/wagmiConfig.ts`  
- [ ] Sett opp Wagmi med chain: `sepolia`  
- [ ] Opprett providers i `layout.tsx`  
  - [ ] Wrap med `WagmiConfig`  
  - [ ] Wrap med `RainbowKitProvider`  
- [ ] Legg inn global `ConnectButton`  

---

## 7. Legg til kontraktkonfigurasjon i frontend
- [ ] Opprett `web/lib/contract.ts`  
- [ ] Legg inn `GUESTBOOK_ADDRESS` (fra deploy)  
- [ ] Legg inn ABI (fra Hardhat-artifacts eller manuelt)  
- [ ] Sikre at ABI er typesikker (`as const`)  

---

## 8. Implementer hooks for kontraktinteraksjon
- [ ] Bruk `useReadContract` for `getEntries`  
- [ ] Bruk `useWriteContract` for `addEntry`  
- [ ] Opprett `web/lib/guestbook.ts`:  
  - [ ] `useGuestbookEntries`  
  - [ ] `useAddGuestbookEntry`  

---

## 9. Bygg UI i `app/page.tsx`
- [ ] Legg inn `ConnectButton`  
- [ ] Lag form med:  
  - [ ] Input: `name`  
  - [ ] Textarea: `message`  
  - [ ] Submit-knapp  
- [ ] Håndter status:  
  - [ ] Pending  
  - [ ] Feil  
  - [ ] Venter på bekreftelse  
- [ ] Hent entries via `useGuestbookEntries`  
- [ ] Map og vis:  
  - [ ] Avkortet adresse  
  - [ ] Navn  
  - [ ] Melding  
  - [ ] Formatert tidspunkt  
- [ ] (Valgfritt) Implementer Tailwind:  
  - [ ] Minimal layout  
  - [ ] Kort per entry  

---

## 10. Kjør og verifiser hele flyten
- [ ] Start dev-server: `pnpm dev`  
- [ ] Åpne i browser  
- [ ] Connect wallet (Metamask med Sepolia)  
- [ ] Send melding  
- [ ] Verifiser at transaksjonen bekreftes  
- [ ] Se meldingen i listen  
- [ ] Verifiser i Etherscan:  
  - [ ] Entries lagret on-chain  
  - [ ] Events publisert  

---

## 11. Dokumentasjon
- [ ] Opprett eller oppdater `README.md`  
- [ ] Beskriv:  
  - [ ] Prosjektets formål  
  - [ ] Hvordan kjøre `contracts`-delen  
  - [ ] Hvordan deploye til Sepolia  
  - [ ] Hvordan starte `web`  
  - [ ] Krav til Metamask og test-ETH  

---

# ✔️ Expected Output
Når prosjektet er ferdig, skal du ha:

- [ ] Fullt fungerende `GuestBook` smartkontrakt på Sepolia  
- [ ] Hardhat-oppsett med fungerende tester  
- [ ] En Next.js-dApp som:  
  - [ ] Kobler til wallet  
  - [ ] Lar bruker sende navn + melding  
  - [ ] Viser alle entries fra `getEntries`  
- [ ] TypeScript-overalt  
- [ ] Ren, enkel, skalerbar kodebase  
- [ ] En README som gjør prosjektet lett å reprodusere  

