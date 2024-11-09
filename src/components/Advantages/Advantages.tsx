import React from 'react'
import CardAdvantages from '../CardAdvantages/CardAdvantages'
import { StaticImageData } from 'next/image'
interface dataProps{
  href:StaticImageData | string,
  alt:string,
  par:string
}
export default function Advantages({data} : {data : dataProps[]}) {
  return (
    <div className='font-open-sance bg-linear bg-no-repeat bg-cover w-full mb-10 md:mb-16 2xl:mb-29 gap-5 md:gap-x-2 py-10 md:py-16 lg:py-[83px] flex justify-center md:justify-between items-center flex-wrap px-5 xl:px-28 full-desktop:px-[250px]'>
        {data.map((item,index)=>{
            return(
                <CardAdvantages key={index} href={item.href} alt={item.alt} par={item.par} />
            )
        })}
    </div>
  )
}
