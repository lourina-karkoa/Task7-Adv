'use client'
import React, { useEffect, useState } from 'react'
import logo from './../../assets/images/nav/logo.png'
import Image from 'next/image'
import LkLink from '../LkLink/LkLink'
import Button from '../Button/Button'
import Dropdown from '../Dropdown/Dropdown'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoClose } from 'react-icons/io5'
import SignUp from '../SignUp/SignUp'
import { dataInput, btn, par, logo2, alt, text, btnTwo, end } from './../../data/DataSignUp'
import { dataInputIN, btnIN, parIN, logo2IN, altIN, textIN, btnTwoIN, endIN, par2IN } from './../../data/DataSignIn'
import { useContext } from 'react';
import { AppContext } from '../StateLogUp/StateLogUp';

export default function Navbar() {
  const [bgcolor, setBgcolor] = useState(false);
  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY > 5) {
        setBgcolor(true);
      } else {
        setBgcolor(false);
      }
    };
    window.addEventListener("scroll", handlescroll);
  }, []);

  const { showLogUp, setShowLogUp, showLogIn, setShowLogIn } = useContext(AppContext);
  const [open, setOpen] = useState(false)
  const link = [{ id: 1, path: '/', name: 'Home' }, { id: 2, path: '/aboutus', name: 'About Us' }, { id: 3, path: '/tour', name: 'Tour Packages' }, { id: 4, path: '/contactus', name: 'Contact Us' }]
  const dataDropDown = [{ id: 1, name: 'Eng' }, { id: 2, name: 'Arabic' }, { id: 3, name: 'india' }]
  return (
    <>
      <nav 
      className={`${ bgcolor ? "shadow-xl bg-graien" : " bg-wh-opacity"} font-open-sance px-5 xl:px-28 text-base font-medium lg:text-lg full-desktop:text-xl 2xl:font-semibold full-desktop:px-[250px] h-[70px] md:h-24 2xl:h-43 w-full fixed z-40 flex justify-between items-center text-white`}>
        <Image
          src={logo}
          alt="logo"
          className='object-cover w-15 md:w-20 2xl:w-[133px]'
        />
        <div className='laptop:flex justify-between items-center gap-4 w-[71%] hidden '>
          <div className='flex gap-5 full-desktop:gap-10 text-white'>
            <LkLink familyLink={link} />
            </div>

          <div className='flex justify-start items-center gap-5 2xl:gap-5.5'>
            <Dropdown dataDropDown={dataDropDown} buttonName='Eng' noSpace={true}/>
            <div>
              <button onClick={() => setShowLogIn(true)}>Login</button>
              {showLogIn ? <SignUp dataInput={dataInputIN} show={true} btn={btnIN} par={parIN} logo2={logo2IN} alt={altIN} text={textIN} btnTwo={btnTwoIN} end={endIN} par2={par2IN} /> : ''}
            </div>
            <div onClick={() => setShowLogUp(true)}>
              <Button classing={`2xl:px-[88px] py-[6px] 2xl:py-2`} nameButton='Sign Up' />
              {showLogUp ? <SignUp dataInput={dataInput} show={false} btn={btn} par={par} logo2={logo2} alt={alt} text={text} btnTwo={btnTwo} end={end} /> : ''}
            </div>
          </div>
        </div>
        <RxHamburgerMenu onClick={() => setOpen(true)} className='size-6 md:size-8 cursor-pointer text-white laptop:hidden' />
      </nav>
      <div
        className={`pb-5 flex flex-col gap-5 h-screen justify-center items-center z-40 bg-white  duration-1000 fixed w-full ${open ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <Image
          src={logo}
          alt="logo"
          className='w-20 2xl:w-[133px]'
        />
        <div onClick={() => setOpen(false)} className='flex flex-col justify-center items-center gap-5 2xl:gap-10 text-black'>
          <LkLink familyLink={link} />
        </div>
        <div onClick={() => setOpen(false)}> <Dropdown dataDropDown={dataDropDown} buttonName='Eng' /></div>
        <div>
          <button onClick={() => setShowLogIn(true)}>Login</button>
          {showLogIn ? <SignUp dataInput={dataInputIN} show={true} btn={btnIN} par={parIN} logo2={logo2IN} alt={altIN} text={textIN} btnTwo={btnTwoIN} end={endIN} par2={par2IN} /> : ''}
        </div>
        <div onClick={() => setShowLogUp(true)}>
          <Button classing={`2xl:px-[88px] py-[6px] 2xl:py-2`} nameButton='Sign Up' />
          {showLogUp ? <SignUp dataInput={dataInput} show={false} btn={btn} par={par} logo2={logo2} alt={alt} text={text} btnTwo={btnTwo} end={end} /> : ''}
        </div>
        <IoClose
          className="size-8 text-nav dark:text-white cursor-pointer absolute bottom-5"
          onClick={() => setOpen(false)}
        />
      </div>
    </>
  )
}
