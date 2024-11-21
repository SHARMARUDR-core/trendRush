import React, { useState } from 'react'
import { IoIosLaptop } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoIosTabletPortrait } from "react-icons/io";
import { SlSizeFullscreen } from "react-icons/sl";
import { Link , useNavigate } from 'react-router-dom';
import { AiOutlineMessage } from "react-icons/ai";

export default function AdminView() {
    let [nav , setNav] = useState(false)
    const navigate = useNavigate()
    const [previewSize , setPreviewSize] = useState({width : 900 , height : 500 })

  return (

    <div className={`fixed  right-0 invisible lg:visible md:w-8/12 h-10/12 border-t-8 border-b-8 border-slate-700 flex justify-center items-center bg-slate-700`}>
            <nav className={ `absolute top-0 left-0 ${nav ? 'hidden' : ''} bg-slate-700 text-white w-10 h-full` }>
                <ul>
                    <abbr title = 'Computer View'>
                        <li className='text-2xl mt-3 cursor-pointer ml-2' onClick={() => setPreviewSize({width : 900 , height : 500})}
                        ><IoIosLaptop/></li>
                    </abbr>
                    <abbr title='Mobile View'>
                        <li className='text-2xl mt-3 cursor-pointer ml-2'onClick={() => setPreviewSize({width : 337 , height : 540})}><IoPhonePortraitOutline/></li>
                    </abbr>
                    <abbr title='Tablet View'>
                        <li className='text-2xl mt-3 cursor-pointer ml-2' onClick={() => setPreviewSize({width : 500 , height : 600})}><IoIosTabletPortrait/></li>
                    </abbr>
                    <abbr title='Full Screen View'>
                        <Link  href="http://localhost:5173/" onClick={() => navigate('/')}>
                            <li className='text-2xl mt-3 cursor-pointer ml-2'><SlSizeFullscreen/></li>
                        </Link>
                    </abbr>
                    <abbr title="Meassages from customers">
                        <Link  href="https://ecommerce-psi-blond.vercel.app/Inbox" onClick={() => navigate('/Inbox')}>
                            <li className='text-2xl mt-3 cursor-pointer ml-2 text-green-500'>
                                <AiOutlineMessage /></li>
                        </Link>
                    </abbr>
                </ul>
            </nav>

        <iFrame src="http://localhost:5173/" className='bg-white' name="iframe_a" title="Iframe Example" width = {previewSize.width} height = {previewSize.height}/>
        </div>
  )
}
