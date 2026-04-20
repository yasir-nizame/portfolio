"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/atoms/SectionHeading";
import { personalInfo } from "@/lib/data";

export default function AboutSection() {
  const highlights = [
    { label: "Experience", value: "2+ Years" },
    { label: "Projects", value: "10+" },
    { label: "CGPA", value: "3.62" },
    { label: "Certifications", value: "3" },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="About Me" subtitle="Get to know me better" />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg leading-relaxed text-body">
              {personalInfo.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-primary-light px-4 py-1.5 text-sm font-medium text-primary">
                📍 {personalInfo.location}
              </span>
              <span className="rounded-full bg-success-light px-4 py-1.5 text-sm font-medium text-success-text">
                🟢 Open to opportunities
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card p-6 text-center shadow-sm"
              >
                <p className="text-3xl font-bold text-primary">{item.value}</p>
                <p className="mt-1 text-sm text-muted">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
