'use client'
import React, { useEffect, useState } from 'react'
import Button from '../button'

const WORDS = [
  'Desenvolvedor',
  'Engenheiro',
  'Especialista em',
  'Apaixonado pela',
  'Soluções na',
  'Inovação na',
]

const TYPING_SPEED = 80
const DELETING_SPEED = 40
const PAUSE_AFTER_WORD = 1800
const PAUSE_BEFORE_DELETE = 200

interface Props {
  title: string
  infos: React.ReactNode
}

export function Banner({ title, infos }: Props) {
  const [displayed, setDisplayed] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const current = WORDS[wordIndex]

    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayed === current) {
      // Word fully typed — pause then start deleting
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_WORD)
    } else if (isDeleting && displayed === '') {
      // Word fully deleted — move to next word
      timeout = setTimeout(() => {
        setIsDeleting(false)
        setWordIndex((i) => (i + 1) % WORDS.length)
      }, PAUSE_BEFORE_DELETE)
    } else {
      timeout = setTimeout(() => {
        setDisplayed(isDeleting
          ? current.slice(0, displayed.length - 1)
          : current.slice(0, displayed.length + 1)
        )
      }, isDeleting ? DELETING_SPEED : TYPING_SPEED)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, wordIndex])

  // Blink cursor only when paused (word fully typed)
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((v) => !v), 530)
    return () => clearInterval(interval)
  }, [])

  const isTypingPaused = displayed === WORDS[wordIndex] && !isDeleting

  return (
    <section className="w-screen min-h-[calc(100vh-50px)] flex items-center mt-[50px] relative z-[1]">
      <div className="w-[90%] mx-auto max-w-[1280px] items-center flex max-md:justify-between max-md:flex-col max-md:flex-col-reverse">
        {/* Left content */}
        <div className="w-full">
          <div className="font-['PlexusSans-Bold',sans-serif] text-[30px] text-[#333333] h-[40px] flex items-center">
            <span>{displayed}</span>
            <span
              className="ml-[2px] inline-block w-[2px] h-[28px] bg-[#333333] transition-opacity duration-75"
              style={{ opacity: isTypingPaused ? (showCursor ? 1 : 0) : 1 }}
            />
          </div>

          <h1
            className="m-0 text-[#5652CC] leading-none font-semibold font-['PlexusSans-Bold',sans-serif] p-0 max-md:text-[2em]"
            style={{ fontSize: 'clamp(2rem, 12vw, 150px)' }}
          >
            {title}
          </h1>

          <article className="mb-[50px]">
            <div className="[&_p]:font-['PlexusSans-ExtraLight',sans-serif] [&_p]:font-semibold [&_p]:my-2">
              {infos}
            </div>
          </article>

          <div className="flex gap-4 flex-wrap">
            <Button
              onClick={() => (window.location.href = '#contato')}
              type="alternative">
              Fale comigo
            </Button>
            <Button
              onClick={() => (window.location.href = '#sobre')}
              type="transparent">
              Ver Mais
            </Button>
          </div>
        </div>

        {/* Right content - image */}
        <div className="w-full">
          <img src="/images/banner.svg" alt="Banner" className="w-full" />
        </div>
      </div>
    </section>
  )
}

export default Banner
