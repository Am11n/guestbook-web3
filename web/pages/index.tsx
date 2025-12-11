import Head from "next/head";
import { useEffect } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ExplainerSection from "../components/ExplainerSection";
import FeaturesSection from "../components/FeaturesSection";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";

export default function Home() {
  // Scroll to section when hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    // Check on initial load
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-bg-body text-text-primary">
      <Head>
        <title>Web3 Guestbook - Permanent Messages on the Blockchain</title>
        <meta name="description" content="A decentralized guestbook where your messages are permanently stored on the Ethereum blockchain" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <HeroSection />
        <ExplainerSection />
        <FeaturesSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
