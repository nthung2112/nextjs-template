# Next.js Template

A modern, high-performance web application template built with Next.js 15, Bun, and Drizzle ORM.

## 🚀 Tech Stack

- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
- **Runtime & Package Manager:** [Bun](https://bun.sh/)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team/)
- **Database:** [PostgreSQL](https://www.postgresql.org/) (via `postgres` and `pg`)
- **Authentication:** [Better Auth](https://www.better-auth.com/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- **Data Visualization:** [Recharts](https://recharts.org/)
- **Tables:** [TanStack Table](https://tanstack.com/table/latest)
- **Others:** Lucide React, Zod, Sonner, Vaul

## 🛠️ Getting Started

### Prerequisites

- [Install Bun](https://bun.sh/docs/installation)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nthung2112/nextjs-template.git
   cd nextjs-template
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Set up environment variables:
   Copy `.env.example` to `.env` and fill in the values:
   ```bash
   cp .env.example .env
   ```

### Database Setup

1. Generate migrations:

   ```bash
   bun run db:generate
   ```

2. Push changes to database:

   ```bash
   bun run db:push
   ```

3. Open Drizzle Studio to manage data:
   ```bash
   bun run db:studio
   ```

### Running the App

```bash
bun run dev
```

The app will be available at `http://localhost:3000`.

## 📁 Project Structure

- `app/`: Next.js App Router pages and layouts.
- `components/`: Reusable UI components (including `ui/` for shadcn).
- `db/`: Database schema and configuration.
- `lib/`: Utility functions and shared logic.
- `hooks/`: Custom React hooks.
- `public/`: Static assets.
- `drizzle/`: Generated migrations.

## 📜 Scripts

- `bun run dev`: Start development server.
- `bun run build`: Build production application.
- `bun run start`: Start production server.
- `bun run lint`: Run ESLint.
- `bun run format`: Format code with Prettier.
- `bun run db:*`: Drizzle ORM commands for database management.
