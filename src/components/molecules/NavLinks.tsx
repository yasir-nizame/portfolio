"use client";

import { NavLink } from "@/lib/data";

interface NavLinksProps {
  links: NavLink[];
  activeSection?: string;
  onClick?: () => void;
}

export default function NavLinks({
  links,
  activeSection,
  onClick,
}: NavLinksProps) {
  return (
    <>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={onClick}
          className={`text-sm font-medium transition-colors duration-200 ${
            activeSection === link.href.slice(1)
              ? "text-primary"
              : "text-muted hover:text-primary"
          }`}
        >
          {link.label}
        </a>
      ))}
    </>
  );
}
