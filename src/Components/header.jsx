import React, { useState } from 'react'
import { MdExpandMore } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { MdPersonOutline } from "react-icons/md";
import { TbPaperBag } from "react-icons/tb";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const showSideMenu = () => {
        setToggle(true);
    }
    const hideSideMenu = () => {
        setToggle(false);
    }
    const links = [
        {
            icon: <IoSearch />,
            name: "Search"
        },
        {
            icon: <RiDiscountPercentLine />,
            name: "Offers"
        },
        {
            icon: <IoHelpBuoyOutline />,
            name: "Help"
        },
        {
            icon: <MdPersonOutline />,
            name: "Sign in"
        },
        {
            icon: <TbPaperBag />,
            name: "Cart"
        }

    ]
    return (
        <>
            <div className='black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu} style={{
                opacity: toggle ? 1 : 0,
                visibility: toggle ? 'visible' : 'hidden'
            }}>
                <div onClick={(e) => {
                        e.stopPropagation();
                    }}></div>
                <div className='w-[500px] bg-white h-full absolute duration[500ms]'
                    style={{
                        left: toggle ? '0%' : '-100%'
                    }}
                ></div>
            </div>
            <header className='p-[15px] shadow-xl'>
                <div className='max-w-[1200px] mx-auto flex items-center gap-10'>
                    <div className='w-[25px]'>
                        <img src='src\assets\images\logo.svg' className='w-full' alt=''></img>
                    </div>
                    <div className=''>
                        <span className='font-bold border-b-[3px] border-black'>Chingrighata</span>
                        , Saltlake, Kolkata 700106 <MdExpandMore onClick={showSideMenu} fontSize={25} className='inline text-[#fc8019] cursor-pointer' />
                    </div>
                    <nav className='flex gap-10 list-none items-center ml-auto text-[16px] font-semibold'>
                        {
                            links.map(
                                (link, index) => {
                                    return <li key={index} className='flex cursor-pointer hover:text-[#fc8019] items-center gap-2'>
                                        {link.icon} {link.name}
                                    </li>
                                }
                            )
                        }
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header
