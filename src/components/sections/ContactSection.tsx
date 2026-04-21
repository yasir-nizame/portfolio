"use client";

import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiDownload } from "react-icons/fi";
import SectionHeading from "@/components/atoms/SectionHeading";
import Button from "@/components/atoms/Button";
import SocialLinks from "@/components/molecules/SocialLinks";
import { personalInfo } from "@/lib/data";

export default function ContactSection() {
  const contactItems = [
    {
      icon: FiMail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    { icon: FiMapPin, label: "Location", value: personalInfo.location },
  ];

  return (
    <section id="contact" className="bg-surface-alt py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Get in Touch"
          subtitle="I'd love to hear from you"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact info */}
            <div>
              <h3 className="mb-2 text-2xl font-bold text-heading">
                Let&apos;s connect
              </h3>
              <p className="mb-8 text-body">
                Feel free to reach out for collaborations, opportunities, or
                just a friendly chat about technology.
              </p>

              <div className="space-y-5">
                {contactItems.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-light text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-faint">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-heading transition-colors hover:text-primary"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-heading">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <p className="mb-3 text-sm font-medium text-muted">
                  Find me on
                </p>
                <SocialLinks
                  github={personalInfo.github}
                  linkedin={personalInfo.linkedin}
                  email={personalInfo.email}
                />
              </div>
            </div>

            {/* CTA / Resume */}
            <div className="flex flex-col items-center justify-center rounded-xl bg-gradient-cta p-8 text-center text-white">
              <FiDownload className="mb-4 h-12 w-12" />
              <h3 className="mb-2 text-2xl font-bold">Download Resume</h3>
              <p className="mb-6 text-white/80">
                Get a copy of my latest resume to learn more about my
                qualifications and experience.
              </p>
              <Button
                href={personalInfo.resumeUrl}
                variant="outline-white"
                size="md"
              >
                <FiDownload className="h-4 w-4" />
                Download
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
