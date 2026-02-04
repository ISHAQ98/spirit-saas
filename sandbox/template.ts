// /sandbox/template.ts
import { Template, waitForTimeout } from "e2b";

export const template = Template()
  // v2 API — no arguments allowed
  .fromBaseImage()

  // Environment variables inside sandbox
  .setEnvs({
    NODE_ENV: "development",
  })

  // Start command that prepares the Next.js environment
  .setStartCmd(
    `
echo "Starting Next.js sandbox..."

mkdir -p /home/user/app
cd /home/user/app

# Create pinned Next.js project (stable version)
npx --yes create-next-app@15.3.3 . --yes

# Install shadcn UI
npx --yes shadcn@2.6.3 init --yes -b neutral --force
npx --yes shadcn@2.6.3 add --all --yes

# Start dev server
npx next dev --turbopack
`,
    waitForTimeout(60_000)
  );
