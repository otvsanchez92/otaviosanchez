import { requestGitHub } from '../services/github'
import { requestNpm } from '../services/npm'
import HomeClient from '../components/home-client'

export default async function HomePage() {
  const [githubProjects, npmResult] = await Promise.all([
    requestGitHub(),
    requestNpm()
  ])

  return (
    <HomeClient
      githubProjects={githubProjects}
      npmProjects={npmResult.objects || []}
    />
  )
}
