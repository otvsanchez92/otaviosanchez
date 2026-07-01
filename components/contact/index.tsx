import React from 'react'

interface Item {
  text?: string
  link: string
  icon: string
}

interface Props {
  socialNetwork: Item[]
}

const renderIcon = (icon: string) => {
  switch (icon) {
    case 'github':
      return <img src="/images/icons/github-b.svg" title={icon} alt={icon} width={50} height={50} className="w-[50px] m-[10px]" />
    case 'linkedin':
      return <img src="/images/icons/linkedin-b.svg" title={icon} alt={icon} width={50} height={50} className="w-[50px] m-[10px]" />
    default:
      return <img src="/images/icons/npm.svg" title={icon} alt={icon} width={50} height={50} className="w-[50px] m-[10px]" />
  }
}

export function Contact({ socialNetwork }: Props) {
  return (
    <nav id="contato" className="w-[90%] mx-auto max-w-[1280px] py-10 text-center">
      <h3 className="m-0 text-white font-semibold font-['PlexusSans-Bold',sans-serif] text-lg mb-6">Contato</h3>
      <p className="m-0 text-white font-['PlexusSans-ExtraLight',sans-serif] font-semibold">
        Deseja entrar em contato comigo ou tem alguma dúvida?
      </p>
      <p className="mt-2 mb-0 text-white font-['PlexusSans-ExtraLight',sans-serif] font-semibold">
        Mande um email para{' '}
        <a
          href="mailto:sanchezotavio@gmail.com"
          className="!text-[#FC780B] underline underline-offset-2 hover:!opacity-80"
        >
          sanchezotavio@gmail.com
        </a>.
      </p>

      <p className="mt-8 mb-2 text-white text-sm font-['PlexusSans-ExtraLight',sans-serif] font-semibold">Ou acesse:</p>
      <ul className="p-0 m-0 flex justify-center items-center gap-2">
        {socialNetwork?.map((item: Item) => (
          <li key={item.link} className="list-none hover:opacity-80">
            <a href={item.link} title={item.text}>
              {renderIcon(item.icon)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Contact
