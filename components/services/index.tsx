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
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: 'Consultoria Front-End',
    description: 'Revisão de arquitetura, performance e boas práticas para times que querem evoluir sua base de código.',
    accent: '#FC780B',
  },
]

export function Services() {
  return (
    <section id="servicos" className="w-screen py-20 bg-[#efefef] relative">
      <div className="w-[90%] mx-auto max-w-[1280px]">
        <h3 className="m-0 text-[#5652CC] text-center font-semibold font-['PlexusSans-Bold',sans-serif] mb-14 text-base tracking-widest uppercase">
          O que eu faço
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#d8d8d8]">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group bg-[#efefef] p-10 flex gap-6 hover:bg-white transition-colors duration-300"
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
            className="inline-block bg-[#5652CC] text-white px-10 py-4 font-['PlexusSans-Bold',sans-serif] text-sm tracking-wide hover:bg-[#33317a] transition-colors duration-300 no-underline"
          >
            Vamos conversar →
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
