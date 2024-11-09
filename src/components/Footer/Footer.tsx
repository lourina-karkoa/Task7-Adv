import Image, { StaticImageData } from 'next/image'
import React from 'react'
import PargraphFooter from './PargraphFooter'

interface dataul {
    id: number;
    text?: string;
    icon?:JSX.Element,
  }
  
interface dataprops {
    par: string;
    ul: dataul[];
}
interface data {
    dataOne:dataprops[],
    dataThree:dataprops[],
    endtext:string,
    logo:StaticImageData | string,
    alt:string
}
export default function Footer({dataOne,dataThree,endtext,logo,alt}:data) {
  return (
    <div className='px-5 xl:px-28 full-desktop:px-[250px] bg-graien text-white py-8 2xl:py-10'>
        <Image src={logo} alt={alt} className='pb-6 2xl:pb-8.2'/>
        <div className='flex-col gap-y-6 flex md:flex-row justify-between items-start border-y py-6 2xl:py-8.2'>
            {dataOne.map((item , index)=>{
                return(
                 <div key={index}>
                       <PargraphFooter par={item.par}/>
                       <ul className='pt-2 md:pt-5 flex flex-col gap-1 md:gap-2.5'>
                       {item.ul.map((i , n)=>{
                        return(
                            <li className='laptop:text-sm xl:text-lg md:text-xs font-normal xl:font-semibold flex justify-start items-center' key={n}>{i.icon}{i.text}</li>
                        )
                       })}
                       </ul>
                 </div>
                )
            })}
             {dataThree.map((item ,index)=>{
                return(
                    <div key={index} className='flex flex-col justify-center md:items-center items-start'>
                       <PargraphFooter par={item.par}/>
                       <div className='pt-2 md:pt-5 flex justify-center items-center gap-2 xl:gap-6'>
                       {item.ul.map((i , n)=>{
                        return(
                            <div key={n} className='flex justify-center items-center bg-native rounded-full size-10 xl:size-11'><span className='text-graien'>{i.icon}</span></div>
                        )
                       })}
                       </div>
                 </div>
                )
            })}
        </div>
        <div className='md:text-center pt-6 2xl:pt-8.2 laptop:text-sm md:text-xs font-normal xl:text-base leading-[26px]'>{endtext}</div>
    </div>
  )
}
