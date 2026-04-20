"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/atoms/SectionHeading";
import SkillBadge from "@/components/atoms/SkillBadge";
import { skillCategories } from "@/lib/data";

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-surface-alt py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Tools and technologies I work with"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <h3 className="mb-4 text-lg font-bold text-heading">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <SkillBadge key={skill} name={skill} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
