'use client'
import React, { useState } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormData {
  projectType: string
  features: string[]
  timeline: string
  budget: string
  name: string
  email: string
  whatsapp: string
  description: string
}

const INITIAL_FORM: FormData = {
  projectType: '',
  features: [],
  timeline: '',
  budget: '',
  name: '',
  email: '',
  whatsapp: '',
  description: '',
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const PROJECT_TYPES = [
  { value: 'ecommerce', emoji: '🛒', title: 'E-commerce', description: 'Loja virtual com carrinho e pagamento' },
  { value: 'sistema', emoji: '🖥️', title: 'Sistema Web', description: 'Plataforma, painel ou dashboard' },
  { value: 'landing', emoji: '📄', title: 'Landing Page', description: 'Página de conversão ou institucional' },
  { value: 'automacao', emoji: '🤖', title: 'Automação / IA', description: 'Fluxos inteligentes com n8n e IA' },
  { value: 'saas', emoji: '📦', title: 'Produto Digital (SaaS)', description: 'Produto com assinaturas e usuários' },
  { value: 'outro', emoji: '💬', title: 'Outro', description: 'Me conte mais sobre sua ideia' },
]

const FEATURES = [
  'Checkout e pagamento online',
  'Login e cadastro de usuários',
  'Painel administrativo',
  'Blog ou área de conteúdo',
  'Integração com marketplaces',
  'SEO e performance',
  'Design personalizado (UI/UX)',
  'Automação de processos',
  'Integração com sistemas externos',
]

const TIMELINES = [
  { value: 'urgente', label: 'Urgente', description: 'menos de 1 mês' },
  { value: 'curto', label: 'Curto', description: '1 a 3 meses' },
  { value: 'normal', label: 'Normal', description: '3 a 6 meses' },
  { value: 'indefinido', label: 'Sem prazo definido', description: '' },
]

const BUDGETS = [
  { value: 'ate3k', label: 'Até R$ 3.000' },
  { value: '3k8k', label: 'R$ 3.000 a R$ 8.000' },
  { value: '8k20k', label: 'R$ 8.000 a R$ 20.000' },
  { value: 'acima20k', label: 'Acima de R$ 20.000' },
  { value: 'naosei', label: 'Ainda não sei' },
]

// ─── Message formatter ────────────────────────────────────────────────────────

function formatWhatsAppMessage(data: FormData): string {
  const projectLabel = PROJECT_TYPES.find((p) => p.value === data.projectType)?.title ?? data.projectType
  const featuresLabel = data.features.length > 0 ? data.features.join(', ') : 'Nenhuma selecionada'
  const timelineLabel = TIMELINES.find((t) => t.value === data.timeline)?.label ?? data.timeline
  const budgetLabel = BUDGETS.find((b) => b.value === data.budget)?.label ?? data.budget

  let message = `Olá Otávio! 👋 Tenho interesse em um projeto.\n\n`
  message += `*Tipo:* ${projectLabel}\n`
  message += `*Funcionalidades:* ${featuresLabel}\n`
  message += `*Prazo:* ${timelineLabel}\n`
  message += `*Orçamento:* ${budgetLabel}\n\n`
  message += `*Nome:* ${data.name}\n`
  message += `*E-mail:* ${data.email}\n`
  message += `*WhatsApp:* ${data.whatsapp}\n`

  if (data.description.trim()) {
    message += `\n*Sobre o projeto:*\n${data.description}`
  }

  return message
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function ProgressBar({ step, total }: { step: number; total: number }) {
  const pct = Math.round((step / total) * 100)
  return (
    <div className="w-full h-[3px] bg-[#e0e0e0]">
      <div
        className="h-full bg-[#5652CC] transition-all duration-500"
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}

function StepHeader({ step, total, title }: { step: number; total: number; title: string }) {
  return (
    <div className="mb-8">
      <p className="m-0 mb-2 text-[#A3A9D0] text-xs font-['PlexusSans-Regular',sans-serif] tracking-widest uppercase">
        Passo {step} de {total}
      </p>
      <h2 className="m-0 text-[#5652CC] font-['PlexusSans-Bold',sans-serif] text-2xl leading-tight">
        {title}
      </h2>
    </div>
  )
}

// ─── Step 1 ───────────────────────────────────────────────────────────────────

function Step1({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <StepHeader step={1} total={4} title="Qual é o tipo do seu projeto?" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {PROJECT_TYPES.map((type) => {
          const selected = value === type.value
          return (
            <button
              key={type.value}
              type="button"
              onClick={() => onChange(type.value)}
              className={[
                'text-left p-4 border-2 transition-all duration-200 cursor-pointer bg-white',
                selected
                  ? 'border-[#5652CC] bg-[#f0f0ff]'
                  : 'border-[#e8e8e8] hover:border-[#A3A9D0]',
              ].join(' ')}
            >
              <span className="text-2xl block mb-2">{type.emoji}</span>
              <span className="block font-['PlexusSans-Bold',sans-serif] text-sm text-[#333333] mb-1">
                {type.title}
              </span>
              <span className="block font-['PlexusSans-ExtraLight',sans-serif] font-semibold text-xs text-[#666]">
                {type.description}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─── Step 2 ───────────────────────────────────────────────────────────────────

function Step2({ value, onChange }: { value: string[]; onChange: (v: string[]) => void }) {
  const toggle = (feat: string) => {
    if (value.includes(feat)) {
      onChange(value.filter((f) => f !== feat))
    } else {
      onChange([...value, feat])
    }
  }

  return (
    <div>
      <StepHeader step={2} total={4} title="Quais funcionalidades você precisa?" />
      <p className="m-0 mb-6 text-[#A3A9D0] text-sm font-['PlexusSans-Regular',sans-serif]">
        Selecione todas que se aplicam (pode pular se não souber ainda)
      </p>
      <div className="flex flex-col gap-2">
        {FEATURES.map((feat) => {
          const checked = value.includes(feat)
          return (
            <button
              key={feat}
              type="button"
              onClick={() => toggle(feat)}
              className={[
                'flex items-center gap-3 p-4 border-2 text-left transition-all duration-200 cursor-pointer bg-white',
                checked
                  ? 'border-[#5652CC] bg-[#f0f0ff]'
                  : 'border-[#e8e8e8] hover:border-[#A3A9D0]',
              ].join(' ')}
            >
              {/* Custom checkbox */}
              <span
                className={[
                  'flex-shrink-0 w-5 h-5 border-2 flex items-center justify-center transition-all duration-200',
                  checked ? 'border-[#5652CC] bg-[#5652CC]' : 'border-[#ccc] bg-white',
                ].join(' ')}
              >
                {checked && (
                  <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
                    <path d="M1 4L4 7L10 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              <span className="font-['PlexusSans-Regular',sans-serif] text-sm text-[#333333]">
                {feat}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─── Step 3 ───────────────────────────────────────────────────────────────────

function RadioGroup({
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
      <h3 className="m-0 mb-4 font-['PlexusSans-Bold',sans-serif] text-sm text-[#333333] uppercase tracking-widest">
        {label}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map((opt) => {
          const selected = value === opt.value
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(opt.value)}
              className={[
                'text-left p-4 border-2 transition-all duration-200 cursor-pointer bg-white',
                selected
                  ? 'border-[#5652CC] bg-[#f0f0ff]'
                  : 'border-[#e8e8e8] hover:border-[#A3A9D0]',
              ].join(' ')}
            >
              <span className="block font-['PlexusSans-Bold',sans-serif] text-sm text-[#333333]">
                {opt.label}
              </span>
              {opt.description && (
                <span className="block font-['PlexusSans-ExtraLight',sans-serif] font-semibold text-xs text-[#666] mt-1">
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

function Step3({
  timeline,
  budget,
  onTimeline,
  onBudget,
}: {
  timeline: string
  budget: string
  onTimeline: (v: string) => void
  onBudget: (v: string) => void
}) {
  return (
    <div>
      <StepHeader step={3} total={4} title="Prazo e orçamento estimado" />
      <RadioGroup
        label="Prazo desejado"
        options={TIMELINES}
        value={timeline}
        onChange={onTimeline}
      />
      <RadioGroup
        label="Orçamento estimado"
        options={BUDGETS}
        value={budget}
        onChange={onBudget}
      />
    </div>
  )
}

// ─── Step 4 ───────────────────────────────────────────────────────────────────

const inputClass =
  'w-full px-4 py-3 border border-[#ddd] bg-white text-[#333333] font-["PlexusSans-Regular",sans-serif] text-sm outline-none focus:border-[#5652CC] transition-colors duration-200 placeholder:text-[#A3A9D0]'

function Step4({
  data,
  onChange,
}: {
  data: Pick<FormData, 'name' | 'email' | 'whatsapp' | 'description'>
  onChange: (field: keyof FormData, value: string) => void
}) {
  return (
    <div>
      <StepHeader step={4} total={4} title="Seus dados para contato" />
      <div className="flex flex-col gap-4">
        <div>
          <label className="block mb-1 text-xs text-[#A3A9D0] font-['PlexusSans-Regular',sans-serif] uppercase tracking-widest">
            Nome *
          </label>
          <input
            type="text"
            className={inputClass}
            placeholder="Seu nome completo"
            value={data.name}
            onChange={(e) => onChange('name', e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-xs text-[#A3A9D0] font-['PlexusSans-Regular',sans-serif] uppercase tracking-widest">
            E-mail *
          </label>
          <input
            type="email"
            className={inputClass}
            placeholder="seu@email.com"
            value={data.email}
            onChange={(e) => onChange('email', e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-xs text-[#A3A9D0] font-['PlexusSans-Regular',sans-serif] uppercase tracking-widest">
            WhatsApp *
          </label>
          <input
            type="tel"
            className={inputClass}
            placeholder="(11) 99999-9999"
            value={data.whatsapp}
            onChange={(e) => onChange('whatsapp', e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-xs text-[#A3A9D0] font-['PlexusSans-Regular',sans-serif] uppercase tracking-widest">
            Descreva brevemente seu projeto
          </label>
          <textarea
            className={`${inputClass} resize-none`}
            placeholder="Conte um pouco mais sobre o que você precisa..."
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
    <div className="flex flex-col items-center text-center py-12">
      {/* Checkmark icon */}
      <div className="w-20 h-20 bg-[#5652CC] flex items-center justify-center mb-8">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
            d="M8 20L16 28L32 12"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <h2 className="m-0 mb-4 font-['PlexusSans-Bold',sans-serif] text-2xl text-[#5652CC]">
        Recebemos sua solicitação!
      </h2>

      <p className="m-0 mb-10 font-['PlexusSans-Regular',sans-serif] text-[#555] text-sm leading-relaxed max-w-sm">
        Entrarei em contato em até 24 horas pelo WhatsApp ou e-mail que você informou.
      </p>

      <a
        href="/"
        className="inline-block bg-[#5652CC] !text-white px-10 py-4 font-['PlexusSans-Bold',sans-serif] text-sm tracking-wide hover:bg-[#33317a] transition-colors duration-300 no-underline hover:opacity-100"
      >
        Voltar ao início
      </a>
    </div>
  )
}

// ─── Navigation buttons ───────────────────────────────────────────────────────

function NavButtons({
  step,
  totalSteps,
  canNext: canProceed,
  onBack,
  onNext,
  onSubmit,
}: {
  step: number
  totalSteps: number
  canNext: boolean
  onBack: () => void
  onNext: () => void
  onSubmit: () => void
}) {
  const isLast = step === totalSteps

  return (
    <div className="flex gap-3 mt-10 flex-wrap">
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
          disabled={!canProceed}
          className={[
            'px-8 py-3 font-["PlexusSans-Regular",sans-serif] text-sm cursor-pointer transition-all duration-200',
            canProceed
              ? 'bg-[#5652CC] text-white hover:bg-[#33317a]'
              : 'bg-[#ccc] text-white cursor-not-allowed',
          ].join(' ')}
        >
          Próximo →
        </button>
      ) : (
        <button
          type="button"
          onClick={onSubmit}
          disabled={!canProceed}
          className={[
            'px-8 py-3 font-["PlexusSans-Bold",sans-serif] text-sm cursor-pointer transition-all duration-200',
            canProceed
              ? 'bg-[#FC780B] text-white hover:bg-[#d96300]'
              : 'bg-[#ccc] text-white cursor-not-allowed',
          ].join(' ')}
        >
          Enviar cotação
        </button>
      )}
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function QuoteForm() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM)

  const TOTAL_STEPS = 4

  const setField = (field: keyof FormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  // Validation per step
  const canProceed = (): boolean => {
    switch (step) {
      case 1:
        return formData.projectType !== ''
      case 2:
        return true // optional
      case 3:
        return formData.timeline !== '' && formData.budget !== ''
      case 4:
        return (
          formData.name.trim() !== '' &&
          formData.email.trim() !== '' &&
          formData.whatsapp.trim() !== ''
        )
      default:
        return false
    }
  }

  const handleNext = () => {
    if (canProceed() && step < TOTAL_STEPS) setStep((s) => s + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep((s) => s - 1)
  }

  const handleSubmit = () => {
    if (!canProceed()) return

    const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ''
    const message = formatWhatsAppMessage(formData)

    if (phone) {
      window.open(
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
        '_blank'
      )
    }

    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#efefef] flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 h-[50px] bg-white border-b border-[#efefef] flex items-center px-6">
        <div className="flex items-center justify-between w-full max-w-[640px] mx-auto">
          <a
            href="/"
            className="flex items-center gap-2 no-underline hover:opacity-70 transition-opacity duration-200"
            aria-label="Voltar ao início"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 3L5 8L10 13"
                stroke="#5652CC"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-['PlexusSans-Bold',sans-serif] text-[#5652CC] text-base">
              OS.
            </span>
          </a>
          <span className="font-['PlexusSans-Regular',sans-serif] text-[#A3A9D0] text-xs">
            Cotação de Projeto
          </span>
        </div>
      </header>

      {/* Progress bar */}
      {!submitted && (
        <div className="fixed top-[50px] left-0 right-0 z-40">
          <ProgressBar step={step} total={TOTAL_STEPS} />
        </div>
      )}

      {/* Main content */}
      <main className="flex-1 pt-[56px] pb-16">
        <div className="max-w-[640px] mx-auto px-6 py-10">
          {submitted ? (
            <Confirmation />
          ) : (
            <>
              {step === 1 && (
                <Step1
                  value={formData.projectType}
                  onChange={(v) => setField('projectType', v)}
                />
              )}

              {step === 2 && (
                <Step2
                  value={formData.features}
                  onChange={(v) => setField('features', v)}
                />
              )}

              {step === 3 && (
                <Step3
                  timeline={formData.timeline}
                  budget={formData.budget}
                  onTimeline={(v) => setField('timeline', v)}
                  onBudget={(v) => setField('budget', v)}
                />
              )}

              {step === 4 && (
                <Step4
                  data={{
                    name: formData.name,
                    email: formData.email,
                    whatsapp: formData.whatsapp,
                    description: formData.description,
                  }}
                  onChange={(field, value) => setField(field, value)}
                />
              )}

              <NavButtons
                step={step}
                totalSteps={TOTAL_STEPS}
                canNext={canProceed()}
                onBack={handleBack}
                onNext={handleNext}
                onSubmit={handleSubmit}
              />
            </>
          )}
        </div>
      </main>
    </div>
  )
}
