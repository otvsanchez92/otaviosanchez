'use client'
import React, { useState, useEffect } from 'react'
import { Menu } from '../menu'
import { SocialNetworks } from '../social-networks'
import { Banner } from '../banner'
import { About } from '../about'
import { Infos } from '../infos'
import { Contact } from '../contact'
import { Footer } from '../footer'
import { Content } from '../content'
import { LoadingPage } from '../loading-page'
import calcAge from '../../utils/age'
import type { GitHubRepo } from '../../services/github'
import type { NpmPackage } from '../../services/npm'

interface HomeClientProps {
  githubProjects: GitHubRepo[]
  npmProjects: NpmPackage[]
}

export default function HomeClient({ githubProjects, npmProjects }: HomeClientProps) {
  const [activeEffect, setActiveEffect] = useState(true)

  useEffect(() => {
    const changeBackground = () => {
      const height = window.innerHeight / 2
      setActiveEffect(window.scrollY > height)
    }
    changeBackground()
    window.addEventListener('scroll', changeBackground)
    return () => window.removeEventListener('scroll', changeBackground)
  }, [])

  return (
    <>
      <LoadingPage />
      <Content activeEffect={activeEffect}>
        <main>
          <Menu
            items={[
              { text: 'Eu', link: '/' },
              { text: 'Sobre', link: '#sobre' },
              { text: 'Contato', link: '#contato' }
            ]}
            title="OS."
          />
          <SocialNetworks
            items={[
              { icon: 'linkedin', link: 'https://www.linkedin.com/in/ot%C3%A1vio-sanchez/' },
              { icon: 'github', link: 'https://github.com/otavio-sanchez' }
            ]}
          />
          <Banner
            title="Web"
            infos={
              <div>
                <p>Olá, é um prazer te conhecer!</p>
                <p>Me chamo Otávio e seja bem-vindo ao meu site!</p>
              </div>
            }
          />
          <About
            title="Quem sou?"
            body={[
              'Sou desenvolvedor desde de 2013, possuo experiência com diversas tecnologias web e na criação de sites e sistemas web. Busco sempre estar conectado a novas tendências e inovações tecnológicas.',
              'Bacharel em Ciência e Tecnologia pela Universidade Federal do ABC, um curso multidisciplinar que me permitiu abrir a mente e a buscar novos horizontes através da tecnologia da informação.',
              `Atualmente tenho ${calcAge(new Date('1992-10-09'))} anos, moro em São Paulo, amo futebol, filmes, séries, animes e games.`
            ]}
          />
          <Infos
            titleProject="Alguns dos Meus Projetos"
            npmProjects={npmProjects}
            githubProjects={githubProjects}
          />
          <Footer>
            <Contact
              socialNetwork={[
                { icon: 'linkedin', link: 'https://www.linkedin.com/in/ot%C3%A1vio-sanchez/' },
                { icon: 'github', link: 'https://github.com/otavio-sanchez' }
              ]}
            />
          </Footer>
        </main>
      </Content>
    </>
  )
}
