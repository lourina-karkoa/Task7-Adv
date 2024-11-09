import React from 'react'
import CardDestinantions from '../CardDestinantions/CardDestinantions'
import image1 from './../../assets/images/homeCard/Rectangle1.png'
import image2 from './../../assets/images/homeCard/Rectangle2.png'
import image3 from './../../assets/images/homeCard/Rectangle3.png'
import image4 from './../../assets/images/homeCard/Rectangle4.png'
export default function HomeSection5() {
    const data =[
        {id:1,image:image3,alt:'pike',title:'Bike and rickshaw rental',par:'Book your quality vehicle quickly for an hour or all day!'},
        {id:2,image:image2,alt:'team',title:'Guided tour of the countryside',par:'Live the real Lucchese experience by visiting the suburbs by bike!'},
        {id:3,image:image4,alt:'taxi driver',title:'Taxi and NCC service',par:'Do you need not only a bike but also a driver? Then you have found the right place!'},
        {id:4,image:image1,alt:'bus',title:'Bus Package',par:'Do you need not only a bike but also a driver? Then you have found the right place!'},
    ]
  return (
    <div className='font-open-sance grid grid-cols-1 md:grid-cols-2 justify-items-center xl:flex justify-between items-start  py-10 md:py-14 2xl:pt-29 2xl:pb-15 gap-7 xl:gap-1 px-5 xl:px-28 full-desktop:px-[250px]'>
        {data.map((item , index)=>{
            return( 
           <div key={index}>
             <CardDestinantions no={true} title={item.title} par={item.par} image={item.image} alt={item.alt}/>
           </div>
        )
        })}
    </div>
  )
}
