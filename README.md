# DENTRACK

Dental laboratory management built with Next.js, TypeScript and a PostgreSQL/Prisma data model. The interface includes real interactive case creation, tray reservation/release, workflow transitions, search, dashboard-derived statistics, calendar deadlines and financial analytics.

## Run locally

1. Copy `.env.example` to `.env` and set `DATABASE_URL`, `AUTH_SECRET`, `SEED_ADMIN_EMAIL`, and `SEED_ADMIN_PASSWORD`.
2. Install dependencies: `npm install`
3. Generate and migrate the production schema: `npx prisma generate` then `npx prisma migrate dev`.
4. Start: `npm run dev`

## Deployment

Use a Neon PostgreSQL connection string for `DATABASE_URL` in Vercel. Set `AUTH_SECRET` to a long random value; do not commit it. Use Vercel Blob (`BLOB_READ_WRITE_TOKEN`) for production file uploads rather than the server filesystem. Run Prisma migrations as part of the deployment workflow.

## Security checklist

Passwords are designed to be hashed server-side, access must be enforced by role on mutations, financial values use PostgreSQL decimals, and tray assignments should be made within a database transaction with an active-case uniqueness check.
