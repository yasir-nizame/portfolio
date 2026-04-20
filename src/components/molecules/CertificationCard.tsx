"use client";

import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import type { Certification } from "@/lib/data";

interface CertificationCardProps {
  certification: Certification;
  index: number;
}

export default function CertificationCard({
  certification,
  index,
}: CertificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-sm"
    >
      <FiCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-check" />
      <div>
        <p className="font-medium text-heading">{certification.title}</p>
        <p className="text-sm text-muted">
          {certification.issuer}
          {certification.year && ` · ${certification.year}`}
        </p>
      </div>
    </motion.div>
  );
}
