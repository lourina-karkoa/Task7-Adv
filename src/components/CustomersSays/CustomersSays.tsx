import React from 'react'
import PargraphCommon from '../PargraphCommon/PargraphCommon'
import Slider from '../Slider/Slider'
import { data } from './../../data/DataCustomerSay'
export default function CustomersSays() {
  return (
    <div className='font-open-sance px-5 pb-12 md:pb-15 xl:pb-20 2xl:pb-40 xl:px-28 full-desktop:px-[250px]'>
        <PargraphCommon par='Happy Customers Says' />
        <div className='pt-[70px] md:pt-15'>
        <Slider data={data} item1={2} item2={2} item3={2} item4={1} destination={false} />
        </div>
    </div>
  )
}