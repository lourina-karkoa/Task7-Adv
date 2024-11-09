'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


interface groupOfLink{
    id:number,
    path:string,
    name:string,
}
export default function LkLink({familyLink}:{familyLink:groupOfLink[]}) {
    const pathname = usePathname()

  return (
    <>
    {familyLink.map((i :groupOfLink, n :number)=>{
        return(
            <Link key={n} className={`${pathname === i.path ? 'border-b border-native' : ''}`} href={i.path}>{i.name}</Link>
        )
    })}
 
    </>
  )
}
