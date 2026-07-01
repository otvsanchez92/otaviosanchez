import type { Metadata } from 'next'
import QuoteForm from '../../components/quote-form'

export const metadata: Metadata = {
  title: 'Cotação de Projeto — Otávio Sanchez',
  description: 'Solicite uma cotação para seu projeto web. E-commerce, sistemas, landing pages e automações com IA.',
}

export default function CotacaoPage() {
  return <QuoteForm />
}
