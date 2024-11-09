import React from 'react'
import PargraphCommon from '../PargraphCommon/PargraphCommon'
import Image from 'next/image'
import bike from './../../assets/images/bookBike/bike.png'
import Input from '../Input/Input'
import Button from '../Button/Button'
import Dropdown from '../Dropdown/Dropdown'
interface dataProps {
    text:string,
    mytype:string,
    placeholder:string,
    classing?:boolean,
    icon?:JSX.Element,
    classNew?:boolean
}
const dataDropDown=[{id:1,name:'Service Type'}]
export default function BookBike({data,dataTwo}:{data:dataProps[],dataTwo:dataProps[]}) {
  return (
    <div className='font-open-sance bg-linear bg-cover bg-no-repeat py-7 md:py-10 2xl:pt-15 2xl:pb-[90px] w-full flex justify-center  md:justify-between items-end flex-wrap gap-y-6 px-5 xl:px-28 full-desktop:px-[250px]'>
     <div className='flex flex-col justify-center items-center pt-5 md:pt-0'>
        <PargraphCommon par='Book Now Bike'/>
        <form className='bg-pink-opacity w-[320px] md:w-[380px] laptop:w-[460px] xl:w-[560px] 2xl:w-[700px] px-4 xl:px-5 full-desktop:w-[734px] rounded-3xl mt-5 xl:mt-9 flex justify-between full-desktop:px-[34px] gap-2 xl:gap-5 py-5 full-desktop:py-7.5 full-desktop:gap-y-7.5 items-center flex-wrap'>
            {data.map((item, index)=>{
                return(
                    <div key={index}>
                        <Input text={item.text} mytype={item.mytype} placeholder={item.placeholder} />
                    </div>
                )
            })}
           <div className='flex flex-col md:flex-row justify-between items-end gap-2 xl:gap-5'>
           <Input text='Telephone Number' mytype='tel' placeholder='Enter your telephone number' />
           <div className='w-full'>
            <Dropdown  buttonName={'Service Type'} dataDropDown={dataDropDown} classing={'Service Type'}/>
           </div>
           </div>
           {dataTwo.map((item, index)=>{
                return(
                    <div key={index}>
                        <Input text={item.text} mytype={item.mytype} placeholder={item.placeholder} />
                    </div>
                )
            })}
           
           <div className='text-center w-full'>
           <Button nameButton='Book Now' classing={`2xl:w-[212px] py-[6px] 2xl:py-2`}/>
           </div>
        </form>
        
     </div>
     <Image className='w-full max-w-[420px] md:w-[325px] laptop:w-[420px] xl:w-[490px] 2xl:w-[600px]' src={bike} alt='bike'/>
    </div>
  )
}
