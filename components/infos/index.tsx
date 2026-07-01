import React from 'react'
import Image from 'next/image'

const MY_PROJECTS = [
  {
    link: 'https://listadolar.com.br/',
    title: 'Lista do Lar',
    description: 'Organize por cômodo o que precisa comprar para sua casa. Controle gastos e acompanhe o progresso.',
    thumbnail: '/images/projects/listadolar.jpg',
    favicon: 'https://www.google.com/s2/favicons?domain=listadolar.com.br&sz=32',
    accent: '#C48B3C',
  },
  {
    link: 'https://octaverse.com.br/',
    title: 'OctaVerse',
    description: 'Painel administrativo completo para negócios de impressão 3D. Produtos, estoque, vendas e relatórios integrados.',
    thumbnail: '/images/projects/octaverse.jpg',
    favicon: 'https://www.google.com/s2/favicons?domain=octaverse.com.br&sz=32',
    accent: '#5652CC',
  },
  {
    link: 'https://www.neckchart.com/',
    title: 'NeckChart',
    description: 'Editor de tablatura, diagramas de escala e visualizador de braço para guitarra, baixo e ukulele.',
    thumbnail: '/images/projects/neckchart.jpg',
    favicon: 'https://www.google.com/s2/favicons?domain=neckchart.com&sz=32',
    accent: '#FC780B',
  },
]

interface Props {
  titleProject: string
}

export function Infos({ titleProject }: Props) {
  return (
    <section className="w-screen py-20 bg-white">
      <div className="w-[90%] mx-auto max-w-[1280px]">
        <h3 className="m-0 text-[#5652CC] text-center font-semibold font-['PlexusSans-Bold',sans-serif] mb-14 text-base tracking-widest uppercase">
          {titleProject}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MY_PROJECTS.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white no-underline overflow-hidden"
            >
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* accent bar on top */}
                <div
                  className="absolute top-0 left-0 w-full h-[3px] z-10"
                  style={{ backgroundColor: project.accent }}
                />
              </div>

              {/* Content */}
              <div className="p-6 border-b-[3px] border-transparent group-hover:border-[#5652CC] transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <img
                    src={project.favicon}
                    alt=""
                    width={16}
                    height={16}
                  />
                  <span
                    className="font-['PlexusSans-Bold',sans-serif] text-sm tracking-wide uppercase"
                    style={{ color: project.accent }}
                  >
                    {project.title}
                  </span>
                </div>

                <p className="text-[#333] font-['PlexusSans-ExtraLight',sans-serif] font-semibold text-sm leading-relaxed m-0">
                  {project.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs text-[#A3A9D0] group-hover:text-[#5652CC] transition-colors duration-300">
                  Visitar site
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Infos
