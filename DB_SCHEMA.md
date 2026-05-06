# Hunnybi Database Schema

## 1. Database Approach

The MVP uses Supabase PostgreSQL with Row Level Security. Supabase Auth stores login credentials. Application tables store business data.

Design goals:

- Simple enough for a beginner to maintain.
- Clear enough for admin dashboard queries.
- Ready for future ecommerce features like products, online payments, inventory, and customer accounts.
- Safe for free tier usage by keeping tables small, indexed, and query-friendly.

## 2. Entity Overview

```text
auth.users
  |
  | 1:1
  v
profiles

orders
  |
  | 1:many
  v
order_notes

wholesale_inquiries
  |
  | 1:many
  v
inquiry_notes
```

## 3. Enum Types

### `user_role`

- `admin`
- `customer`

### `payment_status`

- `unpaid`
- `verification_pending`
- `paid`
- `refunded`

### `order_status`

- `pending`
- `paid`
- `processing`
- `shipped`
- `delivered`
- `cancelled`

### `payment_method`

- `upi`
- `cod`
- `razorpay`
- `cashfree`

### `lead_status`

- `new`
- `contacted`
- `qualified`
- `converted`
- `closed`

## 4. Tables

### `profiles`

Stores user profile and role information for Supabase Auth users.

| Column | Type | Notes |
|---|---|---|
| `id` | `uuid` | Primary key, references `auth.users(id)` |
| `name` | `text` | User display name |
| `phone` | `text` | Optional phone number |
| `role` | `user_role` | `admin` or `customer` |
| `created_at` | `timestamptz` | Created timestamp |
| `updated_at` | `timestamptz` | Updated timestamp |

### `orders`

Stores customer orders for the Nuts & Honey Box.

| Column | Type | Notes |
|---|---|---|
| `id` | `uuid` | Primary key |
| `customer_name` | `text` | Customer full name |
| `phone` | `text` | 10-digit phone number |
| `address` | `text` | Delivery address |
| `district` | `text` | Delivery district |
| `quantity` | `integer` | Number of boxes |
| `price_per_box` | `integer` | Snapshot price at order time |
| `total_price` | `integer` | Server-calculated total |
| `payment_status` | `payment_status` | Manual payment tracking |
| `order_status` | `order_status` | Fulfillment tracking |
| `payment_method` | `payment_method` | UPI or COD in MVP |
| `payment_reference` | `text` | Optional UPI reference or future gateway id |
| `payment_screenshot_url` | `text` | Optional future Cloudinary URL |
| `admin_notes` | `text` | Latest internal note summary |
| `created_at` | `timestamptz` | Created timestamp |
| `updated_at` | `timestamptz` | Updated timestamp |

### `wholesale_inquiries`

Stores wholesale leads from the public website.

| Column | Type | Notes |
|---|---|---|
| `id` | `uuid` | Primary key |
| `name` | `text` | Contact person |
| `business_name` | `text` | Business name |
| `phone` | `text` | 10-digit phone number |
| `quantity_needed` | `text` | Requested quantity |
| `monthly_volume` | `text` | Optional monthly volume |
| `notes` | `text` | Public form notes |
| `lead_status` | `lead_status` | Admin lead status |
| `admin_notes` | `text` | Latest internal note summary |
| `created_at` | `timestamptz` | Created timestamp |
| `updated_at` | `timestamptz` | Updated timestamp |

### `order_notes`

Stores a history of internal admin notes for orders.

| Column | Type | Notes |
|---|---|---|
| `id` | `uuid` | Primary key |
| `order_id` | `uuid` | References `orders(id)` |
| `note` | `text` | Internal note |
| `created_by` | `uuid` | References `auth.users(id)` |
| `created_at` | `timestamptz` | Created timestamp |

### `inquiry_notes`

Stores a history of internal admin notes for wholesale leads.

| Column | Type | Notes |
|---|---|---|
| `id` | `uuid` | Primary key |
| `inquiry_id` | `uuid` | References `wholesale_inquiries(id)` |
| `note` | `text` | Internal note |
| `created_by` | `uuid` | References `auth.users(id)` |
| `created_at` | `timestamptz` | Created timestamp |

## 5. MVP SQL Schema

