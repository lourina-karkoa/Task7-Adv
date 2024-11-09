import React from 'react'

export default function Button({nameButton, classing}:{nameButton:string, classing:string}) {
  return (
    <button className={` ${classing ? `${classing}` : 'py-2'} px-8 rounded-5xl bg-native text-white hover:bg-white hover:text-native hover:border hover:border-native hover:duration-500 hover:ease-in-out`}>{nameButton}</button>
  )
}
