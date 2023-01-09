import './css/app.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Features from './components/Features';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div className='main-container'>
      <Navbar/>
      <Hero/>
      <Features/>
      <Testimonial/>
    </div>
  )
}

export default App;
