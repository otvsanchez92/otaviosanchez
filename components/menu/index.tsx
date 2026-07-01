'use client'
import React, { useState } from 'react'
import Button from '../button'
import Icon from './components/icon'

interface Item {
  text: string
  link: string
}

interface Props {
  items: Item[]
  title: string
}

export function Menu({ items, title }: Props) {
  const [open, setOpen] = useState(false)

  const changeMenu = () => {
    setOpen(!open)
  }

  return (
    <header className="w-screen h-[50px] flex relative items-center">
      <div className="w-[90%] mx-auto max-w-[1280px] items-center flex max-md:justify-between">
        <h1 className="text-[#5652CC] text-[1.2em] font-['PlexusSans-Bold',sans-serif] px-[5px] py-[2px] mr-[30px] font-semibold z-[10] relative">
          {title}
        </h1>
        <nav>
          {/* Hamburger button - only visible on mobile */}
          <div className="hidden max-md:inline-block z-[10] relative">
            <Button
              data-testid="menu"
              id="menu"
              type="transparent"
              onClick={changeMenu}>
              <Icon open={open} />
            </Button>
          </div>
          {/* Nav list */}
          <ul
            className={`flex m-0 p-0 transition-all duration-500 max-md:bg-white max-md:h-screen max-md:block max-md:fixed max-md:top-0 max-md:left-0 max-md:pt-[50px] max-md:z-[3] max-md:overflow-hidden ${open ? 'max-md:w-screen' : 'max-md:w-0'}`}>
            {items?.map((item: Item) => (
              <li key={item.link} className="list-none mx-[15px] max-md:block max-md:mx-[6.2%] max-md:my-[20px]">
                <a href={item.link} title={item.text}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Menu
