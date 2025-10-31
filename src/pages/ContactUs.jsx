import React, { useState } from 'react'

export default function ContactUs() {
    const[info,setInfo]=useState({
        name:"",
        email:"",
        message:""
    });
    const handleInput=(e)=>{
        setInfo({
            ...info,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("Thanks! Your message has been received.");
        setForm({ name: "", email: "", message: "" });
    }
  return (
    <div className='bg-blue-200'>
    <section className='flex justify-center items-center min-h-screen bg-gray-100'>
        
            <form 
            onSubmit={handleSubmit}
            className='bg-white shadow-lg rounded-lg flex flex-col gap-3 hover:shadow-neutral-800 p-8 w-full max-w-md'>
                <h2 className='text-2xl text-center font-bold mb-6'>Contact Us</h2>
                <input 
                type="text" 
                name="name"
                 placeholder='Enter Name'
                 className='border p-3 rounded font-sans'
                 onChange={handleInput}
                 required
                 />
                <input 
                type="email" 
                name="email" 
                placeholder='Enter Email'
                className='border p-3 rounded font-sans'
                onChange={handleInput}
                required
                />
                <textarea 
                name="message"
                rows="4"
                placeholder='Enter Your Message'
                className='border p-3 rounded '
                onChange={handleInput}
                required></textarea>

                <button 
                type='submit'
                className='bg-blue-400 py-3 px-5 text-white rounded-xl hover:bg-blue-800 cursor-pointer'>Submit</button>
            </form>
        
      
    </section>
    </div>
  )
}
