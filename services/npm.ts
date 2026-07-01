export interface NpmPackage {
  package: {
    name: string
    description: string
    version: string
    date: string
    links: {
      npm: string
      homepage?: string
      repository?: string
    }
  }
}

export interface NpmSearchResult {
  objects: NpmPackage[]
  total: number
}

export async function requestNpm(): Promise<NpmSearchResult> {
  const res = await fetch(
    'https://registry.npmjs.com/-/v1/search?text=eslint-plugin-acessibility&author=otavio-sanchez',
    { next: { revalidate: 3600 } }
  )
  if (!res.ok) return { objects: [], total: 0 }
  return res.json()
}
