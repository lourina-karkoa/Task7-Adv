import React from 'react'
import PargraphCommon from '../PargraphCommon/PargraphCommon'
import CardPopularPackages from '../CardPopularPackages/CardPopularPackages'
import img1 from './../../assets/images/package/Rectangle1.png'
import img2 from './../../assets/images/package/Rectangle2.png'
import img3 from './../../assets/images/package/Rectangle3.png'
import img4 from './../../assets/images/package/Rectangle4.png'
import icon1 from './../../assets/images/package/icon_one day.svg'
import icon2 from './../../assets/images/package/Layer 1.svg'
import icon3 from './../../assets/images/package/Layer 2.svg'
import icon4 from './../../assets/images/package/icon_support.svg'
import icon5 from './../../assets/images/package/icon_mountain bike.svg'
import icon6 from './../../assets/images/package/Layer 1 (1).svg'
import icon7 from './../../assets/images/package/icon_water.svg'
import icon8 from './../../assets/images/package/icon_ticket.svg'
import icon9 from './../../assets/images/package/Layer 1 (2).svg'
import icon10 from './../../assets/images/package/Layer 1 (3).svg'
import icon11 from './../../assets/images/package/Layer 2 (2).svg'
import icon12 from './../../assets/images/package/icon_location.svg'
import icon13 from './../../assets/images/package/Layer 2 (3).svg'
const data = [
  {
    id: 1, href: img2, alt:'BIKE / RICKSHAW', par: 'BIKE / RICKSHAW', text: '10', dataSecound: [
    { id: 1, icon:icon1,alt:'date', title: 'Your bike for a day' },
    { id: 2, icon: icon2, alt:'map',title: 'City App' },
    { id: 3, icon: icon3,alt:'descount', title: 'Discount on Rickshaw' },
    { id: 4, icon: icon4,alt:'head-phone', title: 'Guaranteed Support' }
    ], btn: 'Book Now'
  },
  { id: 2, href: img4, alt:'BIKE TOURS', par: 'BIKE TOURS', text: '30', dataSecound:[
    { id: 1, icon:icon5,alt:'bick', title: 'A Mountain Bike Included' },
    { id: 2,icon:icon6,alt:'support', title: 'A Guide For You' },
    { id: 3, icon:icon7,alt:'botel', title: 'Bottle of water' },
    { id: 4, icon:icon4,alt:'head-phone', title: 'Guaranteed Support' }
  ], btn: 'Book Now' },
  { id: 3, href: img3, alt:'BUS TRIPS', par: 'BUS TRIPS', text: '45', dataSecound:[
    { id: 1, icon:icon8,alt:'ticket', title: 'Park ticket' },
    { id: 2,icon:icon9,alt:'bus', title: 'Return bus' },
    { id: 3, icon:icon10,alt:'friend', title: 'Companion' },
    { id: 4, icon:icon4,alt:'head-phone', title: 'Guaranteed Support' }
  ], btn: 'Book Now' },
  { id: 4, href: img1, alt:'taxi-Driver', par: 'TRANSFER', text: '10', dataSecound:[
    { id: 1, icon:icon11,alt:'driver', title: 'Personal Driver' },
    { id: 2,icon:icon12,alt:'location', title: 'Wherever You Want' },
    { id: 3, icon:icon13,alt:'pest-price', title: 'At the best price' },
    { id: 4, icon:icon4,alt:'head-phone', title: 'Guaranteed Support' }
  ], btn: 'Book Now' },
]
export default function PopularPackages() {
  return (
    <div className='font-open-sance px-5 xl:px-28 full-desktop:px-[250px] gap-1 py-10 xl:py-15 2xl:py-29'>
      <div className='text-center md:text-start'><PargraphCommon par='The Most Popular Packages' /></div>
      <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center xl:flex justify-between items-start gap-x-1 gap-y-6 pt-8 xl:pt-15'>
        {data.map((item, index) => {
          return (
            <CardPopularPackages key={index} href={item.href} alt={item.alt} par={item.par} text={item.text} dataSecound={item.dataSecound} btn={item.btn} />
          )
        })}
      </div>
    </div>
  )
}
