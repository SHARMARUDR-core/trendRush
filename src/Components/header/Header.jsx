import React, { useState } from 'react'
import { RxPerson } from "react-icons/rx";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsBag } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { CgMenuLeftAlt } from "react-icons/cg";
import { FcConferenceCall } from "react-icons/fc";
import CompanyLogo from './CompanyLogo.jpg'
import MenDropeDown from './MenDropeDown';
import WomenDropeDown from './WomenDropeDown';
import KidsDropeDown from './KidsDropeDown';
import Profile from '../profile/Profile';
import Menu from '../mobileMenu/Menu';

export default function Header() {

    let navigate = useNavigate()
    let [profileDisplay , setProfileDisplay] = useState(false)
    let [menDropedown , setMenDropeDown] = useState(false)
    let [womenDropedown , setWomenDropeDown] = useState(false)
    let [kidsDropedown , setKidsDropeDown] = useState(false)
    let [mobileMenuDisplay , setMoblieMenuDisplay] = useState(false)
    let userID  = localStorage.getItem('userID')



  return (
    <>
        <div className='w-screen h-20 bg-slate-100  overflow-hidden flex justify-between items-center p-5 sm:p-10 drop-shadow-md'>

            {/* COMPUTER */}

            <ul className='hidden sm:flex items-center gap-6 text-lg font-semibold select-none font-sans'>

                <img src={CompanyLogo} alt="Company logo" className='cursor-pointer w-28 bg-blend-lighten'
                onClick={() => navigate('/')} />

                <li className= {`dropeDown pt-5 pb-5 cursor-pointer hover:border-b-4 border-red-800 rounded-md 
                ${menDropedown ? 'text-red-800' : '' }`} onMouseEnter={() => setMenDropeDown(menDropedown ? false : true)} onMouseLeave={() => setMenDropeDown(false)}
                >MEN</li>

                <li className={`dropeDown pt-5 pb-5 cursor-pointer hover:border-b-4 border-pink-500 rounded-md
                ${womenDropedown ? 'text-pink-500' : '' }`} onMouseEnter={() => setWomenDropeDown(womenDropedown ? false : true)} onMouseLeave={() => setWomenDropeDown(false)}
                >WOMEN</li>

                <li className={`dropeDown pt-5 pb-5 cursor-pointer hover:border-b-4 border-orange-500 rounded-md
                ${kidsDropedown ? 'text-orange-500' : '' }`} onMouseEnter={() => setKidsDropeDown(kidsDropedown ? false : true)} onMouseLeave={() => setKidsDropeDown(false)}
                >KIDS</li>

            </ul>

            {/* MOBILES */}

            <div className='flex justify-start items-center text-2xl'>
                <span onClick={() => setMoblieMenuDisplay(mobileMenuDisplay ? false : true)}
                    className='sm:hidden block cursor-pointer'><CgMenuLeftAlt /></span>
                <img src={CompanyLogo} alt="Company logo" className='cursor-pointer w-28 bg-blend-lighten sm:invisible'
                onClick={() => navigate('/home')} />
            </div>

            <ul className='flex gap-4 select-none text-xl'>

                <li className='flex flex-col items-center cursor-pointer invisible sm:visible'
                    onClick={() => navigate('/contact')}>
                    <FcConferenceCall />
                <span className='text-sm'>Contact Us</span></li>

                <li className='flex flex-col items-center cursor-pointer invisible sm:visible'
                    onClick={() => setProfileDisplay(profileDisplay ? false : true)}>
                    <RxPerson />
                <span className='text-sm'>Profile</span></li>

                <li className='flex flex-col items-center cursor-pointer ' 
                    onClick={() => navigate(`/wishlist/${userID}`)}>
                    <IoIosHeartEmpty />
                <span className='text-sm'>Wishlist</span></li>

                <li className='flex flex-col items-center cursor-pointer'
                    onClick={() => navigate(`/cart/${userID}`)}>
                    <BsBag />
                <span className='text-sm'>Bag</span></li>

            </ul>
        </div>

        <MenDropeDown state = {menDropedown} setState={setMenDropeDown}/>
        <WomenDropeDown state = {womenDropedown} setState={setWomenDropeDown}/>
        <KidsDropeDown state = {kidsDropedown} setState={setKidsDropeDown}/>
        <Menu display = {mobileMenuDisplay} onClick = {() => setMoblieMenuDisplay(false)}/>
        <Profile state = {profileDisplay} onClick= {() => setProfileDisplay(profileDisplay ? false : true)} /> 

    </>

  )
}
