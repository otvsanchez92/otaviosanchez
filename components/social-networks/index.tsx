'use client'
import React from 'react'

interface Item {
  text?: string
  link: string
  icon: string
}

interface Props {
  items: Item[]
}

const renderIcon = (icon: string) => {
  switch (icon) {
    case 'github':
      return <img src="/images/icons/github-sn.svg" title={icon} alt={icon} width={30} height={30} className="inline-block w-[30px]" />
    case 'linkedin':
      return <img src="/images/icons/linkedin-sn.svg" title={icon} alt={icon} width={30} height={30} className="inline-block w-[30px]" />
    default:
      return <img src="/images/icons/npm.svg" title={icon} alt={icon} width={30} height={30} className="inline-block w-[30px]" />
  }
}

export function SocialNetworks({ items }: Props) {
  return (
    <nav className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 max-md:hidden z-[9999]">
      <span
        className="text-[#A3A9D0] text-[10px] tracking-widest uppercase font-['PlexusSans-Regular']"
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
      >
        Me encontre
      </span>
      <div className="w-px h-6 bg-[#A3A9D0] opacity-50" />
      <ul className="p-0 m-0 flex flex-col gap-3">
        {items?.map((item: Item) => (
          <li key={item.link} className="list-none hover:opacity-60 transition-opacity">
            <a href={item.link} title={item.text}>
              {renderIcon(item.icon)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SocialNetworks
