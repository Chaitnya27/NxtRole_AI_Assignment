import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-blue-400 text-white py-6 text-center">
    <div className="mb-2">© {new Date().getFullYear()} NxtRole.AI</div>
    <div className="flex justify-center gap-4">

     {/* Links */}
      <button
      className='hover:text-black cursor-pointer'>
       <i className="fa-brands fa-square-instagram fa-2x"></i>
      </button>
      <button
      className='hover:text-black cursor-pointer'>
      <i className="fa-brands fa-linkedin fa-2x"></i>
     </button>
      <button
      className='hover:text-black cursor-pointer'>
      <i className="fa-brands fa-github fa-2x"></i>
     </button>
      
    </div>
  </footer>
  )
}
