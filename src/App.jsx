import './App.css';
import Navbar from './components/navbar';
import HeroSection from './components/heroSection';
import ServicesSection from './components/serviceSection';
import CaseStudySection from './components/caseStudySection';
import ChatBubble from './components/chatBubble';
import WhyChooseUsSection from './components/whyChooseUs';
import Testimonials from './components/testimonials';
import Clients from './components/clients';
import ContactSection from './components/contactSection';
import Footer from './components/footer';

const App =()=> {
  return(
    <>
    <div classname="w-full">
      <Navbar/>
      <HeroSection/>
      <ServicesSection/>
      <CaseStudySection/>
      <WhyChooseUsSection/>
      <Testimonials/>
      <Clients/>
      <ContactSection/>
      <Footer/>
      <ChatBubble/>
    </div>
    </>
  );
}

export default App;
