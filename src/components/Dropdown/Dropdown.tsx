import React from 'react'
interface dropDown{
    id:number,
    name:string,
}
export default function Dropdown({buttonName,dataDropDown,classing,noSpace}:{buttonName:string,dataDropDown:dropDown[],classing?:string,noSpace?:boolean}) {

  return (
    
    <div className={`${classing ? 'flex flex-col gap-2 w-[280px] md:w-[170px] laptop:w-[200px] xl:w-62 2xl:w-80 ' : ''}`}>
        <label htmlFor={buttonName} className={`${classing ? 'text-sm font-medium xl:font-semibold xl:text-lg xl:leading-6 text-graien' : ''}`}>{classing}</label>   
        <select 
        id={buttonName}
        name={buttonName} 
        className={` 
        ${classing ? 'border rounded-lg  px-[2px] lg:px-5 text-xs bg-white opacity-100 h-[35px] md:h-[40px] xl:h-[50px] text-graien-opacity2': 'text-xs md:text-sm opacity-50'}
         text-base xl:text-base 2xl:text-lg full-desktop:text-xl font-semibold outline-none bg-transparent 
        ${noSpace ? 'w-15' : ''}`} defaultValue="">
          
          <option value="" disabled className='w-max text-base'>{buttonName}</option>
          {dataDropDown.map((item, index) => (
            <option className='bg-transparent text-black w-max text-base' value={item.name} key={item.id}>{item.name}</option>
          ))}
        </select>
      </div>
    
    
  )
}
