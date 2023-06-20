import React from 'react'
import Hero from './components/Hero';
import { useProductContext } from './context/productcontext';

const About = () => {


  const {myName} = useProductContext();


  const data = {
    name:"SAGA OF DEMOLITION",
    about:"Nikrobber is an imaginative and captivating domain that exists purely in"+
          "the realm of creativity and invention. It is a place where imagination knows"+
          "no bounds, and possibilities are endless.In the Nikrobber domain, fantastical" +
           "creatures roam, magical landscapes flourish, and extraordinary adventures await at every turn.",
    image:"images/cover2.png"
  };

  return  (
    <>
     {myName}
     <Hero myData={data}/>
    </>
  );
   
  
}

export default About
