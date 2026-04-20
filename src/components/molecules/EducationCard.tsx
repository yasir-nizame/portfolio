"use client";

import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import type { Education } from "@/lib/data";

interface EducationCardProps {
  education: Education;
  index: number;
}

export default function EducationCard({
  education,
  index,
}: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
          <FiAward className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-heading">
            {education.degree}
          </h3>
          <p className="font-medium text-accent">
            {education.institution}
          </p>
          <div className="mt-2 flex flex-wrap gap-3 text-sm text-muted">
            <span>{education.year}</span>
            <span className="font-medium text-accent">
              {education.grade}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
