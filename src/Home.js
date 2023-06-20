import React from 'react';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Services from './components/Services';
import FeatureProducts from './components/FeatureProducts';

const Home = () => {

  const data = {
    name: "Nikrobber",
    about: "In this domain, one might encounter towering castles floating in the sky, " +
      "mythical beings with extraordinary powers, or enchanted forests teeming with " +
      "mystical creatures. It is a place where dreams become tangible, and the impossible " +
      "becomes possible.",
    image:"images/cover.jpg"
  };
  
  return (
  <>
  <Hero myData={data}/>
  
  <Services/>
  <FeatureProducts/>
  <Partners/>
  </>
  );
}



export default Home
