# Project Context - Spirit SaaS (AI Website Builder)

## Project Overview

This is my second SaaS project, an AI-powered website/app builder inspired by a YouTube tutorial.  
I am building it as a **learning project** to strengthen my portfolio and land my first developer job.  
I am following the tutorial for guidance but replacing Prisma with **Drizzle ORM** for database operations.

The app allows generating full-stack applications from simple AI prompts, using programmable AI agents.

## Tech Stack

- **Frontend:** Next.js 16 + React 19
- **Styling:** Tailwind CSS v4 + Shadcn/ui
- **State & API:** tRPC + React Query for type-safe full-stack queries
- **Database:** Drizzle ORM + Neon (serverless Postgres)
- **Background Jobs:** Inngest
- **Authentication & Billing:** Clerk
- **AI Features:** OpenAI, Anthropic, Grok for code generation
- **Sandbox Execution:** E2B cloud sandboxes + Docker
- **Code Assistance:** CodeRabbit for AI-assisted PR reviews

## Features Implemented / Learning Goals

- AI agent-driven app and component generation
- Full-stack type-safe API using tRPC
- Database integration with Drizzle ORM and Neon
- Background job orchestration with Inngest
- Authentication and billing setup with Clerk
- Live previews and URL access for generated apps
- Experimenting with cloud sandboxes for safe code execution
- Learning Git workflow and AI-assisted PR reviews

## Notes

- Database tables are created via Drizzle Kit.
- Prisma from the original tutorial is replaced with Drizzle ORM for learning purposes.
- This project is **not production-ready** yet; focus is on learning and portfolio demonstration.
- I want Gemini CLI to remember this context for all future interactions in this project, e.g., when helping with coding, architecture explanations, or debugging.
