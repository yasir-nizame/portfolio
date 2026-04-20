"use client";

import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import Button from "@/components/atoms/Button";
import SocialLinks from "@/components/molecules/SocialLinks";
import { personalInfo } from "@/lib/data";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-purple-400/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary"
          >
            Welcome to my portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-4 text-4xl font-bold leading-tight text-heading sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">{personalInfo.shortName}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-6 text-lg text-body sm:text-xl"
          >
            {personalInfo.title} &mdash; {personalInfo.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Button href="#contact">
              Get in Touch
            </Button>
            <Button href="#experience" variant="outline">
              Professional Journey
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <SocialLinks
              github={personalInfo.github}
              linkedin={personalInfo.linkedin}
              email={personalInfo.email}
            />
          </motion.div>
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="shrink-0"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-linear-to-r from-blue-600 to-purple-600 opacity-20 blur-2xl" />
            <Image
              src={personalInfo.avatarUrl}
              alt={personalInfo.name}
              width={320}
              height={320}
              priority
              className="relative rounded-full border-4 border-card shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center gap-2 text-faint"
        >
          <span className="text-xs">Scroll Down</span>
          <FiArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.a>
    </section>
  );
}
