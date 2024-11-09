import React from 'react'
import TitleHero from '../TitleHero/TitleHero'

export default function AboutHero({btn} : {btn:string}) {
  return (
    <div className='bg-about-hero bg-no-repeat bg-cover h-screen flex flex-col justify-center items-center'>
    <div className='w-[66%] max-w-[943px] text-center'>
    <TitleHero nopadding={true} title='Our team cares about your full relax' wPar={true} par='But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.'/>
    </div>
    <button className='font-open-sance bg-transparent text-sm md:text-base lg:text-xl px-6 py-2.5 md:py-[14px] border border-white rounded-5xl text-white hover:bg-white hover:text-graien hover:duration-500 hover:ease-in-out'>{btn}</button>

    </div>
  )
}
