import { AiFillEyeInvisible } from 'react-icons/ai';
import img from './../assets/images/signUp/icon.svg'
export const dataInput=[
    {
        id:1,
        text:'Name and Surname' ,
        mytype:'text',
        placeholder:'Enter your name and surname',
        classing:true
    },
    {
        id:2,
        text:'Email Address' ,
        mytype:'email',
        placeholder:'Enter your email address',
        classing:true
    },
    {
        id:3,
        text:'Password' ,
        mytype:'password',
        placeholder:'Enter your password',
        icon:<AiFillEyeInvisible className='text-graien-opacity2' />,
        classing:false,
        classNew:true
    },
]
export const btn ='Sign Up';
export const par ='creat acount';
export const logo2 =img;
export const alt = 'google';
export const text = 'or';
export const btnTwo = 'Sign Up with Google';
export const  end = {patr1:'Already have an account?',part2:'Log In'};

