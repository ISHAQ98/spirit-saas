import { createAgent, openai } from "@inngest/agent-kit";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
    const codeAgent = createAgent({
      name: "code-agent",
      system:
        "You are an expert next.js developer. You write readable, maintainable code, You write simple Next.js & React snippets.",

      model: openai({
        model: "llama-3.3-70b-versatile", // Groq model
        apiKey: process.env.GROQ_API_KEY,
        baseUrl: "https://api.groq.com/openai/v1",
        // step, // keep this for Inngest observability
      }),
    });

    const { output } = await codeAgent.run(
      `Write the following snippet: ${event.data.value}`
    );

    return { output };
  }
);
