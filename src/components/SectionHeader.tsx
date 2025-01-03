import React from 'react'

const SectionHeader = ({title, eyebrow, description} : { title:string,eyebrow:string,description:string}) => {
  return (
    <div>
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r  from-emerald-300 to-sky-400 bg-clip-text text-transparent text-center">
          {eyebrow}
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 ">
          {title}
        </h2>
        <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">
          {description}
        </p>
    </div>
  )
}

export default SectionHeader