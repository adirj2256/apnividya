import React, { useState } from 'react'
import '../css/nav.css'
import ham from '../images/menu.png'
import close from '../images/close.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (


        <div>
            <div className="primary-navigation-container | flex justify-between h-[6.25rem] items-center">
                <div className="logo-container | bg-black w-[10.875rem] flex justify-center items-center text-4xl h-[100%]">
                    <h1 className="logo | text-white underline">studspace</h1>
                </div>
                <nav className="p-nav md:block hidden">
                    <ul className="list | flex">
                        <li className='active | w-28 text-2xl text-center'><a href="#">Home</a></li>
                        <li className='w-28 text-2xl text-center'><a href="#">ABOUT US</a></li>
                        <li className='w-28 text-2xl text-center'><a href="#">login</a></li>
                        <li className='w-28 text-2xl text-center'><a href="#">sign up</a></li>
                    </ul>
                </nav>

                <nav className="m-p-nav md:hidden block">
                    <img src={ham} className="h-10 w-10" onClick={handleNav} />
                    <ul className={!nav ? "m-list | fixed inset-0 bg-[#E8E8E8] flex flex-col justify-center items-center p-4 ease-in-out duration-500 z-10" : "fixed left-[200%] ease-in-out duration-500"}>
                        <img src={close} className="h-6 w-6 absolute top-0 right-0 m-4" onClick={handleNav} />
                        <li className='active | py-4 text-2xl  w-full px-4 '><a href="#">Home</a></li>
                        <li className=' py-4 text-2xl  w-full px-4 border-0'><a href="#">ABOUT US</a></li>
                        <li className='py-4 text-2xl  w-full px-4 border-0'><a href="#">login</a></li>
                        <li className='py-4 text-2xl w-full px-4 border-0'><a href="#">sign up</a></li>
                    </ul>
                </nav>


            </div>
        </div>
    )
}

export default Navbar
