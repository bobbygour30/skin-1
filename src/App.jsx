import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ShowCase from './components/ShowCase'
import LogoSlider from './components/LogoSlider'
import HIFUFeatureComponent from './components/HIFUFeatureComponent'
import ProtocolPrecisionSection from './components/ProtocolPrecisionSection'
import ScienceBehindHIFU from './components/ScienceBehindHIFU'
import HIFUStepByStep from './components/HIFUStepByStep'
import RibbonStrip from './components/RibbonStrip'
import RealPeopleRealLift from './components/RealPeopleRealLift'
import AftercareSection from './components/AftercareSection'
import DermatologistSection from './components/DermatologistSection'
import HifuFAQSection from './components/HifuFAQSection'
import HifuConsultationForm from './components/HifuConsultationForm'
import HifuMediaShowcase from './components/HifuMediaShowcase'
import SatyaFacilitySection from './components/SatyaFacilitySection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ShowCase />
      <LogoSlider />
      <HIFUFeatureComponent />
      <ProtocolPrecisionSection />
      <ScienceBehindHIFU />
      <HIFUStepByStep />
      <RibbonStrip />
      <RealPeopleRealLift />
      <AftercareSection />
      <DermatologistSection />
      <HifuFAQSection />
      <HifuConsultationForm />
      <HifuMediaShowcase />
      <SatyaFacilitySection />
      <Footer />
    </div>
  )
}

export default App