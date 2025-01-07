import React from 'react'
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineCall } from "react-icons/md";



const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl' data-aos= "zoom-in-up">Get in touch</h2>
                <p className='text-grey-600 text-[18px] pt-2' data-aos= "zoom-in-up">
                    For any quairy , Contact Me by submittion
                </p>
                 <div className='flex gap-3 items-center'data-aos= "zoom-in-up" >
                <IoMailOutline size={30} /> muqadas123@gmail.com
                </div>
                <div className='flex gap-3 items-center' data-aos= "zoom-in-up" >
                <MdOutlineCall size={30} /> (021)-234-675
                </div>
            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1' data-aos= "zoom-in-up">
                    <label htmlFor='name'>Name</label>
                    <input type='text'
                    className='h-[40px] bg-transparent border border-accent '
                    id='name'/>
                </div>
                <div className='flex flex-col gap-1' data-aos= "zoom-in-up">
                    <label htmlFor='email'>Email</label>
                    <input type='text'
                    className='h-[40px] bg-transparent border border-accent '
                    id='Email'/>
                </div>
                <div className='flex flex-col gap-1' data-aos= "zoom-in-up">
                    <label htmlFor='message'>Message</label>
                    <textarea 
                    className=' bg-transparent border border-accent '
                    id='message' rows={8}>
                    </textarea>
        
                </div>
                <button className='bg-accent p-2 px-6' data-aos= "zoom-in-up">Submit</button>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
