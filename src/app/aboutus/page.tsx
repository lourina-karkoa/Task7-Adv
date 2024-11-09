import AboutHero from '@/components/AboutHero/AboutHero'
import Advertisement from '@/components/Advertisement/Advertisement'
import React from 'react'
import Advantages from '@/components/Advantages/Advantages'
import { Metadata } from 'next'
import CustomersSays from '@/components/CustomersSays/CustomersSays'
import {data} from './../../data/AdvertisementAbot'
import {dataAddvantge} from './../../data/DataAdvantages'
import {house} from './../../data/AdvertisementAbot'
export const metadata: Metadata = {
  title: "About Us | Travel Now",
  description: "Learn more about Travel Now - a leading company in travel planning. We are dedicated to offering the best travel experience through diverse destinations, flexible options, and exceptional customer service. Discover why thousands of travelers trust Travel Now.",
  authors:[{
    name:'travel-Now'
  }],
  keywords:['advantages Travel with Travel-Now','About Travel Now','Happy Customers SaysHappy Customers Says','Travel Now Team','Our Services','Leading Travel Company'],
  robots:'index, follow'
};

export default function Page() {
  
  return (
    <div>
      <AboutHero btn='View our Tour Packages'/>
      <Advertisement 
       img={house} 
       alt='houses'
       classing={true}
       data={data}
       par='WELCOME TO OUR SITE!'
       title="We Are The Center Of LuccaTo Offer You The Best" 
       text="We are right in the center of Lucca to offer you the real city life! With years of experience in practically every tourism sector, with us you can find complete packages at the lowest price, to travel and learn and have fun all without worries and without stress. What are you waiting for, book a bright evening, a trip to beautiful Tuscany or a personal tour for you!"/>
       <Advantages data={dataAddvantge} />
       <CustomersSays/>
    </div>
  )
}
