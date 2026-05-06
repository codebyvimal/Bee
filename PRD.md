# Hunnybi — Full Stack Website PRD
Version: 2.0
Project Type: Full Stack D2C Product Website
Prepared For: Hunnybi
Prepared By: Vimal

---

# 1. Product Overview

Hunnybi is a premium honey + nuts snack brand focused on:
- healthy snacking
- natural ingredients
- affordable wellness
- modern D2C branding

This project is NOT just a landing page.

This is a complete full-stack platform with:
- customer ordering
- admin management
- payment tracking
- wholesale inquiries
- analytics-ready architecture

The goal is to build:
- a fast modern brand website
- a scalable ordering system
- an admin dashboard for order management
- a future-ready commerce foundation

---

# 2. Product Goals

## Primary Goals
- Increase direct product orders
- Build trust through premium branding
- Manage customer orders efficiently
- Track payments and order status
- Enable wholesale inquiries

## Secondary Goals
- Mobile-first experience
- SEO visibility
- Easy future expansion
- Instagram/WhatsApp conversion funnel

---

# 3. User Types

## 3.1 Customers
Can:
- browse products
- place orders
- contact via WhatsApp
- submit wholesale inquiry

---

## 3.2 Admin
Can:
- login securely
- view all orders
- view paid/unpaid status
- update order status
- manage inquiries
- export order data
- see dashboard analytics

---

# 4. Core Features

# CUSTOMER FEATURES

---

## 4.1 Homepage

### Sections
- Navigation
- Hero section
- Product highlights
- Why Hunnybi
- Product showcase
- Delivery policy
- Wholesale inquiry
- FAQ
- Footer

---

## 4.2 Product Ordering System

### Product
Nuts & Honey Box

### Features
- quantity selector
- pricing calculation
- delivery district selection
- customer information form
- order summary

### Customer Fields
- Full Name
- Phone Number
- Address
- District
- Quantity
- Payment Method

---

## 4.3 Order Rules

### Orders Below 25 Boxes
- prepaid only

### Orders Above 25 Boxes
- COD available

### Logic
System should automatically:
- show/hide COD
- calculate totals
- display delivery notes

---

## 4.4 Payment System

### Phase 1 Recommendation
Simple payment verification.

Preferred:
- UPI QR
- manual payment verification

Why:
- faster launch
- lower complexity
- lower payment gateway issues

### Future Upgrade
Online gateway:
- Razorpay
- Cashfree

---

## 4.5 WhatsApp Integration

### Required
Floating WhatsApp button.

### Actions
- direct order inquiry
- wholesale inquiry
- customer support

---

## 4.6 Wholesale Inquiry Form

### Fields
- Name
- Business Name
- Phone
- Required Quantity
- Monthly Volume
- Notes

### Submission
Stored in database + admin dashboard.

---

# ADMIN PANEL FEATURES

---

## 5.1 Admin Authentication

### Requirements
- secure login page
- JWT/session authentication
- encrypted passwords

### Admin Access
Only authorized admins.

---

## 5.2 Admin Dashboard

### Dashboard Stats
- total orders
- total revenue
- pending payments
- completed orders
- wholesale leads

---

## 5.3 Order Management

### Admin Can
- view all orders
- search orders
- filter by status
- mark as paid/unpaid
- mark as delivered
- update notes

### Order Statuses
- Pending
- Paid
- Processing
- Shipped
- Delivered
- Cancelled

---

## 5.4 Payment Tracking

### Admin Can See
- payment status
- payment screenshot (optional future)
- payment method
- order total
- pending payments

---

## 5.5 Inquiry Management

### Admin Can
- view wholesale inquiries
- contact businesses
- update inquiry notes

---

## 5.6 Analytics (Simple MVP)

### Show
- most active district
- total boxes sold
- monthly orders
- revenue overview

---

# 6. Database Design

# USERS TABLE

| Field | Type |
|---|---|
| id | UUID |
| name | string |
| phone | string |
| role | admin/customer |

---

# ORDERS TABLE

| Field | Type |
|---|---|
| id | UUID |
| customer_name | string |
| phone | string |
| address | text |
| district | string |
| quantity | integer |
| total_price | number |
| payment_status | enum |
| order_status | enum |
| payment_method | string |
| created_at | timestamp |

---

# WHOLESALE_INQUIRIES TABLE

| Field | Type |
|---|---|
| id | UUID |
| name | string |
| business_name | string |
| phone | string |
| quantity_needed | string |
| notes | text |
| created_at | timestamp |

---

# ADMIN_NOTES TABLE (Optional)

| Field | Type |
|---|---|
| id | UUID |
| order_id | relation |
| note | text |
| created_by | admin |
| created_at | timestamp |

---

# 7. Tech Stack Recommendation

