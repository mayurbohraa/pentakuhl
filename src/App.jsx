import Navbar from './components/Navbar'
import StickyLogoStrip from './components/StickyLogoStrip'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Philosophy from './components/Philosophy'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Achievements from './components/Achievements'
import Reviews from './components/Reviews'
import Certifications from './components/Certifications'
import Awards from './components/Awards'
import GlobalFootprint from './components/GlobalFootprint'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <StickyLogoStrip />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <AboutUs />
        <Philosophy />
        <Services />
        <WhyChooseUs />
        <Achievements />
        <Reviews />
        <Certifications />
        <Awards />
        <GlobalFootprint />
      </main>
      <Footer />
    </>
  )
}

export default App
