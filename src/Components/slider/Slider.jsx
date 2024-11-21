import React, { useState, useEffect } from 'react';
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { FaCircleArrowRight } from "react-icons/fa6";
import SliderCard from './SliderCard';

export default function Slider() {
    const [ posterData , setPosterData ] = useState([])
    useEffect(() => {
        fetch('https://ecommerce-psi-blond.vercel.app/poster')
        .then(res => res.json())
        .then(data => setPosterData(data))
    })

    const [slide, setSlide] = useState(0);
    const [isSliding, setIsSliding] = useState(true); // Control auto-sliding

    function left() {
        setSlide(slide === 0 ? posterData.length - 1 : slide - 1);
    }

    function right() {
        setSlide(slide === posterData.length - 1 ? 0 : slide + 1);
    }

    useEffect(() => {
        if (isSliding) {
            const sliderID = setTimeout(() => {
                setSlide((prev) => (prev === posterData.length - 1 ? 0 : prev + 1));
            }, 1500);

            return () => clearTimeout(sliderID); 
        }
    }, [slide, isSliding]);

    function pauseSlider() {
        setIsSliding(false);
        setTimeout(() => {
            resumeSlider()
        } , 500)
    }

    function pauseSliderHover() {
        setIsSliding(false)
    }

    function resumeSlider() {
        setIsSliding(true);
    }
    
    return (
        posterData.length === 0 ? '' :
        <div className='w-screen h-96 bg-black hidden overflow-x-hidden flex-wrap relative sm:flex' 
        onMouseOver={() => pauseSliderHover()}
        onMouseLeave={() => resumeSlider()}
        >
            {        
                <SliderCard posterData={posterData[slide]} />
            }

            <button onClick={() => { pauseSlider(); left(); }} className=' text-white absolute top-48 left-10 text-2xl'>
                <BsArrowLeftCircleFill />
            </button>

            <button onClick={() => { pauseSlider(); right(); }} className='absolute top-48 right-10 text-2xl'>
                <FaCircleArrowRight />
            </button>

        </div>
    );
}
