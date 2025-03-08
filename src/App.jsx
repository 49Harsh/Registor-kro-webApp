import React, { lazy, Suspense } from 'react';

// Component imports optimized with lazy loading
const HomePage = lazy(() => import("./components/HomePage"));
const RegisterKaroUI = lazy(() => import("./components/RegisterKaroUI"));
const AboutPage = lazy(() => import("./page/AboutPage"));
const AppDownloadSection = lazy(() => import("./page/AppDownloadSection"));
const ApplicationProcessSteps = lazy(() => import("./page/ApplicationProcessSteps"));
const BlogList = lazy(() => import("./page/BlogList"));
const CompanyLogos = lazy(() => import("./page/CompanyLogos"));
const FAQComponent = lazy(() => import("./page/FAQComponent"));
const Footer = lazy(() => import("./page/Footer"));
const HappyClients = lazy(() => import("./page/HappyClients"));
const HeroSection = lazy(() => import("./page/HeroSection"));
const ServicesPage = lazy(() => import("./page/ServicesPage"));
const StatsSection = lazy(() => import("./page/StatsSection"));
const TestimonialSlider = lazy(() => import("./page/TestimonialSlider"));
const TrustedBySection = lazy(() => import("./page/TrustedBySection"));
const VideoIntroductions = lazy(() => import("./page/VideoIntroductions"));
const WhyChooseSection = lazy(() => import("./page/WhyChooseSection"));

// Loading fallback component
const LoadingFallback = () => <div className="w-full h-screen flex items-center justify-center">Loading...</div>;

function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <div className="flex flex-col min-h-screen">
        <header>
          <RegisterKaroUI />
        </header>
        
        <main>
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
        </main>
        
        <footer>
          <Footer />
        </footer>
      </div>
    </Suspense>
  );
}

export default App;