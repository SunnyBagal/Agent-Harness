import { Provider } from "../types.ts";
import { createAnthropic } from "./anthropic.ts";
import { createOpenAICompt } from "./openai-compatible.ts";

const provider: Record<string, ()=> Provider> ={
  anthropic: createAnthropic,
  "anthropic-openai": () => createOpenAICompt("anthropic-openai", "url", process.env.ANTHROPIC_API_KEY!, "claude-sonnet-5"),
  "openai": () => createOpenAICompt("openai", "url", process.env.CHATGPT_API_KEY!, "gpt-5.6-sol")
}

export function getProvider(name: string): Provider{
  const create = provider
}