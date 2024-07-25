import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Card from './Card'

function TopRest() {

    const [slide, setslide] = useState(0)  //how to make slider

    const prevSlide = () =>{
        if(slide==0) return false   //jese hi slide 0 hua rok dena return kra dena taki -(minus) me nhi cahle
        setslide(slide - 2)
    }

    const nextSlide = () =>{
        if(Restaurantlist.length - 2 == slide) return false  //jese hi slide ki length categories ki length se match hui return kar dena aage nhi chalane dena
        setslide(slide + 2)
    }


    const Restaurantlist = [
        {
            image:"./images/2b4f62d606d1b2bfba9ba9e5386fabb7.jpeg",
            "offer": "Items at ₹179",
            "title": "Pizza Hut",
            "rating": 4.2,
            "minTime": 30,
            "maxTime": 40,
            "name": "Pizzas",
            "place": "New Jodhpur"
        },
        {
            image:"./images/75d0b3ebeb56fe2484c944e94cac7a8d.jpeg",
            "offer": "₹50 OFF ABOVE ₹199",
            "title": "Janta Sweet Home",
            "rating": 4.5,
            "minTime": 35,
            "maxTime": 40,
            "name": "Sweets,South Indian",
            "place": "Shastri Nagar"
        },
        {
            image:"./images/cef5bf4cc31dc3c46a1e1b027c5627e4.jpeg",
            "offer": "₹85 OFF ABOVE ₹149",
            "title": "Parihaar Bhojnalay",
            "rating": 4.3,
            "minTime": 35,
            "maxTime": 40,
            "name": "North India, Thalis",
            "place": "Sardarpura"
        },
        {
            image:"./images/eillc7d7hbrzcuussus5.jpeg",
            "offer": "₹70 OFF ABOVE ₹149",
            "title": "Kwality Walls Frozen",
            "rating": 4.5,
            "minTime": 25,
            "maxTime": 25,
            "name": "Desserts,Ice Cream",
            "place": "Chopsani Housing Board"
        },
        {
            image:"./images/6e04be27387483a7c00444f8e8241108.jpeg",
            "offer": "₹1-5 OFF ABOVE ₹179",
            "title": "The Good Bowl",
            "rating": 4.4,
            "minTime": 30,
            "maxTime": 35,
            "name": "Biryani, North India",
            "place": "Shastri Nagar"
        },
        {
            image:"./images/w7ndo1dkkk6kf4qfz2p1.jpeg",
            "offer": "₹100 OFF ABOVE ₹499",
            "title": "NIC Ice Creams",
            "rating": 4.7,
            "minTime": 25,
            "maxTime": 30,
            "name": "Desserts,Ice Cream",
            "place": "Sardarpura"
        },
        {
            image:"./images/f1bc9ddf53de574cdc35ab2f717df234.jpeg",
            "offer": "Items at ₹109",
            "title": "Dosh Center",
            "rating": 4.0,
            "minTime": 35,
            "maxTime": 40,
            "name": "South Indian",
            "place": "Chopsani Housing Board"
        },
        {
            image:"./images/919cb3be0e7406f86f6741ebe7c30128.jpeg",
            "offer": "₹125 OFF ABOVE ₹349",
            "title": "Lunch Box - Meals and Thalis",
            "rating": 4.3,
            "minTime": 30,
            "maxTime": 35,
            "name": "Biryani, North India",
            "place": "Shastri Nagar"
        },
        {
            image:"./images/535fc9f9c135f7982317bbb6a64a1ffc.jpeg",
            "offer": "₹70 OFF ABOVE ₹249",
            "title": "McDonald's",
            "rating": 4.4,
            "minTime": 30,
            "maxTime": 35,
            "name": "American",
            "place": "Rawaton Ka Bass"
        },
        {
            image:"./images/2a41aa363a8ae1e98a4cce95c2d0c589.jpeg",
            "offer": "₹100 OFF ABOVE ₹449",
            "title": "Kajal's Cake",
            "rating": 4.5,
            "minTime": 35,
            "maxTime": 40,
            "name": "Cake",
            "place": "Chopsani Housing Board"
        }
    ]


  return (
    <div className='max-w-[1200px] mx-auto mb-[30px]'>
        <div className='flex my-5 items-center justify-between'>
        <div className='text-[25px] font-bold'>Top Resturant in Narmadapuram</div>
        <div className='flex '>

            <div onClick={prevSlide} className='h-[30px] w-[30px] bg-slate-300 rounded-full mx-2  flex items-center justify-center 
            cursor-pointer'>
            <FaArrowLeft/>
            </div>  {/*---------------------left slide arrow ke liye----------------------*/}

            <div onClick={nextSlide} className='h-[30px] w-[30px] bg-slate-300 rounded-full mx-2  flex items-center justify-center 
            cursor-pointer'>
            <FaArrowRight/>
            </div>  {/*--------------------Right slide arrow ke liye-----------------------*/}

        </div>
    </div>

    <div className='flex gap-5 overflow-hidden'>    

    {
        Restaurantlist.map((data,i)=>{
            return (
            <div style={{
                transform:`translateX(-${slide*100}%)`   //---------ye sari imges ko for ex[-100%] me move kara dega  
             }} >
                <Card {...data} key={i} />  
                </div> // [...data] karke data card me bhej diya then card me ja ke props me receive kar lenge
            )
        })
    }
            
    </div>

    < hr className='my-6 border-[2px] mt-[30px]' />


    </div>
  )
}

export default TopRest