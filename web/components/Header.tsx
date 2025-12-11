import { ConnectButton } from "@rainbow-me/rainbowkit";
import { motion } from "framer-motion";
import { fadeInDown } from "../components/motion/variants";

export default function Header() {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 py-4 px-6 backdrop-blur-md bg-bg-body/80 border-b border-accent-primary/20"
      initial="hidden"
      animate="visible"
      variants={fadeInDown}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
          Web3 Guestbook
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-text-muted hover:text-text-primary transition-colors">Features</a>
          <a href="#how-it-works" className="text-text-muted hover:text-text-primary transition-colors">How It Works</a>
          <a href="/guestbook" className="text-text-muted hover:text-text-primary transition-colors">Guestbook</a>
          <a href="#cta" className="text-text-muted hover:text-text-primary transition-colors">Get Started</a>
        </nav>
        <div className="flex items-center space-x-4">
          <ConnectButton 
            showBalance={false}
            chainStatus="none"
            accountStatus={{
              smallScreen: 'avatar',
              largeScreen: 'full',
            }}
          />
        </div>
      </div>
    </motion.header>
  );
}