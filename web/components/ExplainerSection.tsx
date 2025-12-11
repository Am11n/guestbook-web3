import { motion } from "framer-motion";
import { fadeInUp } from "../components/motion/presets";

export default function ExplainerSection() {
  return (
    <section id="how-it-works" className="py-20 bg-bg-surface">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold text-accent-primary bg-accent-primary/10 rounded-full mb-4">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Permanent Messages on the Blockchain
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Our Web3 guestbook stores your messages permanently on the Ethereum blockchain, 
            ensuring they can never be deleted or altered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Connect Your Wallet",
              description: "Connect your Ethereum wallet to authenticate and interact with the blockchain.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              )
            },
            {
              title: "Sign the Guestbook",
              description: "Write your message and submit it to be recorded permanently on the blockchain.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              )
            },
            {
              title: "Permanent Record",
              description: "Your message becomes part of an immutable record that exists forever on the blockchain.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              )
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-bg-body rounded-2xl p-6 border border-accent-primary/20 hover:border-accent-primary/40 transition-colors duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInUp}
              custom={index}
            >
              <div className="w-12 h-12 rounded-lg bg-accent-primary/10 flex items-center justify-center text-accent-primary mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">{item.title}</h3>
              <p className="text-text-muted">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}