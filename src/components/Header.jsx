import React, { useState } from 'react'

import { RxCaretDown } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";      //----import all icon from "react icon" website
import { FaHandsHelping } from "react-icons/fa";
import { MdAssignmentInd } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";



function Header() {
    //react me kisi bhi chiz ko manage karna chahte ho to uski state ko manage kro
    const [toggle, settoggle] = useState(false);

    const showsideMenu=()=>{
        settoggle(true);
    }

    const hidesideMenu=()=>{
        settoggle(false);
    }

    const navData = [
        {
            icon:<CiSearch/>,
            name:"Search"
        },
        {
            icon:<BiSolidOffer />,
            name:"Offer",
            sup:"New"
        },
        {
            icon:<FaHandsHelping />,
            name:"Help"
        },
        {
            icon:<MdAssignmentInd />,
            name:"Sign In"
        },
        {
            icon:<FiShoppingCart />,
            name:"Card"
        },
    ]

  return ( 
    <>
    {/*+++++ ye overlay ka div he puri screen cover kar lega ++++++++ */}

    <div onClick={hidesideMenu} className='black-overlay w-full h-full fixed duration-500' style={{
        opacity: toggle ? 1 : 0,
        visibility: toggle ? "visible" : "hidden",
        zIndex: toggle ? 999 : 0
    }}>

        {/*++++++++ ye overlay ke andar div bana diya left side menu show karne ke liye+++++++++ */}

        <div onClick={(e)=>{
            e.stopPropagation()  //-------ye property menu pe click karne pe menu band na ho use rok rha he

        }} className='w-[500px] bg-white h-full absolute duration-[600ms]' style={{
            left: toggle ? '0%' : '-100%'  //-----------------------------------------------This is for sliding animation
        }}>   
        </div>

    </div>

    <header className='p-[15px] shadow-xl text-gray-500'>
        <div className='max-w-[1200px] mx-auto flex items-center'> 

            <div className='w-[100px] '>
                <img src="images/logo.png" alt="" className='w-full'/>
            </div>

            <div className='text-xl'> <span className='font-bold border-b-[3px] border-[black]'>Rehti </span> Salkanpur ,
             Narmadapuram , India <span>  </span> 
             <RxCaretDown onClick={showsideMenu} fontSize={25} className='inline font-bold text-[#fc8019] cursor-pointer' />
             </div>

             {/*+++++++++++ nav div banaya then usme dynamically array ki help se icon and name show kara rhe+++++++++++++ */}

             <nav className='flex list-none gap-10  ml-auto text-[18px] font-semibold'>
             {
                navData.map((elem,indx)=>{
                   return <li className='flex items-center gap-2 cursor-pointer hover:text-[green]'>
                            {elem.icon}
                            {elem.name}

                            <sup>{elem.sup}</sup>    {/* sup tag is used to put text in the form of exponential....ye offer bale data me upar new laga dega */}
                          </li>
                })
             }
             </nav>

        </div> 
    </header>
    </>
  )
}

export default Header