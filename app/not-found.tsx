import React from 'react'

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-6xl font-bold text-[#5652CC]">404</h1>
      <p className="text-xl text-[#333333] mt-4">Página não encontrada</p>
      <a href="/" className="mt-8 px-8 py-3 bg-[#5652CC] text-white hover:bg-[#33317a] transition-colors">
        Voltar ao início
      </a>
    </main>
  )
}
