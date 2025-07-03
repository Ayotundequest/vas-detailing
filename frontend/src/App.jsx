import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import Quote from './pages/Quote';
import Footer from './components/Footer';


export default function App() {
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
        <Quote />
        <Footer />
    </div>
  );
}
