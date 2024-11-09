import React from 'react'

export default function PargraphCommon({par} : {par:string}) {
  return (
    <p className='font-extrabold text-xl lg:text-[28px] 2xl:text-3.5xl 2xl:leading-[44px] text-graien'>{par}</p>
  )
}
