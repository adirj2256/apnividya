import React from 'react'
import heroImage from '../images/hero-image.png'
import arrow from '../images/arrow.png'
import '../css/hero.css'

function Hero() {
    return (
        <div className='hero-main-container | flex flex-col-reverse'>
            <div className="col1 | text-center mt-6">
                <h1 className='hidden'>welcome</h1>
                <h2 className='text-4xl'>
                    sign in now to chat, video call and collaborate in one place
                </h2>
                <div className="cta-arrow-container | ">
                    <div className="arrow-image | hidden">
                        <img src={arrow} alt="" />
                    </div>
                    <div>
                        <button className='cta | mt-6'>signup</button>
                    </div>
                </div>
            </div>
            <div className="col2 image-with-blob | block m-auto">
                <img src={heroImage} />
            </div>
        </div>
    )
}

export default Hero
