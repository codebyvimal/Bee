# Hunnybi

Production-ready MVP foundation for Hunnybi, a premium D2C honey and nuts snack brand.

## Installation Commands

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run typecheck
npm run lint
npm run format:check
npm run build
```

Format files:

```bash
npm run format
```

## Setup Instructions

1. Copy `.env.example` to `.env.local`.
2. Create a Supabase project.
3. Add Supabase values to `.env.local`.
4. Create a Cloudinary account and add Cloudinary values.
5. Add the WhatsApp phone number and UPI ID.
6. Run the database SQL from `DB_SCHEMA.md` in Supabase.
7. Create the first admin user in Supabase Auth.
8. Add a matching row in `profiles` with `role = 'admin'`.
9. Start the local app with `npm run dev`.

Required environment variables:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
NEXT_PUBLIC_WHATSAPP_PHONE=
NEXT_PUBLIC_UPI_ID=
```

## Folder Explanations

`app/`
Routes, layouts, metadata, sitemap, robots, and API endpoints. Public marketing pages live in `(marketing)`. Protected admin pages live in `admin/(protected)`.

`actions/`
Server actions for mutations such as auth, orders, and wholesale inquiries.

`components/`
Reusable UI, layout, admin, and form components. shadcn-style primitives live in `components/ui`.

`hooks/`
Client-side reusable React hooks.

`lib/`
Shared business logic and infrastructure: pricing rules, validation, formatting, environment access, Supabase clients, Cloudinary utilities, auth helpers, and rate limiting.

`styles/`
Design-system notes and future shared style files. Runtime theme variables are currently in `app/globals.css`.

`types/`
Shared TypeScript domain and database types.

`public/`
Static assets such as favicon, logos, and local images.

`DB_SCHEMA.md`
Supabase schema, indexes, triggers, RLS policies, and future ecommerce table plan.

`ARCHITECTURE.md`
System architecture, auth flow, order flow, API structure, admin dashboard architecture, and deployment architecture.

`TASKS.md`
Implementation phases and acceptance criteria.

## Architecture Notes

- Public pages are server-rendered for SEO and performance.
- Admin pages are protected server-side through Supabase Auth and the `profiles.role` value.
- Server actions own database writes and validation.
- Client components are used only where interactivity is required.
- Pricing and payment eligibility rules live in `lib/pricing.ts`, not inside page components.
- Cloudinary URL and signature helpers are isolated in `lib/cloudinary.ts`.
- Supabase browser, server, admin, and middleware clients are separated by runtime.
