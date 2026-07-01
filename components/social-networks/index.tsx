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
    <nav className="fixed right-[10px] top-[30%] max-md:invisible">
      <div className="h-[30px] w-[75px] absolute top-[-60px] right-[-17px] rotate-90">
        <h5 className="m-0">Me encontre</h5>
      </div>
      <ul className="p-0 m-0">
        {items?.map((item: Item) => (
          <li key={item.link} className="list-none hover:animate-[wiggle_0.5s_linear] hover:opacity-80">
            <a href={item.link} title={item.text}>
              <div className="text-[#A3A9D0] font-['PlexusSans-Regular']">
                {renderIcon(item.icon)}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SocialNetworks
