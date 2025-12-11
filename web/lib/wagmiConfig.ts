import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http, createConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base, sepolia } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Web3 Guestbook',
  projectId: 'YOUR_PROJECT_ID_HERE', // Get yours at https://cloud.walletconnect.com/
  chains: [sepolia],
  transports: {
    [sepolia.id]: http(),
  },
});

export default config;