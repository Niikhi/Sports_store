import { NavLink } from "react-router-dom";
import styled  from "styled-components";
import { Button } from "../styles/Button";



const Hero = ({myData}) => {
 
const {name,about,image} = myData;
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1> {name} </h1>
            <p>
           {about}
            </p>
            <NavLink to ="/products">
              <Button>Enter Now</Button>
            </NavLink>
          </div>

          <div>
            <figure>
                <img src={image} alt="cover " className="img-style"/>
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};


 

const Wrapper = styled.section`
  padding: 12rem 0;
  background-color: #E1D9D1;
  position: relative;
  background-image: url(./images/honeybee.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  

  img {
    min-width: 10rem;
    height: 10rem;
    position: relative; /* Add this line */
    z-index: 2; /* Add this line */
  }

  .hero-section-data {
    margin-top:8rem;
    p {
      margin: 2rem 0;
    }

    h1 {
  text-transform: capitalize;
  font-weight: bold;
  position: relative;
  display: inline-block;
}

h1::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #2B1B17;
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.3s ease-in-out;
}

h1:hover::before {
  transform: scaleX(1);
}

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  figure {
    margin-top:10rem;
    margin-left:5rem;
    position: relative;
    transition: transform 2.0s ease-in-out, border-radius 2.0s ease-in-out;
  }

  figure:hover {
    transform: rotate(360deg) scale(0.5);
    border-radius: 50%;
  }

  figure::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(45deg, #ff3d00, #ffd600);
    opacity: 0.8;
    z-index: -1;
  }

  figure::after {
    content: "";
    width: 80%;
    height: 80%;
    position: absolute;
    top: 10%;
    left: 10%;
    background-color: rgba(81, 56, 238, 0.4);
    box-shadow: 0 0 20px rgba(81, 56, 238, 0.6);
    z-index: -1;
    transform: rotate(45deg);
    animation: rotate 8s linear infinite;
  }

  figure::before,
  figure::after {
    transform-origin: center;
    z-index: 1; /* Add this line */
  }

  figure::before {
    animation: rotate-clockwise 8s linear infinite;
  }

  figure::after {
    animation: rotate-counter-clockwise 8s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(-315deg);
    }
  }

  @keyframes rotate-clockwise {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }

  @keyframes rotate-counter-clockwise {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /* Keep figure::before and figure::after visible at all times */
  figure::before,
  figure::after {
    opacity: 1;
  }

  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }

`;

export default Hero;