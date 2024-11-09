import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { IoCall } from "react-icons/io5"
import { MdEmail } from "react-icons/md"
import img from './../../assets/images/nav/logo.png'

export const dataOne =[
    {
        id:1,
        par:'Services',
        ul:[
            {
                id:1,
                text:'Bike and Rickshaw rental'
            },
            {
                id:2,
                text:'Guided Tours of Lucca'
            },
            {
                id:3,
                text:'Guided Bike Tour of Lucca'
            },
            {
                id:4,
                text:'Trip In The Tuscan Hills'
            },
            {
                id:5,
                text:'Transportation With Luxury Cars'
            },
            {
                id:6,
                text:'Wine Tours By Bus With Guide'
            },
        ]
    },
    {
        id:2,
        par:'Home',
        ul:[
            {
                id:1,
                text:'Home'
            },
            {
                id:2,
                text:'About Us'
            },
            {
                id:3,
                text:'Tour Packages'
            },
        ]
    },
    {
        id:3,
        par:'Help',
        ul:[
            {
                id:1,
                text:'Terms of Use'
            },
            {
                id:2,
                text:'Provicy Policy'
            },
        ]
    },
    {
        id:4,
        par:'Contacts',
        ul:[
            {
                id:1,
                text:'Piazza Napoleone, Lucca, Tuscany',
                icon:<FaLocationDot className="text-native me-1 xl:me-2.5 size-5"/>
            },
            {
                id:2,
                text:'+39 346 368 5708',
                icon:<IoCall className="text-native me-1 xl:me-2.5 size-5"/>
            },
            {
                id:3,
                text:'	italiainlimo@gmail.com',
                icon:<MdEmail className="text-native me-1 xl:me-2.5 size-5"/>
            },
        ]
    },
]

export const dataThree =[
    {
        id:1,
        par:'Social Media',
        ul:[
            {
                id:1,
                icon:<FaTwitter />
            },
            {
                id:2,
                icon:<FaFacebookF />
            },
            {
                id:3,
                icon:<FaInstagram />
            },
        ]
    },
   
]
export const endtext='Copyright © 2022.  All rights reserved.'
export const logo = img;
export const alt = 'logo'

// ,dataThree,dataTwo