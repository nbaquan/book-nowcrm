# book.nowCRM

A simple bus booking platform for Cameroon built with Next.js and Tailwind CSS.

## Overview

This MVP lets users:
- search bus routes
- compare agencies and prices
- book tickets
- pay via MTN/Orange/Airtel or card
- view trip history
- access agency and admin dashboard pages

## Tech stack

- Frontend: Next.js + React + Tailwind CSS
- Backend: Next.js API routes (MVP)
- Database: PostgreSQL schema in `docs/database-schema.md`
- Payment guidance: Paystack and mobile money integration instructions included

## Project structure

```bash
book-nowcrm/
├── app/
│   ├── admin/
│   ├── agency/
│   ├── api/
│   ├── booking/
│   ├── confirmation/
│   ├── dashboard/
│   ├── search/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── docs/
│   └── database-schema.md
├── lib/
│   ├── data.ts
│   └── points.ts
├── .env.example
├── .gitignore
├── next-env.d.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Create the local environment file:

```bash
cp .env.example .env.local
```

3. Start the development server:

```bash
npm run dev
```

4. Open `http://localhost:3000`

## Environment variables

```env
NEXT_PUBLIC_APP_NAME=book.nowCRM
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Reward points model

This MVP uses a reward points system for discounts and future benefits. The formula is simple:

- A user earns around 2% of the ticket amount in reward points
- Example: 20,000 FCFA ticket = 400 reward points
- Points help unlock future discounts, special offers, or priority trip perks

## Payment options

This MVP includes mock payment flows for:
- MTN Mobile Money
- Orange Money
- Airtel Money
- Card payment

For production, connect a secure provider like Paystack or a local payment gateway.

## Security notes

- Use HTTPS in production
- Never store raw payment credentials in the frontend
- Validate server-side payment callbacks
- Add authentication and authorization before production deployment

## Future roadmap

- Real payment provider integration
- Real route and seat management
- User authentication
- Agency login flow
- SMS/WhatsApp booking notifications
- Real database and deployment pipeline
