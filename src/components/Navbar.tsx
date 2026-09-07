import { Download } from 'lucide-react';
import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-8 lg:px-12 relative z-50">
      
      {/* Empty div for layout balance on desktop to center the links */}
      <div className="hidden lg:block w-[120px]"></div>

      {/* Desktop Links */}
      <ul className="hidden lg:flex flex-1 justify-center items-center gap-10 text-[12px] font-bold tracking-[0.15em] uppercase text-[var(--color-muted)]">
        <li className="cursor-pointer text-[var(--color-accent)] border-b border-[var(--color-accent)] pb-1">
          Home
        </li>
        <li className="cursor-pointer transition hover:text-[var(--color-text)] border-b border-transparent pb-1">
          <a href="#projects">Projects</a>
        </li>
        <li className="cursor-pointer transition hover:text-[var(--color-text)] border-b border-transparent pb-1">
          <a href="#skills">Skills</a>
        </li>
        <li className="cursor-pointer transition hover:text-[var(--color-text)] border-b border-transparent pb-1">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Desktop CTA */}
      <div className="hidden lg:flex w-[120px] justify-end">
        <button className="rounded-full border border-[var(--color-border)] text-[var(--color-text)] px-6 py-2.5 text-[11px] font-bold tracking-wider uppercase transition hover:bg-[var(--color-text)] hover:text-[var(--color-bg)]">
          Resume
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="flex w-full justify-start lg:hidden relative z-50">
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-[var(--color-text)]">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-[var(--color-bg)] flex flex-col items-center justify-center gap-10 z-40 lg:hidden">
          <ul className="flex flex-col items-center gap-8 text-[16px] font-bold tracking-[0.15em] uppercase text-[var(--color-text)]">
            <li className="cursor-pointer text-[var(--color-accent)]" onClick={() => setIsOpen(false)}>
              <a href="#home">Home</a>
            </li>
            <li className="cursor-pointer" onClick={() => setIsOpen(false)}>
              <a href="#projects">Projects</a>
            </li>
            <li className="cursor-pointer" onClick={() => setIsOpen(false)}>
              <a href="#skills">Skills</a>
            </li>
            <li className="cursor-pointer" onClick={() => setIsOpen(false)}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <button className="mt-4 rounded-full bg-[var(--color-text)] text-[var(--color-bg)] px-8 py-3 text-[12px] font-bold tracking-wider uppercase">
            Download CV
          </button>
        </div>
      )}
    </nav>
  );
}
