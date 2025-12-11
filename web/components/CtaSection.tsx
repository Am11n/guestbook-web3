import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../components/motion/presets";

export default function CtaSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Simulate API call
    setTimeout(() => {
      if (email && email.includes("@")) {
        setIsSubmitted(true);
      } else {
        setError("Please enter a valid email address");
      }
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-bg-surface to-accent-primary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold text-accent-primary bg-accent-primary/10 rounded-full mb-4">
              GET STARTED
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Ready to Leave Your Mark?
            </h2>
            <p className="text-xl text-text-muted mb-8">
              Connect your wallet and start signing the guestbook today. Your message will be stored permanently on the blockchain.
            </p>
          </motion.div>

          {!isSubmitted ? (
            <motion.form
              className="max-w-xl mx-auto"
              onSubmit={handleSubmit}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInUp}
              custom={1}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for updates"
                  className="flex-grow px-5 py-3 bg-bg-body border border-accent-primary/30 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/50"
                  disabled={isSubmitting}
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-medium rounded-lg hover:from-accent-primary/80 hover:to-accent-secondary/80 transition-all duration-300 disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Notify Me"}
                </button>
              </div>
              {error && <p className="mt-3 text-red-400 text-sm">{error}</p>}
            </motion.form>
          ) : (
            <motion.div
              className="max-w-xl mx-auto p-6 bg-bg-body rounded-lg border border-accent-primary/30"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInUp}
              custom={1}
            >
              <div className="flex items-center justify-center text-accent-primary mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-2">Thank You!</h3>
              <p className="text-text-muted">
                We'll notify you when we have updates about the guestbook. In the meantime, you can connect your wallet and start signing!
              </p>
            </motion.div>
          )}

          <motion.div
            className="mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            custom={2}
          >
            <a 
              href="/guestbook" 
              className="inline-flex items-center px-6 py-3 bg-transparent border border-accent-primary/30 text-text-primary font-medium rounded-lg hover:bg-accent-primary/10 transition-colors duration-300"
            >
              <span>Go to Guestbook</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}