# Hunnybi MVP Task Breakdown

## Phase 0: Planning And Foundations

### Goal

Create a maintainable production foundation before building UI features.

### Tasks

- [x] Read `PRD.md`.
- [x] Define architecture.
- [x] Define folder structure.
- [x] Define database schema.
- [ ] Create `.env.example`.
- [ ] Initialize Next.js 15 App Router with TypeScript.
- [ ] Configure TailwindCSS.
- [ ] Configure shadcn/ui component structure.
- [ ] Add ESLint and TypeScript checks.
- [ ] Add Supabase client helpers.
- [ ] Add Cloudinary remote image config.

### Acceptance Criteria

- Project starts locally with `npm run dev`.
- TypeScript is strict.
- Folder structure matches `ARCHITECTURE.md`.
- Environment variables are documented.

## Phase 1: Public Brand Website

### Goal

Build a premium, mobile-first D2C homepage that supports SEO and conversion.

### Tasks

- [ ] Create root layout with metadata.
- [ ] Add global design tokens.
- [ ] Build responsive navigation.
- [ ] Build hero section with strong product-first branding.
- [ ] Build product highlights section.
- [ ] Build Why Hunnybi section.
- [ ] Build product showcase section.
- [ ] Build delivery policy section.
- [ ] Build FAQ section.
- [ ] Build footer.
- [ ] Add floating WhatsApp button.
- [ ] Add Open Graph metadata.
- [ ] Add `sitemap.ts`.
- [ ] Add `robots.ts`.
- [ ] Add basic structured data for product/organization.

### Acceptance Criteria

- Mobile layout works first.
- Homepage content matches PRD sections.
- Lighthouse target path is clear: Performance 95+, SEO 95+, Accessibility 90+.
- No large client-only components for static content.

## Phase 2: Customer Order System

### Goal

Allow customers to place Nuts & Honey Box orders with correct payment rules.

### Tasks

- [ ] Create pricing constants.
- [ ] Create order rule helpers.
- [ ] Build quantity selector.
- [ ] Build district selector.
- [ ] Build order summary.
- [ ] Build customer information form.
- [ ] Show UPI only for orders below 25 boxes.
- [ ] Show COD option for orders of 25 boxes or more.
- [ ] Validate form client-side for usability.
- [ ] Validate form server-side for security.
- [ ] Create `createOrderAction`.
- [ ] Insert order into Supabase.
- [ ] Show confirmation state.
- [ ] Add WhatsApp handoff for payment confirmation.

### Acceptance Criteria

- Client cannot force invalid COD orders.
- Server recalculates total price.
- Invalid phone, address, district, and quantity are rejected.
- Orders appear in Supabase.

## Phase 3: Wholesale Inquiry System

### Goal

Capture wholesale leads and make them manageable from admin.

### Tasks

- [ ] Build wholesale section.
- [ ] Build wholesale inquiry form.
- [ ] Add server-side validation.
- [ ] Create `createWholesaleInquiryAction`.
- [ ] Insert inquiries into Supabase.
- [ ] Add success and error states.

### Acceptance Criteria

- Public form stores inquiry data.
- Invalid fields are rejected.
- Admin can later view the lead.

## Phase 4: Supabase Database And Security

### Goal

Create secure production database foundations.

### Tasks

- [ ] Create Supabase project.
- [ ] Run enum and table SQL.
- [ ] Run indexes.
- [ ] Run updated timestamp trigger.
- [ ] Enable Row Level Security.
- [ ] Add RLS policies.
- [ ] Create first admin auth user.
- [ ] Insert first admin profile row.
- [ ] Test public inserts.
- [ ] Test admin reads and updates.

### Acceptance Criteria

- Anonymous users can only create orders and inquiries.
- Anonymous users cannot read private order data.
- Authenticated non-admin users cannot read admin data.
- Admin users can read and update orders and inquiries.

## Phase 5: Admin Authentication

### Goal

Protect admin screens with Supabase Auth.

### Tasks

- [ ] Build `/admin/login`.
- [ ] Create login form.
- [ ] Create `signInAction`.
- [ ] Create `signOutAction`.
- [ ] Protect `/admin/*` routes.
- [ ] Check admin role from `profiles`.
- [ ] Add admin layout and navigation.