## Frontend
Next.js 15

Why:
- SEO
- speed
- scalability
- server actions
- image optimization

---

## Styling
Tailwind CSS

---

## UI Components
shadcn/ui

---

## Backend
Next.js Full Stack App Router

No separate backend needed initially.

---

## Database
Supabase PostgreSQL

Why:
- free tier
- authentication
- realtime support
- storage support
- scalable enough

---

## Authentication
Supabase Auth

---

## Image Storage
Cloudinary

Why:
- image optimization
- CDN delivery
- easy uploads

---

## Deployment
Vercel

---

## Analytics
Plausible Analytics
OR
Google Analytics

---

# 8. Recommended Architecture

## Frontend
Next.js + Tailwind

## Backend Logic
Server Actions + API Routes

## Database
Supabase PostgreSQL

## Storage
Cloudinary

## Hosting
Vercel

---

# 9. Design System

## Design Goal
Premium minimalist D2C aesthetic.

Not:
- local store feeling
- cluttered ecommerce template

Should feel:
- modern
- healthy
- trustworthy
- premium

---

# 10. Visual Style Guide

## Primary Colors

### Honey Yellow
Use packaging yellow as primary accent.

### Background
Warm white / cream.

### Text
Near-black.

---

## Typography

### Headers
Use:
- Satoshi
- Inter
- General Sans

### Body
Clean sans-serif.

---

## UI Style
- rounded corners
- soft shadows
- floating product images
- large whitespace
- bold headlines

---

# 11. AI Asset Creation Instructions

These prompts are EXTREMELY important for AI-generated branding consistency.

---

# LOGO PROMPT

## Goal
Minimal premium modern honey brand logo.

## Prompt
"Minimal modern logo for a premium honey snack brand named Hunnybi. Use clean rounded typography, subtle bee-inspired iconography, premium wellness branding aesthetic, yellow and black color palette, flat vector style, modern D2C food startup look, simple, memorable, scalable."

---

# HERO IMAGE PROMPT

## Prompt
"Premium floating product shot of a yellow honey snack box on soft cream background, modern commercial lighting, soft shadows, luxury D2C food brand photography, highly detailed, minimal composition, premium ecommerce aesthetic."

---

# BACKGROUND TEXTURE PROMPT

## Prompt
"Soft abstract honey-inspired background texture with warm cream and subtle golden gradients, minimal modern branding aesthetic, clean luxury wellness style."

---

# ICON STYLE PROMPT

## Prompt
"Minimal line icons for healthy snack brand website, modern rounded icons, wellness aesthetic, black and honey yellow color accents."

---

# PRODUCT RENDER PROMPT

## Prompt
"Ultra realistic product render of honey and mixed nuts snack packaging floating in air with soft shadow, premium food photography lighting, modern ecommerce style."

---

# SOCIAL MEDIA BANNER PROMPT

## Prompt
"Modern D2C healthy snack advertisement poster for Hunnybi, premium minimal layout, floating honey product, bold typography, luxury wellness branding, Instagram-ready design."

---

# 12. UX Rules

## IMPORTANT

### Keep:
- sections short
- text minimal
- visuals large

### Avoid:
- overcrowding
- excessive animations
- long paragraphs
- too many colors

---

# 13. Performance Targets

## Lighthouse Goals
- Performance: 95+
- SEO: 95+
- Accessibility: 90+

---

# 14. Security Requirements

## Required
- rate limiting
- protected admin routes
- secure authentication
- environment variables
- server-side validation

---

# 15. SEO Requirements

## Keywords
- healthy honey snacks
- honey nuts
- premium honey snacks
- natural energy snacks
- honey snack Chennai

---

# 16. Future Features (Phase 2)

- customer accounts
- cart system
- online payments
- subscriptions
- delivery tracking
- order history
- referral system
- coupon system
- inventory management
- automated invoices
- AI chatbot support

---

# 17. AI Development Instructions

VERY IMPORTANT:

While generating code:
- prioritize mobile-first design
- maintain clean component architecture
- use reusable UI components
- optimize all images
- lazy load media
- avoid unnecessary dependencies
- prioritize SEO structure
- maintain consistent spacing system
- maintain accessibility standards

---

# 18. Folder Structure Recommendation

/app
/components
/lib
/actions
/hooks
/styles
/types
/public
/dashboard
/api

---

# 19. Recommended Development Order

## Phase 1
- setup
- homepage
- responsive UI

## Phase 2
- order system
- database integration

## Phase 3
- admin dashboard
- authentication

## Phase 4
- analytics
- optimization
- deployment

---

# 20. Final Product Philosophy

The website should feel like:
"A modern premium wellness startup."

Not:
"a small local business template."

The branding quality alone should increase perceived product value.
