import React from 'react'
import { data }from './../../data/DataDestination'
import Slider from '../Slider/Slider'
import PargraphCommon from '../PargraphCommon/PargraphCommon'

export default function Destinantions() {
  return (
    <div className='py-10 md:py-14 xl:py-20 2xl:py-29 font-open-sance px-5 xl:px-28 full-desktop:px-[250px]'>
      <PargraphCommon par='Explore Our Popular Destinantions' />
     <div className='pt-[70px] md:pt-15'>
     <Slider data={data} item1={4} item2={3} item3={2} item4={1} destination={true}/>
     </div>
        

    </div>
  )
}