### Acceptance Criteria

- Non-authenticated users are redirected to login.
- Non-admin authenticated users cannot access dashboard.
- Admin session persists securely.
- Logout clears session.

## Phase 6: Admin Dashboard

### Goal

Give admins a simple operating dashboard for orders, payments, inquiries, and analytics.

### Tasks

- [ ] Build dashboard stat cards.
- [ ] Query total orders.
- [ ] Query paid revenue.
- [ ] Query pending payments.
- [ ] Query completed orders.
- [ ] Query wholesale lead count.
- [ ] Query total boxes sold.
- [ ] Query most active district.
- [ ] Query monthly orders and revenue.
- [ ] Add empty states.
- [ ] Add loading states where needed.

### Acceptance Criteria

- Dashboard loads server-side.
- Stats match database data.
- Admin can understand current business status quickly.

## Phase 7: Order Management

### Goal

Allow admins to manage orders without touching the database manually.

### Tasks

- [ ] Build `/admin/orders`.
- [ ] Add order table.
- [ ] Add search by customer name or phone.
- [ ] Add filter by payment status.
- [ ] Add filter by order status.
- [ ] Add order status badge.
- [ ] Add payment status badge.
- [ ] Add inline update form.
- [ ] Add admin notes field.
- [ ] Create `updateOrderAction`.
- [ ] Add CSV export route.

### Acceptance Criteria

- Admin can mark orders paid or unpaid.
- Admin can move orders through fulfillment statuses.
- Admin can add notes.
- Admin can export orders.

## Phase 8: Inquiry Management

### Goal

Allow admins to manage wholesale leads.

### Tasks

- [ ] Build `/admin/inquiries`.
- [ ] Add inquiry table.
- [ ] Add lead status badge.
- [ ] Add contact link for WhatsApp.
- [ ] Add admin notes field.
- [ ] Create `updateInquiryAction`.
- [ ] Add filters by lead status.

### Acceptance Criteria

- Admin can view all wholesale inquiries.
- Admin can update lead notes and status.
- Admin can contact leads quickly.

## Phase 9: Optimization And Accessibility

### Goal

Reach production quality targets before launch.

### Tasks

- [ ] Run TypeScript check.
- [ ] Run linting.
- [ ] Test mobile layout.
- [ ] Test keyboard navigation.
- [ ] Check color contrast.
- [ ] Add accessible labels to all form controls.
- [ ] Optimize images.
- [ ] Confirm no unnecessary client components.
- [ ] Confirm metadata and sitemap output.
- [ ] Run Lighthouse locally or in Vercel preview.

### Acceptance Criteria

- Performance target: 95+.
- SEO target: 95+.
- Accessibility target: 90+.
- Forms are usable by keyboard and screen reader users.

## Phase 10: Deployment

### Goal

Launch safely on free tier services.

### Tasks

- [ ] Create production Supabase project.
- [ ] Run schema in production.
- [ ] Create production admin user.
- [ ] Create Cloudinary folders.
- [ ] Add Vercel environment variables.
- [ ] Deploy to Vercel preview.
- [ ] Test order submission on preview.
- [ ] Test wholesale inquiry on preview.
- [ ] Test admin login on preview.
- [ ] Deploy to production.
- [ ] Configure production domain.
- [ ] Submit sitemap to Google Search Console.

### Acceptance Criteria

- Production site is live.
- Public users can submit orders and inquiries.
- Admin can manage submitted data.
- Environment secrets are not committed.

## Phase 11: Future Ecommerce Expansion

### Add Later

- Customer accounts.
- Multi-product catalog.
- Cart and checkout.
- Razorpay or Cashfree payment gateway.
- Payment webhooks.
- Payment screenshots through Cloudinary.
- Inventory management.
- Delivery tracking.
- Automated invoices.
- Coupons.
- Subscriptions.
- Referral system.
- AI chatbot support.

### Expansion Rule

Before adding each future feature, create the database table and service boundary first, then build UI on top of that boundary.

