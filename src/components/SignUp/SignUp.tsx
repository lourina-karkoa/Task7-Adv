'use client'
import React, { useContext } from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { IoMdClose } from 'react-icons/io'
import Image, { StaticImageData } from 'next/image'
import { AppContext } from '../StateLogUp/StateLogUp'
interface dataCard {
  id: number,
  text: string,
  placeholder: string,
  mytype: string,
  classing: boolean,
  icon?:JSX.Element,
  classNew?:boolean,
}
interface data {
  par: string,
  btn: string,
  show: boolean,
  logo2: StaticImageData | string,
  alt: string,
  text: string,
  btnTwo: string,
  par2 ?: string,
  dataInput: dataCard[],
  end: { patr1: string, part2: string },
}
export default function SignUp({ dataInput, btn, par, show, logo2, alt, text, btnTwo, end ,par2}: data) {
  const { showLogUp, setShowLogUp, showLogIn, setShowLogIn } = useContext(AppContext);
  const { closeLogUp, closeLogIn } = useContext(AppContext);
  function changeState(val:string) {
    console.log(val);
    
    if(val === 'Sign Up'){
      setShowLogIn (false)
      setShowLogUp(true)
    }
    else if(val === 'Log In'){
      setShowLogUp(false)
      setShowLogIn (true)
    }
    
  }
  function handleClose() {
    if (showLogUp == true) {
      closeLogUp();
    } else if (showLogIn == true) {
      closeLogIn();
    }
  }
  

  return (
    <div className='bg-graien-opacity fixed w-full h-screen z-[10000] top-0 left-0 flex flex-col justify-center items-center'>
      <div className='bg-white font-open-sance px-5 lg:px-10 xl:px-15 py-2 md:py-3 lg:py-5 2xl:py-10 rounded-3xl z-50'>
        <div className='w-[300px] md:w-[370px] flex flex-col gap-2 lg:gap-3 2xl:gap-5'>
          <div className='text-graien flex justify-between items-center'><p className='font-bold text-xl md:text-2xl lg:text-[32px] xl:leading-[44px]'>{par}</p>
          <IoMdClose 
          onClick={()=>handleClose()}
          className='text-graien-opacity2 cursor-pointer' /></div>
          <form className='flex flex-col justify-center items-start gap-2 lg:gap-3 2xl:gap-5 w-full'>
            {dataInput.map((item, index) => {
              return (
                <Input 
                key={index}
                text={item.text}
                mytype={item.mytype} 
                placeholder={item.placeholder}
                classing={item.classing} 
                icon={item.icon}
                classNew={item.classNew}
                />
              )
            })}
            {show ? <p className='text-graien-opacity2 text-sm w-full text-end'>{par2}</p> :<div>
              <input type="checkbox" id="have-bicke" value="i have bick" />
              <label htmlFor="have-bicke" className='text-sm text-graien-opacity2'> I agree with <span className='text-native'>Terms</span> and <span className='text-native'>Privacy</span></label>
            </div>}
            <div className='flex flex-col justify-center items-center gap-[2px] md:gap-1 2xl:gap-2 w-full'>
              <Button nameButton={btn} classing='w-full h-[40px] h-[35px]' />
              <p className='text-graien-opacity2 text-sm'>{text}</p>
              <button className='w-full rounded-3xl text-graien-opacity2 h-[35px] md:h-[40px] xl:h-[45px] text-sm md:text-base xl:text-lg font-semibold px-6 flex justify-between items-center border'>
                <Image className='size-4 md:size-auto' src={logo2} alt={alt} />
                <span className="w-[90%] text-center">{btnTwo}</span>
              </button>
            </div>
          </form>
          <p className='text-sm md:text-base font-normal text-graien w-full text-center'>{end.patr1}
          <span className='text-native cursor-pointer' onClick={()=>changeState(end.part2)}>{end.part2}</span></p>
        </div>
      </div>
    </div>
  )
}
