'use client'
import React, { useEffect, useState } from 'react'
import CardDestinantions from '../CardDestinantions/CardDestinantions';
import CardHappyCustomersSays from '../CardHappyCustomersSays/CardHappyCustomersSays';
import Arrow from '../Arrow/Arrow';

export default function Slider({ item1, item2, item3, item4, data, destination }: { item1: any, item2: any, item3: any, item4: any, data?: any, destination: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(item1);

  const updateVisibleCards = () => {
    if (window.innerWidth >= 1200) setVisibleCards(item1);
    else if (window.innerWidth >= 900) setVisibleCards(item2);
    else if (window.innerWidth >= 768) setVisibleCards(item3);
    else setVisibleCards(item4);
  };

  useEffect(() => {
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      (prevIndex + 1) % data.length
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      (prevIndex - 1 + data.length) % data.length
    );
  };


  const visibleCardsArray = Array.from(
    { length: visibleCards },
    (_, i) => data[(activeIndex + i) % data.length]
  );

  return (
    <div className="w-full flex justify-center md:justify-between items-center relative">
      <div className="cursor-pointer absolute -top-[60px] left-[70px]  md:-top-[97px] md:right-0 md:left-auto" onClick={nextSlide}>
        <Arrow next={false}/>
      </div>

      <div className="overflow-hidden w-full">
        <div className="flex justify-between gap-5 items-start">

          {visibleCardsArray.map((item, index) => (

            <div key={index}>
              {destination === true ? <div key={index}>
                <CardDestinantions title={item.title} par={item.par} image={item.image} alt={item.alt} no={false} dataCard={item.dataCard} /></div>
                : <CardHappyCustomersSays key={index} href={item.href} alt={item.alt} userName={item.userName} text={item.text} />}
            </div>

          ))}
        </div>
      </div>

      <div className="cursor-pointer absolute -top-[60px] left-0 md:-top-[97px] md:right-[70px] md:left-auto" onClick={prevSlide}>
      <Arrow next={true}/>
      </div>
    </div>
  )
}
