/**
 * Theme Constants — Single source of truth for the entire color palette.
 *
 * HOW IT WORKS:
 * - These values are used in `globals.css` as CSS custom properties.
 * - Tailwind's `@theme inline` maps them to utility classes like `text-primary`, `bg-surface`, etc.
 * - Components use the semantic Tailwind classes — NO hardcoded colors anywhere.
 * - To change a color across the entire site, update it here and in `globals.css`.
 *
 * NAMING CONVENTION:
 *   primary   → brand / accent color (buttons, links, highlights)
 *   secondary → gradient / complementary accent
 *   surface   → page & card backgrounds
 *   border    → card and section borders
 *   text      → heading, body, muted text
 *   success   → positive indicators
 */

export const themeColors = {
  light: {
    // Brand
    primary: "#2563eb", // blue-600
    primaryHover: "#1d4ed8", // blue-700
    primaryLight: "#eff6ff", // blue-50  — light accent backgrounds
    primaryLightHover: "#dbeafe", // blue-100

    // Secondary / gradient
    secondary: "#9333ea", // purple-600
    secondaryLight: "#f3e8ff", // purple-50

    // Surfaces
    surface: "#ffffff",
    surfaceAlt: "#f9fafb", // alternating section bg (gray-50)
    card: "#ffffff",

    // Borders
    border: "#f3f4f6", // gray-100  — card borders
    borderMedium: "#e5e7eb", // gray-200  — dividers, navbar
    borderLight: "rgba(229,231,235,0.5)", // navbar scrolled

    // Text
    heading: "#111827", // gray-900
    body: "#4b5563", // gray-600
    muted: "#6b7280", // gray-500
    faint: "#9ca3af", // gray-400

    // Status
    success: "#16a34a", // green-600
    successLight: "#f0fdf4", // green-50
    successText: "#15803d", // green-700
    check: "#22c55e", // green-500

    // Misc
    tagBg: "#f3f4f6", // gray-100 — tech stack tags
    tagText: "#4b5563", // gray-600
    socialBorder: "#e5e7eb", // gray-200
    socialText: "#4b5563", // gray-600
    navbarBg: "rgba(255,255,255,0.8)",
    navbarBgSolid: "rgba(255,255,255,0.95)",
    mobileBorder: "rgba(229,231,235,0.5)",
    selection: "#3b82f6",
    scrollThumb: "#94a3b8",
    scrollThumbHover: "#64748b",
  },

  dark: {
    // Brand
    primary: "#60a5fa", // blue-400
    primaryHover: "#3b82f6", // blue-500
    primaryLight: "rgba(30,58,138,0.3)", // blue-900/30
    primaryLightHover: "rgba(30,58,138,0.5)", // blue-900/50

    // Secondary / gradient
    secondary: "#a855f7", // purple-500
    secondaryLight: "rgba(88,28,135,0.3)",

    // Surfaces
    surface: "#0a0a0a",
    surfaceAlt: "#030712", // gray-950
    card: "#021233 ", // gray-900

    // Borders
    border: "#1f2937", // gray-800
    borderMedium: "#1f2937", // gray-800
    borderLight: "rgba(31,41,55,0.5)",

    // Text
    heading: "#ffffff",
    body: "#d1d5db", // gray-300
    muted: "#9ca3af", // gray-400
    faint: "#6b7280", // gray-500

    // Status
    success: "#4ade80", // green-400
    successLight: "rgba(20,83,45,0.3)", // green-900/30
    successText: "#86efac", // green-300
    check: "#22c55e",

    // Misc
    tagBg: "#1f2937", // gray-800
    tagText: "#9ca3af", // gray-400
    socialBorder: "#374151", // gray-700
    socialText: "#9ca3af", // gray-400
    navbarBg: "rgba(10,10,10,0.8)",
    navbarBgSolid: "rgba(10,10,10,0.95)",
    mobileBorder: "rgba(31,41,55,0.5)",
    selection: "#3b82f6",
    scrollThumb: "#475569",
    scrollThumbHover: "#64748b",
  },
} as const;
