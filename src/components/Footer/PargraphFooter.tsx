import React from 'react'

export default function PargraphFooter({par}:{par:string}) {
  return (
    <p className='md:text-lg font-semibold xl:font-extrabold text-xl leading-[30px]'>{par}</p>
  )
}
