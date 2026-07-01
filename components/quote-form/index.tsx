'use client'
import React, { useState } from 'react'
import Menu from '../menu'

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormData {
  projectType: string
  features: string[]
  timeline: string
  budget: string
  name: string
  email: string
  whatsapp: string
  segment: string
  description: string
  references: string
}

const INITIAL_FORM: FormData = {
  projectType: '',
  features: [],
  timeline: '',
  budget: '',
  name: '',
  email: '',
  whatsapp: '',
  segment: '',
  description: '',
  references: '',
}

const SEGMENTS = [
  'Moda e Vestuário',
  'Beleza e Cosméticos',
  'Alimentação e Bebidas',
  'Saúde e Bem-estar',
  'Tecnologia e SaaS',
  'Educação e Cursos',
  'Serviços Profissionais',
  'E-commerce / Varejo',
  'Finanças e Contabilidade',
  'Imóveis',
  'Logística e Transporte',
  'Outro',
]

// ─── Data ─────────────────────────────────────────────────────────────────────

const PROJECT_TYPES = [
  {
    value: 'ecommerce',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
    ),
    title: 'E-commerce',
    description: 'Loja virtual com catálogo, carrinho, checkout e meios de pagamento.',
  },
  {
    value: 'sistema',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="0"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Sistema Web',
    description: 'Plataforma interna, painel ou dashboard para gestão do negócio.',
  },
  {
    value: 'landing',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>
    ),
    title: 'Landing Page',
    description: 'Página focada em conversão, geração de leads ou apresentação de produto.',
  },
  {
    value: 'automacao',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/><path d="M22 2 12 12"/>
      </svg>
    ),
    title: 'Automação / IA',
    description: 'Fluxos automáticos com n8n e inteligência artificial.',
  },
  {
    value: 'saas',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Produto Digital (SaaS)',
    description: 'Produto com planos de assinatura, membros e escala.',
  },
  {
    value: 'outro',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
    title: 'Outro',
    description: 'Tem uma ideia diferente? Me conta que encontramos o caminho.',
  },
]

const FEATURES = [
  { value: 'checkout', label: 'Checkout e pagamento online', description: 'Stripe, Mercado Pago, PagSeguro e similares.' },
  { value: 'auth', label: 'Login e cadastro de usuários', description: 'Autenticação com e-mail, Google ou redes sociais.' },
  { value: 'admin', label: 'Painel administrativo', description: 'Área restrita para gerenciar dados e conteúdo.' },
  { value: 'blog', label: 'Blog ou área de conteúdo', description: 'Publicação de artigos, notícias ou materiais.' },
  { value: 'marketplace', label: 'Integração com marketplaces', description: 'Shopee, Mercado Livre, Amazon, VTEX e outros.' },
  { value: 'seo', label: 'SEO e performance', description: 'Otimização para buscadores e carregamento rápido.' },
  { value: 'design', label: 'Design personalizado (UI/UX)', description: 'Identidade visual e experiência do usuário.' },
  { value: 'automacao', label: 'Automação de processos', description: 'Eliminar tarefas manuais com fluxos inteligentes.' },
  { value: 'integracoes', label: 'Integração com sistemas externos', description: 'APIs, ERPs, CRMs, e-mail, WhatsApp e mais.' },
]

const TIMELINES = [
  { value: 'urgente', label: 'Urgente', description: 'menos de 2 semanas' },
  { value: 'curto', label: 'Curto', description: '2 semanas a 1 mês' },
  { value: 'normal', label: 'Normal', description: '1 a 3 meses' },
  { value: 'indefinido', label: 'Sem prazo definido', description: '' },
]

const BUDGETS = [
  { value: 'ate1k', label: 'Até R$ 1.500' },
  { value: '1k3k', label: 'R$ 1.000 – R$ 3.000' },
  { value: '3k8k', label: 'R$ 3.000 – R$ 8.000' },
  { value: 'acima8k', label: 'Acima de R$ 8.000' },
  { value: 'naosei', label: 'Ainda não sei' },
]

