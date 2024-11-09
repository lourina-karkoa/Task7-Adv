import Advertisement from "@/components/Advertisement/Advertisement";
import BookBike from "@/components/BookBike/BookBike";
import CustomersSays from "@/components/CustomersSays/CustomersSays";
import HomeSection5 from "@/components/HomeSection5/HomeSection5";
import LkHero from "@/components/LkHero/LkHero";
import Organizations from "@/components/Organizations/Organizations";
import PopularPackages from "@/components/PopularPackages/PopularPackages";
import { Metadata } from "next";
import Destinantions from "@/components/Destinantions/Destinantions";
import {data ,dataTwo} from './../data/DataBook'
import {dataButton ,dataTabs ,dataTwoTabs} from './../data/DataHero'
import {dataAdd} from './../data/Advertiement'
import {girl} from './../data/Advertiement'

export const metadata: Metadata = {
  title: "Home | Travel Now",
  description: "Explore the best travel destinations with Travel Now. Discover popular destinations, book bikes, and enjoy special offers for organizations. Browse our most popular travel packages and read reviews from our satisfied customers. Book now for an unforgettable journey!",
  authors:[{
    name:'travel-Now'
  }],
  keywords:['best company for your visit','Popular Destinantions ','Special Offers for Organizations','Services','Book Bike','Popular Packages','Happy Customers Says'],
  robots:'index, follow'
};
export default function Home() {
 
 
  return (
  <div className="">
  <LkHero dataButton={dataButton} dataTabs={dataTabs} dataTwoTabs={dataTwoTabs}/>
  <Destinantions/>
  <Advertisement 
  img={girl}
  alt='girl'
  data={dataAdd}
  par='WELCOME TO OUR SITE!'
  title="We are the best companyfor your visit" 
  text="'After decades of experience, and a whole life in Lucca, we offer you the most complete tourism service in the city. In addition to having bikes and rickshaws to have as much fun as you want, you have the choice of tour guides with whom to tour and drivers for your every need! We offer packages in the way that you get the most at the lowest price. Book with us and we will always be available for you!'"/>
  <Organizations/>
  <HomeSection5/>
  <BookBike data={data} dataTwo={dataTwo}/>
  <PopularPackages/>
  <CustomersSays/>
  </div>
  );
}
