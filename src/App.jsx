
import { useState } from 'react'
import './App.css'
import About from './Components/about/About'
import Campus from './Components/campus/Campus'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Programs from './Components/programs/Programs'
import Testimonial from './Components/Testimonials/Testimonial'
import Titile from './Components/title/Titile'
import VideoPlayer from './Components/videoplayer/VideoPlayer'

function App() {
  const[playstate,setplaystate]=useState(false);

  return (
    <>
    <div>
      <Navbar/>
      <Hero/>
      
      <div className="container">
        <Titile subtitle="Our PROGRAM" title="What we offer"  />
        <Programs  />
        <About setplaystate={setplaystate}/>
        <Titile subtitle="Gallery" title="Campus Photos"  />
        <Campus/>
        <Titile subtitle="TESIMONIALS" title="What students says"  />
        <Testimonial/>
                <Titile subtitle="Contact us" title="Get it touch"  />
                <Contact/>
                <Footer/>


      </div>
      <VideoPlayer playstate={playstate} setplaystate ={setplaystate} />
    </div>
     
    </>
  )
}

export default App
