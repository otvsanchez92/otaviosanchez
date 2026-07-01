'use client'
import React, { useEffect, useState } from 'react'
import type { GitHubRepo } from '../../services/github'
import type { NpmPackage } from '../../services/npm'
import formatDate from '../../utils/format-date'
import Projects from '../projects'

interface ProjectItem {
  link: string
  icon: string
  text?: string
  date: string
  title: string
}

interface Props {
  titleProject: string
  npmProjects: NpmPackage[]
  githubProjects: GitHubRepo[]
}

export function Infos({ titleProject, npmProjects, githubProjects }: Props) {
  const [projects, setProjects] = useState<ProjectItem[]>([])

  useEffect(() => {
    let npm: ProjectItem[] = []
    let github: ProjectItem[] = []

    if (npmProjects && npmProjects.length > 0) {
      npm = npmProjects.map((item) => ({
        link: item?.package?.links?.npm,
        icon: 'npm',
        text: item?.package?.description,
        date: formatDate(item?.package?.date),
        title: item?.package?.name
      }))
    }

    if (githubProjects && githubProjects.length > 0) {
      github = githubProjects
        .map((item) => ({
          link: item?.html_url,
          icon: 'github',
          date: formatDate(item?.pushed_at),
          title: item?.name,
          text: item?.description || undefined
        }))
        .sort((a, b) => {
          if (a.date < b.date) return 1
          if (a.date > b.date) return -1
          return 0
        })
    }

    const combined = npm.concat(github.slice(0, 7))
    setProjects(combined)
  }, [npmProjects, githubProjects])

  return (
    <section className="w-screen flex items-center py-12 bg-white">
      <div className="w-[90%] mx-auto max-w-[1280px] flex max-md:flex-col">
        <div className="w-full mx-auto">
          <h3 className="m-0 text-[#5652CC] text-center font-semibold font-['PlexusSans-Bold',sans-serif] p-0 mr-[30px] mb-4">
            {titleProject}
          </h3>
          <Projects items={projects} />
        </div>
      </div>
    </section>
  )
}

export default Infos
