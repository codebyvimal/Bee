# Hunnybi UI Design System

## Brand Personality

- **Premium:** High-end, sophisticated, and trustworthy.
- **Minimalist:** Clean lines, ample whitespace, and lack of clutter.
- **Modern Wellness:** Organic warmth combined with contemporary design.
- **Luxury D2C Startup:** High conversion focus without sacrificing elegance.

---

## 1. Color System

Our color palette is rooted in soft, earthy tones that evoke nature and wellness, contrasted with deep, rich shades for clarity and elegance.

### Light Mode

- **Background:** `hsl(40 20% 97%)` - Soft, warm off-white (Alabaster).
- **Foreground:** `hsl(20 14% 15%)` - Deep, soft charcoal (avoids harsh pure black).
- **Card/Popover:** `hsl(0 0% 100%)` - Clean white for depth against the off-white background.
- **Primary:** `hsl(38 40% 50%)` - Muted gold/amber for modern wellness accents.
- **Secondary:** `hsl(40 15% 90%)` - Soft stone/beige for subtle secondary actions.
- **Accent:** `hsl(120 15% 45%)` - Earthy sage green for wellness elements and success states.
- **Muted:** `hsl(40 10% 92%)` - Subtle grays for borders and inactive states.

### Dark Mode

- **Background:** `hsl(20 10% 10%)` - Deep, rich charcoal.
- **Foreground:** `hsl(40 20% 90%)` - Soft off-white for readability.
- **Card/Popover:** `hsl(20 10% 12%)` - Slightly lighter charcoal for elevation.
- **Primary:** `hsl(38 40% 55%)` - Brighter muted gold for contrast.

---

## 2. Typography Scale

We use **Inter** (or any premium geometric sans-serif) for a clean, modern aesthetic.

- **Display (H1):** `text-5xl` to `text-6xl`, tracking tight (`tracking-tighter`), font weight `font-medium` or `font-semibold`.
- **Heading 2 (H2):** `text-4xl`, `tracking-tight`, `font-semibold`.
- **Heading 3 (H3):** `text-2xl` to `text-3xl`, `tracking-tight`, `font-medium`.
- **Large Body / Lead:** `text-lg` to `text-xl`, `leading-relaxed`, `text-muted-foreground`.
- **Base Body:** `text-base`, `leading-relaxed`.
- **Small Text:** `text-sm`, `leading-snug`.
- **Micro Text:** `text-xs`, `uppercase`, `tracking-widest`, `font-medium` (used for eyebrow text and tags).

---

## 3. Spacing System

Spacing is crucial for the minimalist and luxury feel. Generous whitespace allows content to breathe.

- **Micro (Elements):** `gap-2` (0.5rem), `gap-4` (1rem).
- **Component Padding:** `p-6` (1.5rem), `p-8` (2rem).
- **Section Spacing (Small):** `py-16` (4rem) on mobile, `py-24` (6rem) on desktop.
- **Section Spacing (Large):** `py-24` (6rem) on mobile, `py-32` (8rem) on desktop.

---

## 4. Reusable Button Variants

Buttons are slightly taller, with smooth transitions and subtle shadows.

- **`default`**: `bg-primary text-primary-foreground` with `hover:shadow-md`. Use for primary calls to action (e.g., "Add to Cart").
- **`premium`**: `bg-foreground text-background` with `hover:shadow-lg`. Use for high-impact actions.
- **`secondary`**: `bg-secondary text-secondary-foreground`. Use for alternative actions.
- **`outline`**: `border border-input bg-transparent`. Use for secondary actions on complex pages.
- **`ghost`**: `hover:bg-accent`. Use for tertiary actions (like navigation or subtle icons).
- **`subtle`**: `bg-muted text-muted-foreground`. Use for disabled or very low-priority actions.

**Sizing:**

- `default`: `h-11 px-6`
- `sm`: `h-9 px-4`
- `lg`: `h-14 px-8 text-base` (ideal for hero sections)

---

## 5. Form Styles

Inputs and forms should feel effortless and premium.

- **Inputs/Selects:** Height `h-12` (taller than standard), rounded `md` (0.375rem).
- **Borders:** Subtle `border-input`, transitioning on focus to a thin primary ring (`focus-visible:ring-1 focus-visible:ring-ring focus-visible:border-ring`).
- **Background:** Solid `bg-background` to stand out slightly on cards, or solid `bg-card` to stand out on the page.
- **Labels:** Small, medium weight (`text-sm font-medium`), spaced `mb-2` from the input.

---

## 6. Card Styles

Cards contain content seamlessly without feeling boxed in.

- **Border Radius:** `rounded-xl` for a modern, approachable feel.
- **Shadow:** `shadow-sm`, transitioning to `shadow-md` on hover (`transition-all duration-300`).
- **Border:** Extremely subtle `border-border` (often just 1px of a very light gray).
- **Padding:** Generous internal padding (`p-6` to `p-8`).

---

## 7. Container System

Defined in `@layer components` in `globals.css` to ensure consistent widths and padding.

- **`.container-shell`**: Max-width of `1400px`. The standard wrapper for almost all pages. Provides standard horizontal padding (`px-4 md:px-8 lg:px-12`).
- **`.container-reading`**: Max-width of `768px`. Ideal for blog posts, product descriptions, and focused forms (like checkout).

---

## 8. Section Layouts

Defined in `@layer components` to create a rhythm to the page.

- **`.section-padding`**: The default vertical spacing for major page sections (`py-16 md:py-24 lg:py-32`).
- **`.section-padding-sm`**: Tighter vertical spacing for related blocks of content (`py-8 md:py-12 lg:py-16`).
- **`.section-shell`**: Combines `.container-shell` and `.section-padding` for the standard page block.

---

## 9. Mobile Responsive Rules

- **Typography Scaling:** Always scale headers down for mobile. (e.g., `text-4xl md:text-5xl lg:text-6xl`).
- **Stacking:** Use `flex-col md:flex-row` for side-by-side elements. Ensure `gap-8` on mobile to prevent elements from feeling cramped.
- **Touch Targets:** Buttons and inputs are minimum `h-11` to ensure easy tapping on mobile devices.
- **Hidden Scrollbars:** Use the custom utility `.hide-scrollbar` for horizontal scrolling product carousels or category tags on mobile.
- **Padding:** Container padding reduces to `px-4` on mobile devices to maximize usable screen space.
