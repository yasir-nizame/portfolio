import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/hooks/useTheme";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yasir Nizami | Software Engineer Portfolio",
  description:
    "Portfolio of Muhammad Yasir Nizami — Associate Software Engineer specializing in React.js, MERN stack, AI, and full-stack web development.",
  keywords: [
    "Yasir Nizami",
    "Software Engineer",
    "MERN Stack",
    "React.js",
    "Next.js",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Muhammad Yasir Nizami" }],
  openGraph: {
    title: "Yasir Nizami | Software Engineer Portfolio",
    description:
      "Associate Software Engineer specializing in React.js, MERN stack, AI, and full-stack web development.",
    type: "website",
  },
};

// Prevents flash of wrong theme on load
const themeScript = `
  (function() {
    var t = localStorage.getItem('theme');
    if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-surface text-body transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
