import { createAgent, openai } from "@inngest/agent-kit";
import Sandbox from "e2b";
import { inngest } from "./client";
import { getSandbox } from "./utils";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },

  async ({ event, step }) => {
    /**
     * 1️⃣ Create Sandbox from YOUR template
     * Replace with your real template name if different
     */
    const sandboxId = await step.run("create-sandbox", async () => {
      const sandbox = await Sandbox.create("99zvd852easczr4aekz8");
      return sandbox.sandboxId;
    });

    /**
     * 2️⃣ Create AI Agent (Groq via OpenAI adapter)
     */
    const codeAgent = createAgent({
      name: "code-agent",
      system:
        "You are an expert Next.js developer. You write clean, simple, maintainable Next.js + React code using modern App Router and shadcn/ui.",
      model: openai({
        model: "llama-3.3-70b-versatile",
        apiKey: process.env.GROQ_API_KEY!,
        baseUrl: "https://api.groq.com/openai/v1",
        // step, // ⭐ keep this for Inngest observability
      }),
    });

    /**
     * 3️⃣ Generate Code from AI
     */
    const { output } = await codeAgent.run(
      `Write a Next.js component based on this request: ${event.data.value}`
    );

    /**
     * 4️⃣ Get Sandbox URL
     */
    const sandboxUrl = await step.run("get-sandbox-url", async () => {
      const sandbox = await getSandbox(sandboxId);
      const host = sandbox.getHost(3000);
      return `https://${host}`;
    });

    /**
     * 5️⃣ Return results
     */
    return {
      output,
      sandboxUrl,
      sandboxId,
    };
  }
);

// import { createAgent, openai } from "@inngest/agent-kit";
// import { inngest } from "./client";

// export const helloWorld = inngest.createFunction(
//   { id: "hello-world" },
//   { event: "test/hello.world" },
//   async ({ event }) => {
//     const codeAgent = createAgent({
//       name: "code-agent",
//       system:
//         "You are an expert next.js developer. You write readable, maintainable code, You write simple Next.js & React snippets.",

//       model: openai({
//         model: "llama-3.3-70b-versatile", // Groq model
//         apiKey: process.env.GROQ_API_KEY,
//         baseUrl: "https://api.groq.com/openai/v1",
//         // step, // keep this for Inngest observability
//       }),
//     });

//     const { output } = await codeAgent.run(
//       `Write the following snippet: ${event.data.value}`
//     );

//     return { output };
//   }
// );

// import { createAgent, openai } from "@inngest/agent-kit";
// import Sandbox from "e2b";
// import { inngest } from "./client";

// export const helloWorld = inngest.createFunction(
//   { id: "hello-world" },
//   { event: "test/hello.world" },
//   async ({ event, step }) => {
//     const sandboxId = await step.run("get-sandbox-id", async () => {
//       const sandbox = await Sandbox.create("vibe-nextjs-test-2");
//       return sandbox.sandboxId;
//     });
//     const codeAgent = createAgent({
//       name: "code-agent",
//       system:
//         "You are an expert next.js developer. You write readable, maintainable code, You write simple Next.js & React snippets.",

//       model: openai({
//         model: "llama-3.3-70b-versatile", // Groq model
//         apiKey: process.env.GROQ_API_KEY,
//         baseUrl: "https://api.groq.com/openai/v1",
//         // step, // keep this for Inngest observability
//       }),
//     });

//     const { output } = await codeAgent.run(
//       `Write the following snippet: ${event.data.value}`
//     );

//     const sandboxUrl = await step.run("get-sandbox-url", async () => {
//       const sandbox = await getSandbox(sandboxId);
//       const host = sandbox.getHost(3000);
//       return `https://${host}`;
//     });
//     return { output, sandboxUrl };
//   }
// );

// export async function getSandbox(sandboxId: string) {
//   const sandbox = await Sandbox.connect(sandboxId);
//   return sandbox;
// }
