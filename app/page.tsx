"use client";

// Your imports and component code go below here...
import Hero from "../components/Hero";
import Sectors from "../components/Sectors";
import Features from "../components/Features";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="bg-brand-navy min-h-screen selection:bg-brand-gold selection:text-brand-navy">
      {/* Structural layout container flow */}
      <Hero />
      <Sectors />
      <Features />
      <Contact />
    </main>
  );
}