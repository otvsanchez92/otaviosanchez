import React from 'react'

const SERVICES = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Desenvolvimento Web',
    description: 'Criação de sites, sistemas e aplicações web com React, Next.js e Node.js. Do protótipo ao deploy.',
    accent: '#5652CC',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10"/>
        <path d="M12 6v6l4 2"/>
        <path d="M22 2 12 12"/>
      </svg>
    ),
    title: 'Automação com IA',
    description: 'Criação de fluxos inteligentes com n8n e Claude AI para automatizar processos e aumentar produtividade.',
    accent: '#FC780B',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="0"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Produtos Digitais',
    description: 'Desenvolvimento de SaaS e produtos do zero. Desde a ideia até o produto no ar, escalável e bem construído.',
    accent: '#5652CC',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
    ),
    title: 'E-commerce',
    description: 'Desenvolvimento e otimização de lojas virtuais com experiência nos maiores marketplaces da América Latina.',
    accent: '#FC780B',
  },
]

export function Services() {
  return (
    <section id="servicos" className="w-screen py-20 bg-white relative">
      <div className="w-[90%] mx-auto max-w-[1280px]">
        <h3 className="m-0 text-[#5652CC] text-center font-semibold font-['PlexusSans-Bold',sans-serif] mb-14 text-base tracking-widest uppercase">
          O que eu faço
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#d8d8d8]">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group bg-white p-10 flex gap-6 hover:bg-[#f7f7f9] transition-colors duration-300"
            >
              {/* Icon */}
              <div
                className="flex-shrink-0 w-14 h-14 flex items-center justify-center"
                style={{ color: service.accent }}
              >
                {service.icon}
              </div>

              {/* Content */}
              <div>
                <h4
                  className="m-0 mb-3 font-['PlexusSans-Bold',sans-serif] text-base"
                  style={{ color: service.accent }}
                >
                  {service.title}
                </h4>
                <p className="m-0 text-[#555] font-['PlexusSans-ExtraLight',sans-serif] font-semibold text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Accent line on hover */}
              <div
                className="absolute bottom-0 left-0 w-0 h-[3px] group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: service.accent }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contato"
            className="inline-block bg-[#5652CC] !text-white px-10 py-4 font-['PlexusSans-Bold',sans-serif] text-sm tracking-wide hover:bg-[#33317a] transition-colors duration-300 no-underline"
          >
            Vamos conversar →
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
