# Hunnybi System Architecture

## 1. Product Scope

Hunnybi is a premium D2C honey snack platform, not only a landing page. The MVP must support:

- A fast, mobile-first brand website.
- A simple product ordering flow for the Nuts & Honey Box.
- Manual UPI payment verification.
- Wholesale inquiry capture.
- A protected admin dashboard for order, payment, inquiry, and basic analytics management.
- A future-ready structure for carts, online payments, inventory, customer accounts, and subscriptions.

The architecture uses the simplest production-grade stack that fits the PRD:

- Next.js 15 App Router for frontend, backend routes, server actions, SEO, and deployment simplicity.
- TypeScript for strict domain contracts.
- TailwindCSS and shadcn/ui for reusable, accessible UI.
- Supabase PostgreSQL for database and authentication.
- Cloudinary for product and brand media.
- Vercel for hosting.

## 2. Architecture Principles

### Beginner Maintainable

- Keep each folder responsible for one concern.
- Keep UI components small and reusable.
- Keep business rules out of pages.
- Keep database access inside server-only modules and server actions.
- Use readable file names that describe product behavior, not technical cleverness.

### Scalable For Ecommerce

- The MVP has one product, but database tables should allow future products, payment screenshots, order notes, inventory, coupons, and payment gateways.
- Manual UPI verification is modeled as a payment state, so Razorpay or Cashfree can be added later without changing the customer order concept.
- Admin features are grouped by business area: dashboard, orders, inquiries, analytics.

### Free Tier Optimized

- Use Vercel serverless functions through Next.js server actions instead of a separate backend server.
- Use Supabase free tier for auth, PostgreSQL, and Row Level Security.
- Use Cloudinary free tier for optimized remote images.
- Avoid background workers in MVP. Admin actions and manual payment updates are synchronous.
- Avoid unnecessary dependencies and heavy client-side JavaScript.

### Clean Separation Of Concerns

- `app/` handles routing, layouts, SEO metadata, and page composition.
- `components/` handles reusable presentation and form UI.
- `actions/` handles mutations through server actions.
- `lib/` handles Supabase clients, validation, pricing rules, formatting, constants, env access, and rate limiting.
- `types/` handles shared TypeScript types.
- `supabase/` handles SQL schema, policies, and database documentation.

## 3. High-Level System Design

```text
Customer Browser
  |
  | HTTPS
  v
Vercel / Next.js 15 App Router
  |
  |-- Public pages
  |   |-- Homepage
  |   |-- Product/order section
  |   |-- Wholesale inquiry section
  |   |-- SEO metadata
  |
  |-- Server actions
  |   |-- createOrderAction
  |   |-- createWholesaleInquiryAction
  |   |-- updateOrderAction
  |   |-- updateInquiryAction
  |   |-- signInAction / signOutAction
  |
  |-- API routes
  |   |-- health check
  |   |-- future webhooks
  |   |-- future exports
  |
  v
Supabase
  |
  |-- Auth
  |-- PostgreSQL
  |-- Row Level Security
  |
  v
Admin Dashboard
```

## 4. Folder Structure

```text
/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx
│   │   └── layout.tsx
│   ├── admin/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── orders/
│   │   │   └── page.tsx
│   │   ├── inquiries/
│   │   │   └── page.tsx
│   │   └── analytics/
│   │       └── page.tsx
│   ├── api/
│   │   ├── health/
│   │   │   └── route.ts
│   │   ├── export-orders/
│   │   │   └── route.ts
│   │   └── webhooks/
│   │       └── payments/
│   │           └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   ├── robots.ts
│   └── sitemap.ts
│
├── actions/
│   ├── auth.ts
│   ├── orders.ts
│   └── wholesale.ts
│
├── components/
│   ├── admin/
│   │   ├── admin-header.tsx
│   │   ├── dashboard-stat-card.tsx
│   │   ├── order-status-form.tsx
│   │   └── inquiry-notes-form.tsx
│   ├── forms/
│   │   ├── order-form.tsx
│   │   ├── wholesale-form.tsx
│   │   └── login-form.tsx
│   ├── layout/
│   │   ├── site-header.tsx
│   │   ├── site-footer.tsx
│   │   └── whatsapp-button.tsx
│   ├── sections/
│   │   ├── hero-section.tsx
│   │   ├── product-highlights.tsx
│   │   ├── product-showcase.tsx
│   │   ├── why-hunnybi.tsx
│   │   ├── delivery-policy.tsx
│   │   ├── wholesale-section.tsx
│   │   └── faq-section.tsx
│   └── ui/
│       ├── button.tsx
│       ├── input.tsx
│       ├── select.tsx
│       ├── textarea.tsx
│       ├── card.tsx
│       └── badge.tsx
│
├── lib/
│   ├── supabase/
│   │   ├── browser.ts
│   │   ├── server.ts
│   │   └── admin.ts
│   ├── auth.ts
│   ├── constants.ts
│   ├── env.ts
│   ├── format.ts
│   ├── pricing.ts
│   ├── rate-limit.ts
│   ├── validation.ts
│   └── utils.ts
│
├── hooks/
│   └── use-order-total.ts
│
├── public/
│   ├── favicon.ico
│   ├── logo.svg
│   └── images/
│
├── styles/
│   └── tokens.css
│
├── supabase/
│   ├── schema.sql
│   ├── seed.sql
│   └── policies.sql
│
├── types/
│   ├── database.ts
│   ├── forms.ts
│   └── domain.ts
│
├── ARCHITECTURE.md
├── DB_SCHEMA.md
├── TASKS.md
├── PRD.md
└── .env.example
```

## 5. API Structure

