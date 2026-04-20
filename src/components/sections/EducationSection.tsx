"use client";

import SectionHeading from "@/components/atoms/SectionHeading";
import EducationCard from "@/components/molecules/EducationCard";
import CertificationCard from "@/components/molecules/CertificationCard";
import { educationList, certifications } from "@/lib/data";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Education & Certifications"
          subtitle="My academic background and credentials"
        />

        <div className="space-y-12">
          {/* Education */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-heading">
              🎓 Education
            </h3>
            <div className="space-y-4">
              {educationList.map((edu, i) => (
                <EducationCard
                  key={edu.institution}
                  education={edu}
                  index={i}
                />
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-heading">
              📜 Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <CertificationCard
                  key={cert.title}
                  certification={cert}
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
