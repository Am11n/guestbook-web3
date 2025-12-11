import { motion } from "framer-motion";
import { fadeInUp } from "../components/motion/presets";

export default function FeaturesSection() {
  const features = [
    {
      title: "Immutable Records",
      description: "Every message is stored permanently on the Ethereum blockchain, making it impossible to delete or alter.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Wallet Integration",
      description: "Seamlessly connect with popular Web3 wallets like MetaMask, WalletConnect, and Coinbase Wallet.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Transparent & Open",
      description: "All messages are publicly viewable on the blockchain, promoting transparency and openness.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold text-accent-primary bg-accent-primary/10 rounded-full mb-4">
            FEATURES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Why Our Web3 Guestbook is Different
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Experience the power of decentralization with our blockchain-based guestbook.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-bg-surface rounded-2xl p-8 border border-accent-primary/20 hover:border-accent-primary/40 transition-all duration-300 hover:-translate-y-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInUp}
              custom={index}
            >
              <div className="w-14 h-14 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-3">{feature.title}</h3>
              <p className="text-text-muted">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}