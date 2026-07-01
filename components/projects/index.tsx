import React from 'react'

interface Item {
  link: string
  icon: string
  text?: string
  date: string
  title: string
}

interface Props {
  items: Item[]
}

const renderIcon = (icon: string) => {
  switch (icon) {
    case 'github':
      return (
        <div className="text-[#A3A9D0] font-['PlexusSans-Regular']">
          <img src="/images/icons/github.svg" title={icon} alt={icon} width={50} height={50} className="w-[50px] inline-block" />
        </div>
      )
    default:
      return (
        <div className="text-[#A3A9D0] font-['PlexusSans-Regular']">
          <img src="/images/icons/npm.svg" title={icon} alt={icon} width={50} height={50} className="w-[50px] inline-block" />
        </div>
      )
  }
}

export function Projects({ items }: Props) {
  return (
    <div className="m-0 p-0 transition-all duration-500 w-full items-center flex flex-row flex-wrap justify-between">
      {items?.map((item: Item) => (
        <div
          key={item.title}
          className="transition-all duration-1000 p-[5px] border-b-[3px] border-[#ddd] flex box-border items-center text-[#333333] min-w-[24%] max-[1024px]:min-w-[49%] max-md:min-w-full [&_h2]:text-[16px] [&_h2]:m-0 [&_p]:m-0 [&>div]:p-[10px] [&>div]:box-border [&_span]:block [&_a]:pr-[16px]"
        >
          <div>{renderIcon(item.icon)}</div>
          <a href={item.link} title={item.text} target="_blank" rel="noreferrer">
            <h2>{item.title}</h2>
            {item.text && <p>{item.text}</p>}
            <p className="pt-2 text-xs">{item.date}</p>
          </a>
        </div>
      ))}
    </div>
  )
}

export default Projects
