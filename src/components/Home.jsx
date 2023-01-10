import React from 'react'
import Navbar from './Navbar';
import Hero from './Hero'
import Features from './Features';
import Testimonial from './Testimonial';

function Home() {
    return (
        <div>
            <div className='main-container'>
                <Navbar />
                <Hero />
                <Features />
            </div>
            <Testimonial />
        </div>
    )
}

export default Home
