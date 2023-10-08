const jokesUrl = "https://v2.jokeapi.dev/joke/Any"

interface jokesResponse {
  error: boolean
  category: string
  type: string
  setup: string
  delivery: string
  flags: {
    nsfw: boolean
    religious: boolean
    political: boolean
    racist: boolean
    sexist: boolean
    explicit: boolean
  }
  safe: boolean
  id: number
  lang: string
}

export const fetchJokes = async (): Promise<jokesResponse> => {
  const response = await fetch(jokesUrl)
  const data = await response.json()
  return data
}
