import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { FaEuroSign } from 'react-icons/fa'
import Pargraph18 from '../Pargraph18/Pargraph18'
interface DataCard {
  id: number;
  image: StaticImageData | string;
  par?: string;
}

interface dataProps {
  no: boolean;
  par: string;
  title: string;
  image: StaticImageData | string;
  alt: string;
  dataCard?: DataCard[];
}
export default function CardDestinantions({no,par,title,image,alt,dataCard}:dataProps) {
  return (
    <div className='w-64 2xl:w-[300px] full-desktop:w-[330px]'>
        <Image 
          src={image}
          alt={alt}
          className='w-[full] rounded-3xl'
          
        />
        <div className='w-60 2xl:w-72 full-desktop:w-80 pt-2 2xl:pt-4'>
        <p className='font-bold text-xl 2xl:text-2xl leading-8 pb-2 2xl:pb-3 text-graien'>{title}</p>
       <div className={`${no ? 'hidden' : ''}`}>
        <div className='text-lg leading-6 font-semibold flex justify-start items-center gap-2.5 text-graien'>
        form<span className='text-native font-extrabold text-xl 2xl:text-2xl flex items-center justify-center'>34 <FaEuroSign /></span>
        </div>
        <div className='flex justify-between items-center py-1 xl:py-2 2xl:py-3'>
            {dataCard?.map((i ,n:number)=>{
              return(
                <div key={n} className='flex justify-between items-center gap-2'>
            <Image src={i.image}
            alt ='date'/>
            <p className='text-base font-semibold text-native opacity-70'>{i.par}</p>
            </div>
              )
            })}
            </div>
            </div>
        <Pargraph18 par={par} />


        </div>
      
    </div>
  )
}
