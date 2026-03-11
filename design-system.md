# Design System - BLTBA (Hội Doanh nghiệp Quận Bắc Từ Liêm)

This document details the current design system and styling guidelines for the BLTBA website. It ensures consistency when developing new features or using AI models to generate code.

## 1. Overall Concept & Layout
- **Style:** Professional, modern, and minimalist, while maintaining a strong Corporate/NGO identity. It shares similarities with premium business WordPress themes but with a modern, tech-forward edge.
- **Vibe:** Trustworthy, solid, formal, yet dynamic, cinematic, and approachable.
- **Layout:** Utilizes a standard Grid system. The maximum width for content is typically constrained to `max-w-7xl` (1280px) with `mx-auto` for centering.
- **Fit-in-One-Screen Principle:** High-impact sections (like Hero or About introductions) should be optimized to fit within a standard laptop screen. Use `min-h-[60vh]` instead of `80vh` or `100vh`, tighter padding (`py-16`), and appropriate text sizing to reduce excessive scrolling.
- **Blended Layouts (Editorial Style):** Instead of rigid, separated blocks, use CSS `mask-image` with linear gradients (e.g., `mask-image: linear-gradient(to left, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 90%)`) to seamlessly blend images into the background color. This creates a high-end, editorial magazine look where images and text interact fluidly.

## 2. Color Palette
The color system focuses on Deep Red and Amber accents, combined with versatile neutrals and striking dark modes.

### Primary Colors
- **Main Red (`red-700` - `#b91c1c` / `red-600`):** Used for the Logo, primary headings, primary buttons, and accent borders.
- **Deep Red (`red-800` / `red-900`):** Used for hover states, gradient backgrounds, or sections requiring strong emphasis.
- **Darkest Red (`red-950`):** Used for the Footer or deep gradient backgrounds to convey stability and authority.
- **Light Red (`red-50` / `red-100`):** Used as a subtle background for icons, badges, or secondary text.

### Accent Colors
- **Amber (`amber-500` / `amber-600`):** Used for small details, icons, and sub-text (like slogans) to add a touch of elegance and warmth.

### Neutral Colors & Dark Mode
- **White (`white` - `#ffffff`):** The primary background color for clean, professional sections.
- **Light Grays (`gray-50` / `gray-100` / `gray-200`):** Used for secondary section backgrounds, borders, or card backgrounds to create soft separation from white.
- **Dark Grays (`gray-700` / `gray-800`):** Used for body text on light backgrounds to ensure high contrast and readability.
- **Cinematic Dark Mode (`gray-900` / `gray-950`):** Used as the background for high-impact sections (combined with `text-white` and `text-gray-300` or `text-gray-400`). This creates a modern, premium, and immersive experience, especially when combined with blended images and red accents.

## 3. Typography
- **Primary Font:** `Inter`, sans-serif. A modern font optimized for digital screens, providing a clean and highly legible appearance.

### Headings
- **Style:** Often `uppercase` for large titles (Hero sections, Section titles).
- **Weight:** `font-bold` (700) or `font-extrabold` (800).
- **Tracking (Letter Spacing):** Use `tracking-tighter` or `tracking-tight` for large headings, and `tracking-widest` for small banner-style labels.
- **Color:** Typically `text-red-700` or `text-gray-900` on light backgrounds, and `text-white` with `text-red-500` accents on dark backgrounds.

### Body Text
- **Size:** `text-base` (16px) for standard content, `text-sm` (14px) for secondary details, footers, or metadata.
- **Line Height:** Use `leading-relaxed` for long paragraphs to improve readability.
- **Color:** `text-gray-600` or `text-gray-700` on light backgrounds; `text-gray-300` or `text-gray-400` on dark backgrounds.

## 4. UI Components

### Buttons & Badges
- **Primary Button:** `bg-red-700`, `text-white`, moderately rounded (`rounded` or `rounded-md`) for professional actions, or fully rounded (`rounded-full`) for friendly CTAs. Hover: `bg-red-800`.
- **Secondary/Filters:** Light container. `bg-white` or `bg-gray-50`, `border border-gray-200`, `text-gray-600`. Active state: `bg-red-50 text-red-700 border-red-200`.
- **Glassmorphism:** On dark backgrounds or over images, use `bg-white/10 backdrop-blur-md` (or `bg-gray-900/80 backdrop-blur-md`) with subtle borders (`border-white/20`) for a premium, frosted-glass effect.

### Cards
- **Light Theme:** `bg-white`, `rounded-xl` or `rounded-2xl`, `shadow-sm`, thin border `border-gray-100`.
- **Interaction:** On hover, cards elevate (`hover:shadow-lg`), images zoom slightly (`group-hover:scale-105`), and titles change color (`group-hover:text-red-700`).

### Images
- **Overlays:** Background images must have overlays (e.g., `bg-black/60`, `bg-gray-900/90`, or `bg-gradient-to-r from-red-900/80`) to ensure text legibility.
- **Aspect Ratio:** Use `aspect-video` (16:9) for horizontal thumbnails (like news) for consistency.

## 5. Animations & Effects
Powered primarily by `motion/react` (Framer Motion) and Tailwind CSS.

- **Fade In Up / Left / Right:** Elements should slide in gently when entering the viewport (`initial={{ opacity: 0, y: 20 }}`, `whileInView={{ opacity: 1, y: 0 }}`).
- **Duration:** Typically `0.4s` to `0.8s` for a deliberate, sophisticated feel.
- **Viewport Trigger:** Animations should trigger only once (`viewport={{ once: true }}`).
- **Stagger:** For lists or grids of cards, use `transition={{ delay: index * 0.1 }}` so items appear sequentially.
- **Advanced Hover - Outline Beam (Shimmer):** For a highly modern, tech-forward interaction on dark cards, use absolute positioned layers to create a glowing border and a sweeping light beam. 
  - *Implementation:* A border layer (`border-transparent group-hover:border-red-500/50 transition-colors duration-500`) and a shimmer layer (`bg-gradient-to-r from-transparent via-red-500/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]`). Requires `@keyframes shimmer { 100% { transform: translateX(100%); } }` in global CSS.

## 6. Iconography
- **Library:** **Lucide React**.
- **Style:** Line icons, simple and clear.
- **Color:** Functional icons are gray (`text-gray-400` or `text-gray-500`). Decorative or accent icons are often placed in a soft red circle (`bg-red-50 text-red-600` or `bg-gray-800 text-red-400` in dark mode). When hovered, they scale up and change to solid brand colors.
