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
    <nav id="contato" className="w-[90%] mx-auto max-w-[1280px] py-[30px]">
      <div>
        <h3 className="m-0 text-white font-semibold p-0 w-full text-center mb-[30px]">Contato</h3>
        <p className="m-0">Deseja entrar em contato comigo ou tem alguma dúvida?</p>
        <p className="m-0">
          Mande um email para{' '}
          <a href="mailto:contato@otaviosanchez.com" className="text-[#A3A9D0]">contato@otaviosanchez.com</a>.
        </p>
        <div className="mt-[30px] text-sm">Ou acesse:</div>
      </div>
      <ul className="p-0 m-0 flex justify-center items-center">
        {socialNetwork?.map((item: Item) => (
          <li key={item.link} className="list-none hover:opacity-80">
            <a href={item.link} title={item.text}>
              <div className="text-[#FC780B] font-['PlexusSans-Regular']">
                {renderIcon(item.icon)}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Contact
