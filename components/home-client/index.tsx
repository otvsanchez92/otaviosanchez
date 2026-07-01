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
import { Services } from '../services'
import calcAge from '../../utils/age'

export default function HomeClient() {
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
              { text: 'Serviços', link: '#servicos' },
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
              'Engenheiro de Software Sênior com mais de 10 anos de experiência em desenvolvimento front-end e full stack. Ao longo da carreira, atuei em projetos de grande escala — de sistemas bancários a plataformas de e-commerce — entregando interfaces de alta performance com React.js, Node.js e TypeScript.',
              'Hoje desenvolvo funcionalidades estratégicas com foco em escalabilidade e experiência do usuário, e também crio automações inteligentes com IA para otimizar processos e aumentar produtividade.',
              `Bacharel em Ciência e Tecnologia pela UFABC, MBA em Negócios Digitais e E-commerce e atualmente cursando pós-graduação em User Experience. Tenho ${calcAge(new Date('1992-10-09'))} anos, moro em São Paulo e sou apaixonado por tecnologia, futebol, filmes, séries e games.`
            ]}
          />
          <Services />
          <Infos titleProject="Alguns dos Meus Projetos" />
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
