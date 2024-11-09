import React from 'react'
interface dataInput {
    text:string,
    mytype:string,
    placeholder:string,
    classing?:boolean,
    icon?:JSX.Element,
    classNew?:boolean
}
export default function Input({text,mytype,placeholder,classing,classNew,icon} : dataInput) {
  return (
    <div className={`flex flex-col ${classNew ? 'w-full' :''} ${classing ? 'w-full gap-1 md:gap-2' : 'gap-2'}`}>
        <label className={`text-sm font-medium xl:font-semibold xl:text-lg xl:leading-6 text-graien ${classing || classNew ? ' opacity-60' :''}`}>
            {text}
        </label>
        <div className={`${classNew ? 'flex justify-between items-center border w-full rounded-lg' :''}`}>
        <input className={`${classing ? 'border w-full' :' w-[280px] md:w-[170px] laptop:w-[200px] xl:w-62 2xl:w-80 '} ${classNew ? 'focus:outline-none' :''} bg-white px-1 text-xs lg:px-6 lg:text-base font-normal text-graien-opacity2 h-[35px] md:h-[40px] xl:h-[50px] rounded-lg `} type={mytype} placeholder={placeholder}/>
        <span className={`${classNew ? 'pe-6' : ''}`}>{icon}</span>
        </div>
    </div>
  )
}
