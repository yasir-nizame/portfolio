"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
  index?: number;
}

export default function SkillBadge({ name, index = 0 }: SkillBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="inline-block rounded-full bg-primary-light px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary-light-hover"
    >
      {name}
    </motion.span>
  );
}
