import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

interface SocialLinksProps {
  github: string;
  linkedin: string;
  email: string;
  size?: "sm" | "md";
}

export default function SocialLinks({
  github,
  linkedin,
  email,
  size = "md",
}: SocialLinksProps) {
  const iconSize = size === "sm" ? "h-4 w-4" : "h-5 w-5";
  const linkSize = size === "sm" ? "h-9 w-9" : "h-11 w-11";

  const links = [
    { href: github, icon: FiGithub, label: "GitHub" },
    { href: linkedin, icon: FiLinkedin, label: "LinkedIn" },
    { href: `mailto:${email}`, icon: FiMail, label: "Email" },
  ];

  return (
    <div className="flex gap-3">
      {links.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={label}
          className={`${linkSize} flex items-center justify-center rounded-full border border-social-border text-social-text transition-all hover:border-primary hover:bg-primary hover:text-white`}
        >
          <Icon className={iconSize} />
        </a>
      ))}
    </div>
  );
}