The MVP should prefer server actions for app-owned form submissions. API routes are reserved for external systems, file exports, health checks, and future payment webhooks.

### Server Actions

| Action | File | Caller | Responsibility |
|---|---|---|---|
| `createOrderAction` | `actions/orders.ts` | Customer order form | Validate order, enforce payment rules, calculate total, insert order |
| `updateOrderAction` | `actions/orders.ts` | Admin order screen | Update payment status, order status, and admin notes |
| `createWholesaleInquiryAction` | `actions/wholesale.ts` | Wholesale form | Validate and insert wholesale inquiry |
| `updateInquiryAction` | `actions/wholesale.ts` | Admin inquiry screen | Update admin notes and lead status |
| `signInAction` | `actions/auth.ts` | Admin login form | Sign admin in through Supabase Auth |
| `signOutAction` | `actions/auth.ts` | Admin header | End Supabase session |

### API Routes

| Route | Method | Purpose | MVP Status |
|---|---|---|---|
| `/api/health` | `GET` | Deployment and uptime health check | Required |
| `/api/export-orders` | `GET` | Export admin order CSV | Required after admin list |
| `/api/webhooks/payments` | `POST` | Razorpay/Cashfree payment webhook | Future |
| `/api/cloudinary/signature` | `POST` | Signed upload support for payment screenshots/product assets | Future |

## 6. Authentication Flow

### Admin Login

1. Admin opens `/admin/login`.
2. Admin enters email and password.
3. `signInAction` calls Supabase Auth.
4. Supabase stores a secure HTTP-only session cookie.
5. The app redirects to `/admin`.
6. Admin routes check the session server-side before rendering protected data.

### Admin Route Protection

1. `app/admin/layout.tsx` gets the current Supabase user on the server.
2. If no user exists, redirect to `/admin/login`.
3. If a user exists, check `profiles.role = 'admin'`.
4. If the role is not admin, sign out or redirect to login.
5. Render admin navigation and the requested admin page.

### Why This Flow

- Supabase Auth handles password hashing and JWT/session security.
- Role data lives in the database, not in frontend code.
- Protected pages fetch data server-side, so private data is not exposed to public users.

## 7. Order Management Flow

### Customer Order Flow

1. Customer views the product section on the homepage.
2. Customer selects quantity and district.
3. UI calculates subtotal from `pricePerBox`.
4. If quantity is below 25 boxes, only UPI payment is available.
5. If quantity is 25 boxes or more, COD becomes available.
6. Customer enters name, phone, and address.
7. Server action validates all fields again.
8. Server action recalculates total. The client total is never trusted.
9. Order is inserted into Supabase.
10. Customer sees confirmation and payment instructions.
11. Customer sends UPI confirmation through WhatsApp.
12. Admin verifies payment manually and updates payment status.

### Payment State Flow

```text
UPI order:
verification_pending -> paid
                  \-> unpaid/cancelled if payment is not received

COD order:
unpaid -> paid after delivery/collection
```

### Order Status Flow

```text
pending -> paid -> processing -> shipped -> delivered
pending -> cancelled
paid -> cancelled
processing -> cancelled
```

The app should not make order status depend completely on payment status because COD orders can be valid while unpaid.

## 8. Admin Dashboard Architecture

### Admin Routes

| Page | Purpose |
|---|---|
| `/admin` | Dashboard summary and quick actions |
| `/admin/orders` | Search, filter, update orders |
| `/admin/inquiries` | Manage wholesale leads |
| `/admin/analytics` | Simple sales and district analytics |
| `/admin/login` | Public admin login page |

### Dashboard Data

The dashboard should load aggregated data server-side:

- Total orders.
- Total revenue from paid orders.
- Pending payment count.
- Completed order count.
- Wholesale lead count.
- Total boxes sold.
- Most active district.
- Current month orders and revenue.

### Admin Component Design

- Admin pages are server components by default.
- Only forms and interactive filters become client components.
- Tables are split into small parts: toolbar, row, empty state, status badge, update form.
- Dashboard cards use one reusable stat card component.
- Export logic stays in `/api/export-orders` to avoid placing CSV generation in the UI.

## 9. Deployment Architecture

### Environments

| Environment | Purpose | Services |
|---|---|---|
| Local | Development | Local Next.js, remote Supabase free project, Cloudinary dev folder |
| Preview | Pull request / branch testing | Vercel preview, same Supabase project or separate staging project |
| Production | Public site | Vercel production, Supabase production project, Cloudinary production folder |

### Required Environment Variables

```text
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
NEXT_PUBLIC_WHATSAPP_PHONE=
NEXT_PUBLIC_UPI_ID=
```

### Vercel

- Deploy Next.js app to Vercel.
- Set all environment variables in Vercel Project Settings.
- Enable preview deployments.
- Use Vercel Analytics only if needed; otherwise keep analytics lightweight.

### Supabase

- Create one Supabase project for MVP production.
- Run schema and policies from `supabase/schema.sql`.
- Enable Row Level Security.
- Create admin users through Supabase Auth dashboard.
- Add admin profile row with `role = 'admin'`.
- Back up schema before major database changes.

### Cloudinary

- Store product renders, social assets, and brand images.
- Use Cloudinary transformations for optimized sizes.
- Use Next.js `Image` with Cloudinary remote pattern.
- Keep original product assets organized by folder.

### SEO And Performance

- Use static/server-rendered public pages.
- Add `sitemap.ts`, `robots.ts`, Open Graph metadata, and structured product data.
- Keep forms progressively enhanced with server actions.
- Load images through Next.js image optimization.
- Avoid large animation libraries.
- Keep mobile layout first and progressively enhance for desktop.

