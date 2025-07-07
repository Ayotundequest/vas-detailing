import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import Quote from './pages/Quote';
import Appointment from './pages/Appointment';
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function App() {
  useEffect(() => {
  AOS.init({
    duration: 1000, // Animation duration in milliseconds
    once:false,     // Only animate once per scroll
  });
}, []);
  return (
    <div>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
       <About />
       <Services />
        <Gallery />
        <Reviews />
        <Appointment />
        <Quote />
        <Footer />
        <ScrollToTopButton />
    </div>
  );
}
