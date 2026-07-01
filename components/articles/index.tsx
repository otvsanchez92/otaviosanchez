import React from 'react'

interface Props {
  title: string
  infos: React.ReactNode
}

export function Articles({ title, infos }: Props) {
  return (
    <section className="w-screen h-[calc(100vh-50px)] mt-[50px] bg-white py-[50px] box-border">
      <section className="w-[90%] mx-auto max-w-[1280px]">
        <h1 className="m-0 text-[#5652CC] font-semibold font-['PlexusSans-Bold',sans-serif] p-0 w-full text-center mr-[30px]">
          Artigos
        </h1>
        <article className="w-[90%] mx-auto max-w-[1280px] [&_p]:font-['PlexusSans-ExtraLight',sans-serif] [&_p]:font-semibold">
          <h1 className="m-0 text-[#5652CC] font-semibold font-['PlexusSans-Bold',sans-serif] p-0 w-full text-center mr-[30px]">
            {title}
          </h1>
          <div>{infos}</div>
        </article>
      </section>
    </section>
  )
}

export default Articles
