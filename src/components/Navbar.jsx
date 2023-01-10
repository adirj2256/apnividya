import React, { useState } from 'react'
import '../css/nav.css'
import ham from '../images/menu.png'
import close from '../images/close.png'

const Navbar = () => {

    const [nav, setNav] = useState(true)
    const navbarFun = () => {
        setNav(!nav)
    }
    return (
        <div>
            <div className="primary-navigation-container | flex justify-between h-[6.25rem] items-center">
                <div className="logo-container | bg-black w-[10.875rem] flex justify-center items-center text-4xl h-[100%]">
                    <h1 className="logo | text-white underline">apnividya</h1>
                </div>
                <nav className="m-p-nav">
                    <img src={ham} className="h-10 w-10" onClick={navbarFun} />
                    <ul className={!nav ? "m-list | fixed inset-0 bg-[#E8E8E8] flex flex-col justify-center items-center text-center p-4 ease duration-500 z-10" : "fixed right-[-100%] z-10"}>
                        <img src={close} className="h-6 w-6 absolute top-0 right-0 m-4 mx-10" onClick={navbarFun} />
                        <div className="m-heading | absolute top-0 left-0 border-2 border-black ml-10 bg-black p-4 px-8">
                            <h1 className='text-white'>apnividya</h1>
                        </div>

                        <li className='active | py-4 text-2xl  w-64 px-4'><a href="#">Home</a></li>
                        <li className=' py-4 text-2xl  w-64 px-4 border-0'><a href="#">ABOUT US</a></li>
                        <li className='py-4 text-2xl  w-64 px-4 border-0'><a href="#">login</a></li>
                        <li className='py-4 text-2xl w-64 px-4 border-0'><a href="#">sign up</a></li>
                        <div className="m-border | border-2 border-black w-3/4 bg-black mt-10"></div>
                    </ul>
                </nav>

                <nav className="p-nav | hidden">
                    <ul className="list | flex gap-12 text-center">
                        <li className='active | text-2xl w-20'><a href="#">Home</a></li>
                        <li className='text-2xl w-20'><a href="#">ABOUT US</a></li>
                        <li className='text-2xl w-20'><a href="#">login</a></li>
                        <li className='text-2xl w-20'><a href="#">sign up</a></li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}

export default Navbar
