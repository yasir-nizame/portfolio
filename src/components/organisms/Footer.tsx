import SocialLinks from "@/components/molecules/SocialLinks";
import { personalInfo, navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border-medium bg-surface-alt">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div>
            <p className="text-lg font-bold text-heading">
              {personalInfo.shortName}
            </p>
            <p className="text-sm text-muted">{personalInfo.tagline}</p>
          </div>
          <SocialLinks
            github={personalInfo.github}
            linkedin={personalInfo.linkedin}
            email={personalInfo.email}
            size="sm"
          />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="mt-8 border-t border-border-medium pt-6 text-center">
          <p className="text-sm text-faint">
            &copy; {new Date().getFullYear()} {personalInfo.shortName}. Built
            with Next.js &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
