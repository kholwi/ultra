import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick1 = () => setNav(!nav)

    return (
        <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>ULTRA</h1>
                    <ul className='hidden md:flex'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Help!</li>
                    </ul>
                </div>
                <div className='hidden md:flex pr-4'>
                    <Link to="/Login">
                        <button className='bg-transparent text-yellow-700 px-8 py-3 mb-4'>Log In</button>
                    </Link>
                    <button className='bg-transparent text-yellow-700 px-8 py-3 mb-4'>Start Here!</button>
                </div>
                <div className='md:hidden mr-4' onClick={handleClick1}>
                    {!nav ? <MenuIcon className='w-5'/> : <XIcon className='w-5' />}
                </div>
            </div>
            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
                <li className='border-b-2 border-zinc-300 w-full'>Home</li>
                <li className='border-b-2 border-zinc-300 w-full'>About Us</li>
                <li className='border-b-2 border-zinc-300 w-full'>Contact</li>
                <li className='border-b-2 border-zinc-300 w-full'>Help!</li>
                <div className='flex flex-col my-4'>
                    <Link to="/Login">
                        <button className='bg-transparent text-yellow-700 px-8 py-3 mb-4'>Log In</button>
                    </Link>
                    <button className='px-8 py-3'>Start Here!</button>
                </div>
             </ul>
        </div>
    )
}

export default Navbar
