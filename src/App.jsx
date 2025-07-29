import './App.css'
import Navbaar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Workflowsection from './components/Workflowsection'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
 


function App() {
 
 
  return (
    <>
    
      <div>
      <Navbaar />
      <div className="max-w-7xl mx-auto pt-20 px-6 text-center justify-center">
      <HeroSection/>
      <FeatureSection/>
      <Workflowsection />
      <Pricing/>
      <Testimonials/>
      <Footer/>

      </div>
       </div>
    </>
  )
}

export default App
