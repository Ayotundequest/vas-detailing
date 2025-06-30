import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import heroMobile from './assets/heroMobile.jpg';
import Contact from './pages/Contact';
import Footer from './components/Footer';


export default function App() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
    <section className="relative z-20 -mt-20">
  <img
    src={heroMobile}
    alt="Red Chevrolet Camaro"
    className="w-full object-cover"
  />
</section>

       <About />
       <Services />
        <Gallery />
        <Reviews />
        <Contact />
        <Footer />
    </div>
  );
}
