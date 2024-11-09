import Image from 'next/image'
import React from 'react'
import women from './../../assets/images/orgnization/womane.png'
import Pargraph18 from '../Pargraph18/Pargraph18'
import PargraphCommon from '../PargraphCommon/PargraphCommon'
import Button from '../Button/Button'

export default function Organizations() {
  return (
    <div>
        <div className='font-open-sance bg-linear bg-cover bg-no-repeat md:mt-20 lg:mt-37 flex justify-between items-center flex-wrap gap-5 relative pt-10 md:py-15 px-5 xl:px-28 full-desktop:px-[250px]'>
          <div className='bg-pink-opacity flex flex-col items-center text-center p-7.5 gap-3 lg:gap-5 xl:gap-8 w-full md:w-[50%] lg:w-[500px] xl:w-[569px] rounded-3xl'>
                <PargraphCommon par='Get Special Offers for Organizations'/>
               <div className='px-3'>
               <Pargraph18 par="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
               </div>
                 <Button nameButton='Contact Us' classing={`2xl:w-[212px] py-2`}/>

                
            </div>

            <Image src={women} alt='womane' className='w-[280px] md:w-[320px] lg:w-[400px] md:absolute bottom-0 right-5 xl:right-28 full-desktop:right-[250px]'/>

        </div>
    </div>
  )
}