```sql
create extension if not exists "pgcrypto";

create type public.user_role as enum ('admin', 'customer');
create type public.payment_status as enum ('unpaid', 'verification_pending', 'paid', 'refunded');
create type public.order_status as enum ('pending', 'paid', 'processing', 'shipped', 'delivered', 'cancelled');
create type public.payment_method as enum ('upi', 'cod', 'razorpay', 'cashfree');
create type public.lead_status as enum ('new', 'contacted', 'qualified', 'converted', 'closed');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text not null,
  phone text,
  role public.user_role not null default 'customer',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.orders (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null,
  phone text not null,
  address text not null,
  district text not null,
  quantity integer not null check (quantity > 0),
  price_per_box integer not null check (price_per_box > 0),
  total_price integer not null check (total_price > 0),
  payment_status public.payment_status not null default 'verification_pending',
  order_status public.order_status not null default 'pending',
  payment_method public.payment_method not null default 'upi',
  payment_reference text,
  payment_screenshot_url text,
  admin_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint orders_total_price_check check (total_price = quantity * price_per_box),
  constraint orders_cod_quantity_check check (
    payment_method <> 'cod' or quantity >= 25
  )
);

create table public.wholesale_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  business_name text not null,
  phone text not null,
  quantity_needed text not null,
  monthly_volume text,
  notes text,
  lead_status public.lead_status not null default 'new',
  admin_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.order_notes (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  note text not null,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

create table public.inquiry_notes (
  id uuid primary key default gen_random_uuid(),
  inquiry_id uuid not null references public.wholesale_inquiries(id) on delete cascade,
  note text not null,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);
```

## 6. Indexes

```sql
create index orders_created_at_idx on public.orders (created_at desc);
create index orders_phone_idx on public.orders (phone);
create index orders_status_idx on public.orders (order_status, payment_status);
create index orders_district_idx on public.orders (district);

create index wholesale_inquiries_created_at_idx on public.wholesale_inquiries (created_at desc);
create index wholesale_inquiries_phone_idx on public.wholesale_inquiries (phone);
create index wholesale_inquiries_status_idx on public.wholesale_inquiries (lead_status);

create index order_notes_order_id_idx on public.order_notes (order_id);
create index inquiry_notes_inquiry_id_idx on public.inquiry_notes (inquiry_id);
```

## 7. Updated Timestamp Trigger

```sql
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_set_updated_at
before update on public.profiles
for each row execute function public.set_updated_at();

create trigger orders_set_updated_at
before update on public.orders
for each row execute function public.set_updated_at();

create trigger wholesale_inquiries_set_updated_at
before update on public.wholesale_inquiries
for each row execute function public.set_updated_at();
```

## 8. Admin Helper Function

```sql
create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1
    from public.profiles
    where id = auth.uid()
      and role = 'admin'
  );
$$;
```

## 9. Row Level Security Policies

Enable RLS:

```sql
alter table public.profiles enable row level security;
alter table public.orders enable row level security;
alter table public.wholesale_inquiries enable row level security;
alter table public.order_notes enable row level security;
alter table public.inquiry_notes enable row level security;
```

Profiles:

```sql
create policy "Users can read own profile"
on public.profiles for select
to authenticated
using (id = auth.uid());

create policy "Admins can read all profiles"
on public.profiles for select
to authenticated
using (public.is_admin());

create policy "Admins can update profiles"
on public.profiles for update
to authenticated
using (public.is_admin())
with check (public.is_admin());
```

Orders:

```sql
create policy "Public can create orders"
on public.orders for insert
to anon, authenticated
with check (true);

create policy "Admins can read orders"
on public.orders for select
to authenticated
using (public.is_admin());

create policy "Admins can update orders"
on public.orders for update
to authenticated
using (public.is_admin())
with check (public.is_admin());
```

Wholesale inquiries:

```sql
create policy "Public can create wholesale inquiries"
on public.wholesale_inquiries for insert
to anon, authenticated
with check (true);

create policy "Admins can read wholesale inquiries"
on public.wholesale_inquiries for select
to authenticated
using (public.is_admin());

create policy "Admins can update wholesale inquiries"
on public.wholesale_inquiries for update
to authenticated
using (public.is_admin())
with check (public.is_admin());
```

Notes:

```sql
create policy "Admins can manage order notes"
on public.order_notes for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

create policy "Admins can manage inquiry notes"
on public.inquiry_notes for all
to authenticated
using (public.is_admin())
with check (public.is_admin());
```

## 10. Future Ecommerce Tables

Do not add these in the first MVP unless needed. The current schema leaves space for them.

| Future Table | Purpose |
|---|---|
| `products` | Multiple products and prices |
| `product_images` | Cloudinary image gallery |
| `inventory_movements` | Stock changes |
| `customers` | Customer accounts and profiles |
| `carts` | Multi-item carts |
| `cart_items` | Cart line items |
| `payments` | Gateway payment attempts and webhook states |
| `coupons` | Discounts |
| `subscriptions` | Recurring snack plans |
| `shipments` | Delivery tracking |
| `invoices` | Automated invoices |

