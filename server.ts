import { fetchJokes } from "./jokes.ts"

Deno.serve(async (_req) => {
  const response = await fetchJokes()

  return new Response(JSON.stringify(response))
})
