export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  stargazers_count: number
  language: string | null
  created_at: string
  updated_at: string
  pushed_at: string
  topics: string[]
  fork: boolean
  private: boolean
}

export async function requestGitHub(): Promise<GitHubRepo[]> {
  const res = await fetch('https://api.github.com/users/otavio-sanchez/repos', {
    next: { revalidate: 3600 }
  })
  if (!res.ok) return []
  return res.json()
}