const STEPS = [
  { n: 1, label: 'Tipo de projeto' },
  { n: 2, label: 'Funcionalidades' },
  { n: 3, label: 'Prazo e orçamento' },
  { n: 4, label: 'Seus dados' },
]

// ─── Message formatter ────────────────────────────────────────────────────────

function formatWhatsAppMessage(data: FormData): string {
  const projectLabel = PROJECT_TYPES.find((p) => p.value === data.projectType)?.title ?? data.projectType
  const featuresLabel = data.features.length > 0
    ? data.features.map((v) => FEATURES.find((f) => f.value === v)?.label ?? v).join(', ')
    : 'Nenhuma selecionada'
  const timelineLabel = TIMELINES.find((t) => t.value === data.timeline)?.label ?? data.timeline
  const budgetLabel = BUDGETS.find((b) => b.value === data.budget)?.label ?? data.budget

  let msg = `Olá Otávio! 👋 Tenho interesse em um projeto.\n\n`
  msg += `*Tipo:* ${projectLabel}\n`
  msg += `*Funcionalidades:* ${featuresLabel}\n`
  msg += `*Prazo:* ${timelineLabel}\n`
  msg += `*Orçamento:* ${budgetLabel}\n\n`
  msg += `*Nome:* ${data.name}\n`
  msg += `*E-mail:* ${data.email}\n`
  msg += `*WhatsApp:* ${data.whatsapp}\n`
  if (data.segment) msg += `\n*Segmento:* ${data.segment}`
  if (data.references.trim()) msg += `\n*Referências:*\n${data.references}`
  if (data.description.trim()) msg += `\n*Sobre o projeto:*\n${data.description}`
  return msg
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────

function Sidebar({ step, submitted }: { step: number; submitted: boolean }) {
  return (
    <aside className="bg-[#5652CC] text-white flex flex-col min-h-full max-md:hidden">
      <div className="p-10 flex flex-col gap-10 flex-1">
        {/* Title */}
        <div>
          <p className="m-0 mb-1 text-[#A3A9D0] text-xs font-['PlexusSans-Regular',sans-serif] tracking-widest uppercase">
            Otávio Sanchez
          </p>
          <h2 className="m-0 text-white font-['PlexusSans-Bold',sans-serif] text-2xl leading-tight">
            Cotação de<br />Projeto
          </h2>
        </div>

        {/* Steps */}
        {!submitted && (
          <div className="flex flex-col gap-1">
            {STEPS.map(({ n, label }) => {
              const done = step > n
              const active = step === n
              return (
                <div key={n} className="flex items-start gap-4">
                  {/* Line + dot */}
                  <div className="flex flex-col items-center">
                    <div
                      className={[
                        'w-7 h-7 flex items-center justify-center text-xs font-["PlexusSans-Bold",sans-serif] shrink-0 transition-all duration-300',
                        done ? 'bg-[#FC780B] text-white' : active ? 'bg-white text-[#5652CC]' : 'bg-[#33317a] text-[#A3A9D0]',
                      ].join(' ')}
                    >
                      {done ? (
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                          <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : n}
                    </div>
                    {n < STEPS.length && (
                      <div className={['w-px flex-1 my-1 min-h-[20px]', done ? 'bg-[#FC780B]' : 'bg-[#33317a]'].join(' ')} />
                    )}
                  </div>
                  {/* Label */}
                  <p
                    className={[
                      'm-0 pt-1 text-sm font-["PlexusSans-Regular",sans-serif] transition-all duration-300',
                      active ? 'text-white' : done ? 'text-[#A3A9D0]' : 'text-[#33317a]',
                    ].join(' ')}
                  >
                    {label}
                  </p>
                </div>
              )
            })}
          </div>
        )}

        {/* Info box */}
        <div className="mt-auto border border-[#33317a] p-5">
          <p className="m-0 mb-3 text-xs text-[#A3A9D0] font-['PlexusSans-Regular',sans-serif] uppercase tracking-widest">
            Por que eu?
          </p>
          <ul className="m-0 p-0 flex flex-col gap-2">
            {[
              '10+ anos de experiência',
              'React, Next.js e Node.js',
              'E-commerce nos maiores da América Latina',
              'Resposta em até 24h',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 list-none">
                <span className="text-[#FC780B] mt-[2px] shrink-0">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-[#A3A9D0] text-xs font-['PlexusSans-ExtraLight',sans-serif] font-semibold leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
}

// ─── Progress bar (mobile) ────────────────────────────────────────────────────

function ProgressBar({ step, total }: { step: number; total: number }) {
  return (
    <div className="w-full h-[3px] bg-[#e0e0e0] md:hidden">
      <div
        className="h-full bg-[#5652CC] transition-all duration-500"
        style={{ width: `${Math.round((step / total) * 100)}%` }}
      />
    </div>
  )
}

// ─── Step header ──────────────────────────────────────────────────────────────

function StepHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8 pb-6 border-b border-[#ebebeb]">
      <h3 className="m-0 mb-2 text-[#5652CC] font-['PlexusSans-Bold',sans-serif] text-xl leading-tight">
        {title}
      </h3>
      {subtitle && (
        <p className="m-0 text-[#888] text-sm font-['PlexusSans-ExtraLight',sans-serif] font-semibold leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}

// ─── Step 1 ───────────────────────────────────────────────────────────────────

function Step1({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <StepHeader title="Qual é o tipo do seu projeto?" subtitle="Escolha a opção que melhor descreve o que você precisa." />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#e8e8e8]">
        {PROJECT_TYPES.map((type) => {
          const selected = value === type.value
          return (
            <button
              key={type.value}
              type="button"
              onClick={() => onChange(type.value)}
              className={[
                'text-left p-5 transition-all duration-200 cursor-pointer group flex gap-4 items-start',
                selected ? 'bg-[#f4f3ff]' : 'bg-white hover:bg-[#f9f9ff]',
              ].join(' ')}
            >
              <span className={['shrink-0 mt-[2px] transition-colors duration-200', selected ? 'text-[#5652CC]' : 'text-[#ccc] group-hover:text-[#5652CC]'].join(' ')}>
                {type.icon}
              </span>
              <span>
                <span className={['block font-["PlexusSans-Bold",sans-serif] text-sm mb-1 transition-colors duration-200', selected ? 'text-[#5652CC]' : 'text-[#333333]'].join(' ')}>
                  {type.title}
                </span>
                <span className="block font-['PlexusSans-ExtraLight',sans-serif] font-semibold text-xs text-[#888] leading-relaxed">
                  {type.description}
                </span>
              </span>
              {selected && (
                <span className="ml-auto shrink-0 text-[#5652CC]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8L6.5 11.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─── Step 2 ───────────────────────────────────────────────────────────────────

function Step2({ value, onChange }: { value: string[]; onChange: (v: string[]) => void }) {
  const toggle = (feat: string) =>
    onChange(value.includes(feat) ? value.filter((f) => f !== feat) : [...value, feat])

  return (
    <div>
      <StepHeader title="Quais funcionalidades você precisa?" subtitle="Selecione tudo que se aplica. Pode pular se ainda não souber." />
      <div className="flex flex-col gap-px bg-[#e8e8e8]">
        {FEATURES.map((feat) => {
          const checked = value.includes(feat.value)
          return (
            <button
              key={feat.value}
              type="button"
              onClick={() => toggle(feat.value)}
              className={[
                'flex items-start gap-4 p-4 text-left transition-all duration-200 cursor-pointer group',
                checked ? 'bg-[#f4f3ff]' : 'bg-white hover:bg-[#f9f9ff]',
              ].join(' ')}
            >
              <span
                className={[
                  'flex-shrink-0 mt-[2px] w-5 h-5 border-2 flex items-center justify-center transition-all duration-200',
                  checked ? 'border-[#5652CC] bg-[#5652CC]' : 'border-[#ddd] bg-white group-hover:border-[#5652CC]',
                ].join(' ')}
              >
                {checked && (
                  <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
                    <path d="M1 4L4 7L10 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              <span>
                <span className={['block font-["PlexusSans-Bold",sans-serif] text-sm mb-[2px]', checked ? 'text-[#5652CC]' : 'text-[#333333]'].join(' ')}>
                  {feat.label}
                </span>
                <span className="block font-['PlexusSans-ExtraLight',sans-serif] font-semibold text-xs text-[#888] leading-relaxed">
                  {feat.description}
                </span>
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─── Step 3 ───────────────────────────────────────────────────────────────────

function OptionGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string
  options: { value: string; label: string; description?: string }[]
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="mb-8">
      <p className="m-0 mb-3 text-xs text-[#A3A9D0] font-['PlexusSans-Regular',sans-serif] uppercase tracking-widest">
        {label}
      </p>
      <div className="grid grid-cols-2 gap-px bg-[#e8e8e8]">
        {options.map((opt) => {
          const selected = value === opt.value
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(opt.value)}
              className={[
                'text-left p-4 transition-all duration-200 cursor-pointer',
                selected ? 'bg-[#f4f3ff]' : 'bg-white hover:bg-[#f9f9ff]',
              ].join(' ')}
            >
              <span className={['block font-["PlexusSans-Bold",sans-serif] text-sm', selected ? 'text-[#5652CC]' : 'text-[#333333]'].join(' ')}>
                {opt.label}
              </span>
              {opt.description && (
                <span className="block font-['PlexusSans-ExtraLight',sans-serif] font-semibold text-xs text-[#888] mt-1">
                  {opt.description}
                </span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function Step3({ timeline, budget, onTimeline, onBudget }: {
  timeline: string; budget: string; onTimeline: (v: string) => void; onBudget: (v: string) => void
}) {
  return (
    <div>
      <StepHeader title="Prazo e orçamento estimado" subtitle="Não precisa ser exato — isso nos ajuda a alinhar expectativas." />
      <OptionGroup label="Prazo desejado" options={TIMELINES} value={timeline} onChange={onTimeline} />
      <OptionGroup label="Orçamento estimado" options={BUDGETS} value={budget} onChange={onBudget} />
    </div>
  )
}

// ─── Step 4 ───────────────────────────────────────────────────────────────────

const inputClass = 'w-full px-4 py-3 border border-[#e0e0e0] bg-white text-[#333333] font-["PlexusSans-Regular",sans-serif] text-sm outline-none focus:border-[#5652CC] transition-colors duration-200 placeholder:text-[#C0C0C0]'
const labelClass = 'block mb-1 text-xs text-[#A3A9D0] font-["PlexusSans-Regular",sans-serif] uppercase tracking-widest'

function Step4({ data, onChange }: {
  data: Pick<FormData, 'name' | 'email' | 'whatsapp' | 'segment' | 'description' | 'references'>
  onChange: (field: keyof FormData, value: string) => void
}) {
  return (
    <div>
      <StepHeader title="Seus dados para contato" subtitle="Entrarei em contato em até 24h para conversarmos sobre o projeto." />
      <div className="flex flex-col gap-5">
        <div>
          <label className={labelClass}>Nome *</label>
          <input type="text" className={inputClass} placeholder="Seu nome completo" value={data.name} onChange={(e) => onChange('name', e.target.value)} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>E-mail *</label>
            <input type="email" className={inputClass} placeholder="seu@email.com" value={data.email} onChange={(e) => onChange('email', e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>WhatsApp *</label>
            <input type="tel" className={inputClass} placeholder="(11) 99999-9999" value={data.whatsapp} onChange={(e) => onChange('whatsapp', e.target.value)} />
          </div>
        </div>

        <div>
          <label className={labelClass}>Segmento da empresa</label>
          <select
            className={`${inputClass} appearance-none cursor-pointer`}
            value={data.segment}
            onChange={(e) => onChange('segment', e.target.value)}
          >
            <option value="">Selecione o segmento...</option>
            {SEGMENTS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass}>Referências de sites ou estilos visuais</label>
          <input
            type="text"
            className={inputClass}
            placeholder="Ex: airbnb.com, notion.so — sites cujo visual você gostou"
            value={data.references}
            onChange={(e) => onChange('references', e.target.value)}
          />
          <p className="mt-1 text-xs text-[#C0C0C0] font-['PlexusSans-Regular',sans-serif]">
            Links ou nomes de sites que te inspiram ajudam muito na criação do design.
          </p>
        </div>

        <div>
          <label className={labelClass}>Descreva seu projeto</label>
          <textarea
            className={`${inputClass} resize-none`}
            placeholder="Qual problema você quer resolver? Quem é o público-alvo? O que já tem definido?"
            rows={4}
            value={data.description}
            onChange={(e) => onChange('description', e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

// ─── Confirmation ─────────────────────────────────────────────────────────────

function Confirmation() {
  return (
    <div className="flex flex-col items-center text-center py-16">
      <div className="w-16 h-16 bg-[#5652CC] flex items-center justify-center mb-8">
        <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
          <path d="M8 20L16 28L32 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h3 className="m-0 mb-2 font-['PlexusSans-Bold',sans-serif] text-xl text-[#5652CC]">
        Solicitação enviada!
      </h3>
      <p className="m-0 mb-1 font-['PlexusSans-Bold',sans-serif] text-sm text-[#333]">
        Entrarei em contato em até 24 horas.
      </p>
      <p className="m-0 mb-10 font-['PlexusSans-ExtraLight',sans-serif] font-semibold text-[#888] text-sm leading-relaxed max-w-xs">
        Vou analisar as informações e te enviar uma proposta pelo WhatsApp ou e-mail informado.
      </p>
      <a
        href="/"
        className="inline-block bg-[#5652CC] !text-white px-10 py-4 font-['PlexusSans-Bold',sans-serif] text-sm tracking-wide hover:bg-[#33317a] hover:!opacity-100 hover:!text-white transition-colors duration-300 no-underline"
      >
        Voltar ao início
      </a>
    </div>
  )
}

// ─── Nav buttons ─────────────────────────────────────────────────────────────

function NavButtons({ step, totalSteps, canNext, onBack, onNext, onSubmit }: {
  step: number; totalSteps: number; canNext: boolean
  onBack: () => void; onNext: () => void; onSubmit: () => void
}) {
  const isLast = step === totalSteps
  return (
    <div className="flex gap-3 mt-10 pt-6 border-t border-[#ebebeb] flex-wrap">
      {step > 1 && (
        <button
          type="button"
          onClick={onBack}
          className="px-8 py-3 border border-[#5652CC] text-[#5652CC] bg-transparent font-['PlexusSans-Regular',sans-serif] text-sm cursor-pointer hover:bg-[#5652CC] hover:text-white transition-all duration-200"
        >
          ← Voltar
        </button>
      )}
      {!isLast ? (
        <button
          type="button"
          onClick={onNext}
          disabled={!canNext}
          className={['px-8 py-3 font-["PlexusSans-Regular",sans-serif] text-sm transition-all duration-200', canNext ? 'bg-[#5652CC] text-white hover:bg-[#33317a] cursor-pointer' : 'bg-[#e0e0e0] text-[#bbb] cursor-not-allowed'].join(' ')}
        >
          Próximo →
        </button>
      ) : (
        <button
          type="button"
          onClick={onSubmit}
          disabled={!canNext}
          className={['px-8 py-3 font-["PlexusSans-Bold",sans-serif] text-sm transition-all duration-200', canNext ? 'bg-[#FC780B] text-white hover:bg-[#d96300] cursor-pointer' : 'bg-[#e0e0e0] text-[#bbb] cursor-not-allowed'].join(' ')}
        >
          Enviar cotação
        </button>
      )}
      {step === 2 && (
        <button type="button" onClick={onNext} className="px-4 py-3 text-[#A3A9D0] font-['PlexusSans-Regular',sans-serif] text-sm cursor-pointer hover:text-[#5652CC] transition-colors duration-200">
          Pular →
        </button>
      )}
    </div>
  )
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function QuoteForm() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM)

  const TOTAL_STEPS = 4

  const setField = (field: keyof FormData, value: string | string[]) =>
    setFormData((prev) => ({ ...prev, [field]: value }))

  const canProceed = (): boolean => {
    switch (step) {
      case 1: return formData.projectType !== ''
      case 2: return true
      case 3: return formData.timeline !== '' && formData.budget !== ''
      case 4: return formData.name.trim() !== '' && formData.email.trim() !== '' && formData.whatsapp.trim() !== ''
      default: return false
    }
  }

  const handleNext = () => { if (canProceed() && step < TOTAL_STEPS) setStep((s) => s + 1) }
  const handleBack = () => { if (step > 1) setStep((s) => s - 1) }
  const handleSubmit = () => {
    if (!canProceed()) return
    const phone = '5511991000880'
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(formatWhatsAppMessage(formData))}`, '_blank')
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#efefef] flex flex-col">
      {/* Reuse site menu */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#ebebeb]">
        <Menu
          items={[
            { text: 'Início', link: '/' },
            { text: 'Sobre', link: '/#sobre' },
            { text: 'Serviços', link: '/#servicos' },
          ]}
          title="OS."
        />
      </div>

      {/* Mobile progress bar */}
      {!submitted && (
        <div className="fixed top-[50px] left-0 right-0 z-40">
          <ProgressBar step={step} total={TOTAL_STEPS} />
        </div>
      )}

      {/* Body */}
      <div className="flex flex-1 mt-[50px]">
        {/* Sidebar */}
        <div className="w-[300px] shrink-0 sticky top-[50px] h-[calc(100vh-50px)] overflow-y-auto max-md:hidden">
          <Sidebar step={step} submitted={submitted} />
        </div>

        {/* Form content */}
        <main className="flex-1 flex flex-col">
          <div className="flex-1 flex items-start justify-center py-12 px-6 md:px-12">
            <div className="w-full max-w-[640px]">
              {submitted ? (
                <Confirmation />
              ) : (
                <div className="bg-white p-8 md:p-10">
                  {step === 1 && <Step1 value={formData.projectType} onChange={(v) => setField('projectType', v)} />}
                  {step === 2 && <Step2 value={formData.features} onChange={(v) => setField('features', v)} />}
                  {step === 3 && <Step3 timeline={formData.timeline} budget={formData.budget} onTimeline={(v) => setField('timeline', v)} onBudget={(v) => setField('budget', v)} />}
                  {step === 4 && (
                    <Step4
                      data={{ name: formData.name, email: formData.email, whatsapp: formData.whatsapp, segment: formData.segment, description: formData.description, references: formData.references }}
                      onChange={(field, value) => setField(field, value)}
                    />
                  )}
                  <NavButtons step={step} totalSteps={TOTAL_STEPS} canNext={canProceed()} onBack={handleBack} onNext={handleNext} onSubmit={handleSubmit} />
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <footer className="py-4 text-center bg-[#5652CC]">
            <p className="m-0 text-white text-xs font-['PlexusSans-Regular',sans-serif]">
              Otávio Sanchez <span className="text-[#FC780B]">&copy;{new Date().getFullYear()}</span>
            </p>
          </footer>
        </main>
      </div>
    </div>
  )
}
