import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface dataProps{
    href:StaticImageData | string,
    alt:string,
    par:string
 }
export default function CardAdvantages({href,alt,par} : dataProps) {
  return (
    <div className='bg-pink-opacity rounded-3xl flex flex-col justify-between items-center gap-[15px] p-7.5 lg:p-5 2xl:p-7.5 w-[235px] lg:w-[235px] 2xl:w-[292px] h-[189px]'>
        <Image src={href} alt={alt} />
        <p className='text-base md:text-xl font-semibold text-center'>{par}</p>
    </div>
  )
}
