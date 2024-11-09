import Image, { StaticImageData } from 'next/image'
import React from 'react'
import quote from './../../assets/images/customers/cut.svg'
import Pargraph18 from '../Pargraph18/Pargraph18'
interface data {
    userName: string,
    text: string,
    href: StaticImageData | string,
    alt: string,
}
export default function CardHappyCustomersSays({href,alt,userName,text}:data) {
  return (
    <div className='border rounded-3xl px-7.5 flex flex-col justify-center py-7.5 items-center full-desktop:w-[700px]'>
        <div className='flex flex-col justify-center items-center'>
        <Image className='rounded-full pb-[15px] size-20' src={href} alt={alt}/>
        <Pargraph18 par={userName}/>
        </div>
        <div className='relative px-5 py-[38px]'>
            <Image className='opacity-30 absolute -top-[0] left-0' src={quote} alt={quote}/>
            <Pargraph18 par={text}/>
            <Image className='opacity-30 absolute -bottom-[0] right-0' src={quote} alt={quote}/>
        </div>
    </div>
  )
}
