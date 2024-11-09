import { AiFillEyeInvisible } from 'react-icons/ai';
import img from './../assets/images/signUp/icon.svg'
export const dataInputIN=[
    {
        id:1,
        text:'Email Address' ,
        mytype:'email',
        placeholder:'Enter your email address',
        classing:true
    },
    {
        id:2,
        text:'Password' ,
        mytype:'password',
        placeholder:'Enter your password',
        icon:<AiFillEyeInvisible className='text-graien-opacity2' />,
        classing:false,
        classNew:true
    },
]
export const btnIN ='Sign In';
export const parIN ='Login';
export const par2IN ='Forgot your password?';
export const logo2IN =img;
export const altIN = 'google';
export const textIN = 'or';
export const btnTwoIN = 'Sign Up with Google';
export const  endIN = {patr1:'Already have an account?',part2:'Sign Up'};