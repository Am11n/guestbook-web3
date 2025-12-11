import { motion } from "framer-motion";
import { fadeInUp, floatLoop } from "../components/motion/presets";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-bg-body via-bg-surface to-accent-primary/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold text-accent-primary bg-accent-primary/10 rounded-full mb-4">
              WEB3 INTEGRATED
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
              Leave Your Mark on the <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Blockchain</span>
            </h1>
            <p className="text-xl text-text-muted mb-8 max-w-2xl">
              A decentralized guestbook where your messages are permanently stored on the Ethereum blockchain. 
              Connect your wallet and become part of the permanent digital record.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#cta" 
                className="px-8 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-medium rounded-lg hover:from-accent-primary/80 hover:to-accent-secondary/80 transition-all duration-300 transform hover:scale-105 text-center"
              >
                Sign the Guestbook
              </a>
              <a 
                href="#features" 
                className="px-8 py-4 border border-accent-primary/30 text-text-primary font-medium rounded-lg hover:bg-accent-primary/10 transition-colors duration-300 text-center"
              >
                Learn More
              </a>
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            <motion.div 
              className="relative mx-auto w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 border border-accent-primary/30 shadow-2xl flex items-center justify-center"
              variants={floatLoop}
              animate="animate"
            >
              <div className="absolute inset-4 rounded-xl bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-accent-primary/10 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-accent-secondary/10 blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}