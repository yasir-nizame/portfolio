"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "@/components/atoms/Logo";
import NavLinks from "@/components/molecules/NavLinks";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import { navLinks, personalInfo } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "border-b shadow-sm backdrop-blur-xl" : "bg-transparent"
      }`}
      style={
        scrolled
          ? {
              borderColor: "var(--color-navbar-border)",
              backgroundColor: "var(--color-navbar-bg)",
            }
          : undefined
      }
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo name={personalInfo.shortName} />

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <NavLinks links={navLinks} activeSection={activeSection} />
          <ThemeToggle />
          <a
            href={personalInfo.resumeUrl}
            download
            className="rounded-lg bg-primary px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-muted"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t backdrop-blur-xl md:hidden"
            style={{
              borderColor: "var(--color-navbar-border)",
              backgroundColor: "var(--color-navbar-solid)",
            }}
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    setTimeout(() => {
                      const el = document.getElementById(link.href.slice(1));
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }, 300);
                  }}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === link.href.slice(1)
                      ? "text-primary"
                      : "text-muted hover:text-primary"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={personalInfo.resumeUrl}
                download
                className="rounded-lg bg-primary px-5 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-primary-hover"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
