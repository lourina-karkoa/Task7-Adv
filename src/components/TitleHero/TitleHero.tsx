import React from 'react'

export default function TitleHero({title,par,nopadding,wPar} : {title:string,par:string,nopadding?:boolean,wPar?:boolean}) {
  return (
    <div className={` ${nopadding ? 'pb-4 2xl:pb-6': 'xl:pb-8 2xl:pb-16'} flex flex-col justify-center sm:items-center items-start text-white pb-2 md:pb-4`}>
    <h2 className='text-[26px] md:text-3xl xl:text-5xl pb-1 md:pb-2 2xl:text-7xl 2xl:pb-4 font-podcast'>{title}</h2>
    <p className={`${wPar ? 'xl:w-[88%]' : ''} text-lg font-open-sance leading-5 md:text-xl xl:text-2xl 2xl:font-bold`}>{par}</p>
  </div>
  )
}
