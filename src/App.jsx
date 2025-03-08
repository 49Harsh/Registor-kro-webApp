import HomePage from "./components/HomePage"
import RegisterKaroUI from "./components/RegisterKaroUI"
import AboutPage from "./page/AboutPage"
import AppDownloadSection from "./page/AppDownloadSection"
import ApplicationProcessSteps from "./page/ApplicationProcessSteps"
import BlogList from "./page/BlogList"
import CompanyLogos from "./page/CompanyLogos"
import FAQComponent from "./page/FAQComponent"
import Footer from "./page/Footer"
import HappyClients from "./page/HappyClients"
import HeroSection from "./page/HeroSection"
import ServicesPage from "./page/ServicesPage"
import StatsSection from "./page/StatsSection"
import TestimonialSlider from "./page/TestimonialSlider"
import TrustedBySection from "./page/TrustedBySection"
import VideoIntroductions from "./page/VideoIntroductions"
import WhyChooseSection from "./page/WhyChooseSection"


function App() {


  return (
    <>
      <RegisterKaroUI />
      <HomePage />
      <TrustedBySection />
      <ServicesPage />
      <AboutPage />
      <WhyChooseSection />
      <VideoIntroductions />
      <HappyClients />
      <ApplicationProcessSteps />
      <BlogList />
      <TestimonialSlider />
      <FAQComponent />
      <AppDownloadSection />
      <StatsSection />
      <HeroSection />
      <CompanyLogos />
      <Footer />
    </>
  )
}

export default App
