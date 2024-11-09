import React from 'react'
import PargraphCommon from '../PargraphCommon/PargraphCommon'
import Pargraph18 from '../Pargraph18/Pargraph18'
import Image, { StaticImageData } from 'next/image'
import { FaPlus } from 'react-icons/fa'

interface dataParProps {
  id?: number,
  par:string,
}
interface dataCard {
  id?: number,
  val:string,
  dataPar:dataParProps[],
}

interface dataProps{
  par:string,
  text:string,
  title:string,
  img:StaticImageData | string,
  classing?:boolean,
  alt:string,
  data:dataCard[],
}
export default function Advertisement({par,text,img,data,title,classing,alt}:dataProps) {
  return (
    <div className='font-open-sance flex justify-between items-center w-full flex-wrap py-10 lg:pb-14 lg:pt-16 2xl:pt-29 2xl:pb-[67px] px-5 xl:px-28 full-desktop:px-[250px] gap-y-5'>
        
           <Image src={img} alt={alt} className={` ${classing ? 'w-full h-[400px] object-cover rounded-3xl md:h-auto md:w-[48%] md:max-w-[380px] lg:w-[50%] lg:max-w-[450px] xl:max-w-[480px] full-desktop:w-[43%] full-desktop:max-w-[600px]' : 'w-[280px] md:w-64 lg:w-[300px] 2xl:w-[408px]'}`}/>
        
        <div className='md:w-[48%] lg:w-[50%] full-desktop:w-[700px]'>
            <p className='text-xs lg:text-base leading-2 font-semibold lg:leading-5.5 text-graien pb-[6px] opacity-60'>{par}</p>
            <PargraphCommon par={title} />
            <div className='py-2 lg:py-4 xl:py-8'>
            <Pargraph18 par={text} />
            </div>
            <div className='flex justify-between items-center gap-5 flex-wrap'>
            {data.map((i:any , n:number)=>{
              return(
                <div key={n}>
                  <p className='text-native text-2xl lg:text-3.5xl leading-8 font-bold flex justify-start items-center'>{i.val}<FaPlus className='size-4 lg:size-5'/></p>
                  {i.dataPar.map((item:any ,index:number)=>{
                    return(<p className='text-sm lg:text-base leading-4  lg:leading-[26px] text-graien font-normal' key={index}>{item.par}</p>)
                  })}
                </div>
              )
            })}
            </div>
        </div>
    </div>
  )
}
