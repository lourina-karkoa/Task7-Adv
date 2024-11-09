import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import {dataOne,dataThree,endtext,logo,alt} from './../components/Footer/data'
import { AppProvider } from '../components/StateLogUp/StateLogUp';
import localFont from 'next/font/local'
import { Open_Sans } from 'next/font/google'
// import { SettingsProvider } from '../components/StateLogIn/StateLogIn';


export const metadata: Metadata = {
  title: "Travel Now",
  description: "Get ready for your next adventure with Travel Now! Discover top travel destinations, book instant tours, and enjoy exclusive offers. With Travel Now, the travel experience has become easier and faster. Start your journey today!",
  authors: [{
    name: 'Travel Now'
  }],
  keywords: [
    'travel destinations', 
    'adventure travel', 
    'exclusive travel offers', 
    'quick travel booking', 
    'Travel Now', 
    'top travel company', 
    'customer reviews', 
    'corporate travel deals', 
    'travel packages',
    'book your trip'
  ],
  robots: 'index, follow'
};
const openSans = Open_Sans({
  weight : ['400' , '500' ,'600' , '700' ,'800'],
  subsets: ['latin'],
  variable: '--open-sance',
})
const podcast = localFont({
  src : [
    {
      path : './../assets/fonts/Podcast.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable : "--podcast-font"
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${podcast.variable}  ${openSans.variable}`}>
      <AppProvider>
        <header>
          <Navbar/>
        </header>
        <main>
        {children}
        </main>
        <footer>
          <Footer dataOne={dataOne} dataThree={dataThree} endtext={endtext} logo={logo} alt={alt}/>
        </footer>
        </AppProvider>
      </body>
    </html>
  );
}
