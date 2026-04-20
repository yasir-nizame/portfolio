"use client";

import SectionHeading from "@/components/atoms/SectionHeading";
import ExperienceCard from "@/components/molecules/ExperienceCard";
import { experiences } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey so far"
        />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
