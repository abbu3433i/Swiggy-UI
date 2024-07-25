import React from 'react'
import { FcRating } from "react-icons/fc";

function Card(props) {
  return (
    <div className='w-[273px]  shrink-0 grow'>
        <div className=' group h-[182px] rounded-[15px] overflow-hidden relative'>

            <img className=' group-hover:scale-110 duration-150 object-cover w-full h-full'
            src={props.image} alt="" />
           
            <div className='image-overlay h-full w-full absolute top-0  flex items-end  text-[white] font-bold text-[25px] px-2'>
            {props.offer}
            </div>

        </div>

        <div className='mt-3 text-xl font-bold'> 
            {props.title}  
         </div>

         <div className='flex items-center'>
         <FcRating className='inline mr-1' />
         {props.rating} {props.minTime} - {props.maxTime} mins
         </div>

         <div className='text-slate-500 font-bold'>
            {props.name}
            <br />
            {props.place}
         </div>

    </div>
  )
}

export default Card