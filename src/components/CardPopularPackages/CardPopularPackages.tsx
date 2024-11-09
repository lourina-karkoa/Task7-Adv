import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { FaEuroSign } from 'react-icons/fa'
import Pargraph18 from '../Pargraph18/Pargraph18'
interface dataCard {
    id?: number,
    icon: StaticImageData | string,
    title: string,
    alt: string,
}

interface dataProps {
    par: string,
    text: string,
    href: StaticImageData | string,
    alt: string,
    btn: string,
    dataSecound?: dataCard[],
}
export default function CardPopularPackages({ href, alt, par, text, dataSecound, btn }: dataProps) {
    return (
        <div className='w-64 2xl:w-[310px] full-desktop:w-[330px] rounded-3xl shadow-3xl'>
            <Image src={href} alt={alt} />
            <div className='px-3 pb-6 2xl:px-6'>
                <p className='text-xl font-extrabold text-graien pt-6 pb-4'>{par}</p>
                <div className='pb-4 relative'>
                    <span className='absolute top-3 text-xl opacity-50 font-normal text-graien'><FaEuroSign /></span>
                    <span className=' text-native font-bold text-3xl xl:text-4xl 2xl:text-5xl leading-[63px] ps-5'>{text}</span>
                    <span className='font-normal text-lgtext-xl opacity-50 text-graien'>/day</span>
                    </div>
                <ul className='flex flex-col justify-between items-start gap-8 pb-8'>
                    {dataSecound?.map((i, n) => {
                        return (
                            <li key={n} className=' flex justify-between items-center gap-4'>
                               <Image src={i.icon} alt={i.alt} /><Pargraph18 par={i.title}/></li>
                        )
                    })}
                </ul>
                <button className='w-full full-desktop:w-[290px] h-[51px] rounded-5xl bg-white border border-native text-native'>{btn}</button>
            </div>
        </div>
    )
}
