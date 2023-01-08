import React from 'react'
import heroImage from '../images/hero-image.png'
import arrow from '../images/arrow.png'
import '../css/hero.css'

function Hero() {
    return (
        <div className='hero-main-container| flex'>
            <div className="col1 | w-[70%] relative mt-24 max-md:w-[100%] max-md:text-center flex flex-col gap-8">
                <h1 className='text-8xl max-xl:text-7xl max-lg:text-5xl max-md:text-6xl'>sign in now to chat, video<br />
                    call and collaborate<br />
                    in one place</h1>
                <div className="cta-arrow-container | flex items-center gap-4 max-w-[60%] max-md:max-w-[100%] max-md:justify-center max-md:items-center">
                    <div className="arrow-image | ">
                        <img src={arrow} alt="" />
                    </div>
                    <div>
                        <button className='cta | border-4 border-black bg-[#EB00FF] text-white text-4xl px-12 py-4 -rotate-3'>signup</button>
                    </div>
                </div>

            </div>
            <div className="col2 |w-[50%] ml-[-250px] max-md:w-[0%] max-lg:ml-[-150px] max-md:hidden">
                <img src={heroImage} />
            </div>
        </div>
    )
}

export default Hero
