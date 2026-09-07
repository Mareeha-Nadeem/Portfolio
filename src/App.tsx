/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-theme-accent selection:text-white flex flex-col w-full">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="w-full flex flex-col md:flex-row gap-4 justify-between items-center text-[10px] uppercase tracking-[0.2em] text-theme-muted border-t border-theme-border pt-6 pb-12 mt-12 px-6 md:px-12 lg:px-24">
        <div>Built with Passion & Purpose</div>
        <div>© {new Date().getFullYear()} / Available for projects</div>
      </footer>
    </div>
  );
}
