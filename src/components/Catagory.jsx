import React, { useState } from 'react'

import { FaArrowLeft , FaArrowRight} from "react-icons/fa";

function Catagory() {

    const [slide, setslide] = useState(0)  //how to make slider

    const prevSlide = () =>{
        if(slide==0) return false   //jese hi slide 0 hua rok dena return kra dena taki -(minus) me nhi cahle
        setslide(slide - 3)
    }

    const nextSlide = () =>{
        if(item.length - 8 == slide) return false  //jese hi slide ki length categories ki length se match hui return kar dena aage nhi chalane dena
        setslide(slide + 3)
    }

    

    const item = [
        {
            image:"./images/North_Indian_4.jpeg",
            "path": "north-indian"
        },
        {
            image:"./images/Pizza.jpeg",
            "path": "pizza"
        },
        {
            image:"./images/Noodles.jpeg",
            "path": "noodles"
        },
        {
            image:"./images/Pasta.jpeg",
            "path": "pasta"
        },
        {
            image:"./images/Paratha.jpeg",
            "path": "paratha"
        },
        {
            image:"./images/Biryani_2.jpeg",
            "path": "biryani"
        },
        {
            image:"./images/Burger.jpeg",
            "path": "burger"
        },
        {
            image:"./images/Cakes.jpeg",
            "path": "cakes"
        },
        {
            image:"./images/Chinese.jpeg",
            "path": "chinese"
        },
        {
            image:"./images/Chole_Bature.jpeg",
            "path": "chole-bature"
        },
        {
            image:"./images/Dosa.jpeg",
            "path": "dost"
        },
        {
            image:"./images/Gulab_Jamun.jpeg",
            "path": "gulab-jamun"
        },
        {
            image:"./images/Ice_Creams.jpeg",
            "path": "ice-creams"
        },
        {
            image:"./images/Idli.jpeg",
            "path": "idli"
        },
        {
            image:"./images/Khichdi.jpeg",
            "path": "khichdi"
        },
        {
            image:"./images/Poori.jpeg",
            "path": "poori"
        },
        {
            image:"./images/Pure_Veg.jpeg",
            "path": "pure-veg"
        },
        {
            image:"./images/Rolls.jpeg",
            "path": "rolls"
        },
        {
            image:"./images/Salad.jpeg",
            "path": "salad"
        },
        {
            image:"./images/South_Indian_4.jpeg",
            "path": "south-indian"
        }
    ]

    
    
  return (
    <>
    <div className='max-w-[1200px] mx-auto'>

    <div className='flex my-5 items-center justify-between'>
        <div className='text-[25px] font-bold'>Whats on your mind?</div>
        <div className='flex '>

            <div className='h-[30px] w-[30px] bg-slate-300 rounded-full mx-2  flex items-center justify-center 
            cursor-pointer' onClick={prevSlide}>
            <FaArrowLeft/>
            </div>  {/*---------------------left slide arrow ke liye----------------------*/}

            <div className='h-[30px] w-[30px] bg-slate-300 rounded-full mx-2  flex items-center justify-center 
            cursor-pointer' onClick={nextSlide}>
            <FaArrowRight/>
            </div>  {/*--------------------Right slide arrow ke liye-----------------------*/}

        </div>
    </div>

    <div className='flex  border-blue-600 overflow-hidden py-[20px] cursor-pointer'>
     {
        item.map((elem,indx)=>{
            return (
                 <div style={{
                    transform:`translateX(-${slide*100}%)`   //---------ye sari imges ko translateX me ex[-100%] me move kara rha he  
                 }} 
                 key={indx} className='w-[200px] shrink-0 duration 500'>
                    <img src={elem.image} alt="" />

                    </div>
            )
        })
     }
    </div>

    < hr className='my-6 border-[2px]' />

    </div>   {/*----ye margin auto bala div he-------*/}
    </>
  )
}

export default Catagory