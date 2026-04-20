interface LogoProps {
  name: string;
}

export default function Logo({ name }: LogoProps) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <a
      href="#home"
      className="group flex items-center gap-2 text-xl font-bold text-heading"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white transition-transform group-hover:scale-105">
        {initials}
      </span>
      <span className="hidden sm:inline">{name}</span>
    </a>
  );
}
