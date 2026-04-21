"use client";

import { motion } from "framer-motion";
import type { Experience } from "@/lib/data";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({
  experience,
  index,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-primary after:absolute after:left-1.25 after:top-5 after:h-full after:w-0.5 after:bg-border-medium "
    >
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
        <div className="mb-3 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-lg font-bold text-heading">
              {experience.role}
            </h3>
            <p className="font-medium text-accent">
              {experience.company}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-muted">
              {experience.period}
            </p>
            {experience.location && (
              <p className="text-xs text-faint">{experience.location}</p>
            )}
          </div>
        </div>
        <ul className="space-y-2">
          {experience.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-body">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
