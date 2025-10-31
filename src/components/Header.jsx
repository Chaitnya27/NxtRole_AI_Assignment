import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    const[open,setOpen]=useState(false);


  return (
    <header className='bg-white shadow-sm'>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/hero" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-linear-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
            N
          </div>
          <span className="font-semibold text-lg">NxtRole.AI</span>
        </Link>

       {/* For DeskTop */}
        <nav className='hidden md:flex gap-6 items-center'>
            <NavLink to="/hero" className={({isActive})=>
            isActive
            ? "text-blue-600 font-bold underline"
            : "text-gray-600 hover:text-blue-600"
            }>
            Home
            </NavLink>
            <NavLink to="/about" className={({isActive})=>
            isActive
            ? "text-blue-600 font-bold underline"
            :"text-gray-600 hover:text-blue-600"
            }>
            About
            </NavLink>
            <NavLink to="/features" className={({isActive})=>
            isActive
            ? "text-blue-600 font-bold underline"
            :"text-gray-600 hover:text-blue-600"
            }>
              Features
              </NavLink>
            <NavLink to="/contact" className={({isActive})=>
            isActive
            ? "text-blue-600 font-bold underline"
            :"text-gray-600 hover:text-blue-600"
            }>
            Contact
            </NavLink>
            <Link to='/contact'
            className='ml-2 px-4 py-2 rounded bg-linear-to-r from-blue-500 to-indigo-600 text-white'
            >
            Get Started
            </Link>


        </nav>

        {/*  Mobile  Toggle*/}
        <button className='md:hidden hover:font-bold hover:caret-black'onClick={() => setOpen(!open)}>
         ☰
        </button>   
        </div>

        {/* for Mobile */}
        {open &&(
            <div className='md:hidden bg-white border-t '>
                <div className='px-6 py-4 flex flex-col '>
                <NavLink to='/hero' onClick={()=> setOpen(false)} className={({isActive})=> isActive ?"text-blue-600 font-bold":  "text-gray-600"}>Home</NavLink>
                <NavLink to='/about' onClick={() =>setOpen(false)} className={({isActive})=> isActive ?"text-blue-600 font-bold":  "text-gray-600"}>About</NavLink>
                <NavLink to='/features' onClick={() =>setOpen(false)} className={({isActive})=> isActive ?"text-blue-600 font-bold":  "text-gray-600"}>Feature</NavLink>
                <NavLink to='/contact' onClick={() =>setOpen(false)} className={({isActive})=> isActive ?"text-blue-600 font-bold":  "text-gray-600"}>Contact</NavLink>
                </div>

            </div>
        )}

    </header>
  )
}

