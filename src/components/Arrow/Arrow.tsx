import React from 'react'
import { GrNext, GrPrevious } from 'react-icons/gr'

export default function Arrow({next} :{next:boolean}) {
  return (
    <div className={`${next ? 'bg-arrow' : 'bg-native'} size-10 md:size-[50px] rounded-full flex justify-center items-center`}>
        {next ? <GrPrevious className='text-graien'/>  :  <GrNext className='text-white' />}
    </div>
  )
}
