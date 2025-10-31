import React from 'react'

export default function Hero() {
  return (
    <div className=' w-full'>
    <div className='flex flex-col justify-center items-center bg-blue-100 min-h-screen py-20 text-center'>
      <h1 className='text-green-500 mb-3 text-2xl font-bold'>NxtRole.AI Career Guidance Roadmap Generator</h1>
      <p className='mb-4 text-lg '>AI-powered platform that helps students and professionals find the right career path, discover job roles, and learn skills to grow.</p>
      <button className='bg-blue-600 rounded-md shadow-md text-white px-5 py-3 hover:bg-blue-800 hover:scale-105 transition-transform duration-300'>Explore Now</button>
    </div>
    </div>
  )
}
