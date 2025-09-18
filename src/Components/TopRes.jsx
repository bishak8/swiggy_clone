import React, { useEffect, useState } from 'react'
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi"
import Card from './Card'

const TopRes = () => {
    const [slide, setSlide] = useState(0);
    const[data, setData] = useState([]);
    
    const fetchTopRes = async () => {
        const response = await fetch('http://localhost:5000/top-restaurant-chains');
        const apiData = await response.json();
        setData(apiData);
    }

    useEffect(
        () => {
            fetchTopRes();
        }, []
    )

    const nextSlide = () =>{
        console.log(data.length);
        if(slide > 1){
            return false;
        }
        setSlide(slide+0.475);
    }
    const prevSlide = () => {
        if(slide == 0) return false;
        setSlide(slide-0.475);
    }

    return (
        <div>
            <div className='max-w-[1200px] mx-auto overflow-hidden'>
                <div className='flex my-3 items-center justify-between'>
                    <div className='text-[25px] font-bold'>Top resturent chains in Chingrighata</div>
                    
                    <div className='flex'>
                        <div className='flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer'onClick={prevSlide}>
                            <HiArrowSmLeft /></div>
                        <div className='flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer'onClick={nextSlide}>
                            <HiArrowSmRight /></div>
                    </div>
                </div>
                <div style={{
                            transform:`translateX(-${slide * 100}%)`
                        }}
                        className='flex gap-5  shrink-0  duration-500 '>
                    {
                        data.map(
                            (d, i) => {
                                return <Card {...d} key ={i}/>
                            }
                        )
                    }
                </div>
                <hr className='my-2 border[1px]'/>
            </div>
        </div>
    )
}

export default TopRes
