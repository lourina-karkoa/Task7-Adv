'use client'
import React, { useState, useEffect } from 'react'
import Dropdown from '../Dropdown/Dropdown'
import { CiSearch } from 'react-icons/ci'
import TitleHero from '../TitleHero/TitleHero'

interface data {
  id: number,
  name: string,
  icon?: React.ReactNode,
}

interface dataTabs extends data {
  noborder?: boolean,
  dropdown: string,
  dataDropDown: data[]
}

export default function LkHero({ dataButton, dataTabs, dataTwoTabs }: { dataButton: data[], dataTabs: dataTabs[], dataTwoTabs: dataTabs[] }) {
  const [dataTab, setDataTab] = useState<dataTabs[]>(dataTabs)
  const [activeTab, setActiveTab] = useState<string>(dataButton[0]?.name) 

  const handleTabClick = (name: string, tabs: dataTabs[]) => {
    setActiveTab(name)
    setDataTab(tabs)  
  }

  return (
    <div className='bg-hero-pattern bg-no-repeat bg-cover h-screen flex flex-col lg:justify-center xl:items-center justify-end'>
      <div className='w-full flex flex-col justify-start items-center px-5 xl:px-28 full-desktop:px-[250px]'>
        <TitleHero title='Enjoy in the best way!' par='Enjoy our services for your trip anytime'/>
        <div className='w-[97%] xl:w-full font-open-sance bg-wh-opacity xl:max-w-[1383px] rounded-xl'>
          <div className='w-[98%] xl:w-[97%] mx-auto py-2.5 xl:py-5'>
            <div className='flex justify-start items-center'>
              {dataButton.map((i: data, n: number) => (
                <button
                  onClick={() => handleTabClick(i.name, i.name === 'Public Tours' ? dataTabs : dataTwoTabs)}
                  className={`text-base flex justify-between items-center font-semibold px-3 gap-2.5 2xl:text-lg bg-white p-1 lg:p-2 xl:p-4 border-none  
                              ${i.id === 1 ? 'rounded-ss-xl' : 'rounded-se-xl'}
                              ${activeTab === i.name ? 'text-native' : 'bg-white-opacity6 text-white'}`}
                  key={n}
                >
                  {i.icon} {i.name}
                </button>
              ))}
            </div>
            <div className='flex flex-col items-start gap-[2px] lg:flex-row justify-between xl:items-center xl:gap-0 py-1 lg:py-4 xl:py-7 rounded-es-xl rounded-e-xl bg-white pe-3'>
              {dataTab.map((i: dataTabs, n: number) => (
                <div key={n} className={`px-4 2xl:ps-8 2xl:pe-7 flex flex-col justify-center items-center text-sm w-max lg:w-auto lg:text-lg font-semibold ${i.noborder ? '' : 'border-s'}`}>
                  <div className='flex flex-col justify-center items-start'>
                    <button className='flex gap-2 justify-start items-center text-xs xl:text-base 2xl:text-lg font-semibold'>{i.icon} {i.name}</button>
                    <div className='ps-5'>
                      <Dropdown buttonName={i.dropdown} dataDropDown={i.dataDropDown} />
                    </div>
                  </div>
                </div>
              ))}
              <div className='ml-4 xl:ml-0 size-8 lg:size-12 2xl:size-20 rounded-xl bg-native flex justify-center items-center'>
                <CiSearch className='siz-3 lg:size-5 2xl:size-8 text-white' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
