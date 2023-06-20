
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

import { Button } from "../styles/Button";

const Footer = () => {
  return  (
    <Wrapper>
        <section className='contact-short'>
            <div className='grid grid-two-column'>
                <div>
                    <h3>Feeling Excited !</h3>
                    <h3>Contact us now </h3>
                </div>
                <div>
                    <NavLink to="/contact">
                       <Button> Get Started </Button>
                    </NavLink>
                </div>
            </div>
        </section>

        <footer>
            <div className='container grid grid-four-column'>
                <div className='footer-about'>
                   <h3>Nikrobber</h3>
                   <p>There are Infinite chances, until I am Alive</p>
                </div>

                <div className='footer-subscribe'>
                   <form action="#">
                   <input type="email" name="email" placeholder="YOUR E-MAIL" />
                   <input type="submit" value="subscribe" />
                   </form>
                </div>

            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social-icons">
                <div> <FaDiscord className="icons" /> </div>
                <div> <FaInstagram className="icons" /> </div>
                <div> <a href="https://www.youtube.com/watch?v=lU-csIO1x0E" > <FaYoutube className="icons" /> </a></div>
              </div>
            </div>


            <div className="footer-contact">
              <h3>Call Me</h3>
              <h3>+91 6305440818</h3>
            </div>
            </div>
            
            <div className='footer-bottom'>
                <hr />
                <div className='grid grid-two-column'>
                    <p> @{new Date().getFullYear()} Nikhil. All Rights Reserved </p>
                    <div>
                         <p>PRIVACY POLICY</p>
                         <p>TERMS & CONDITIONS</p>
                     </div>
                </div>          
            </div>
        </footer>
    </Wrapper>
  );
  
}

const Wrapper = styled.section`


.contact-short{
    margin:5rem 40rem 0rem;
    max-width:80rem;
    border-radius:1rem;
    background-color:${({ theme }) => theme.colors.bg};
    padding:5rem 10rem;
    transform: translateY(50%);
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    .grid div:last-child {
        justify-self: end;
        allign-self: center
    }
}

footer
{
    
    background-color: ${({ theme }) => theme.colors.special};
    padding:12rem 0 1rem 0;

    h3{
        color: ${({ theme }) => theme.colors.blue};
        margin-bottom:1rem;

    }
    p{
        color: ${({ theme }) => theme.colors.blk};
    }

    

    .footer-social{
        h3{
            margin-left:3.5rem;
        }
        

    .footer-social-icons {
        display:flex;
        gap:2rem;


        div{
        padding: 0.7rem;
        border-radius: 1rem;
        border: 2px solid ${({ theme }) => theme.colors.blk};

        .icons{
            
          color: ${({ theme }) => theme.colors.blk};
          font-size: 2.5rem;
          position: relative;
          cursor: pointer;

        }
        }
    }
    }

    .footer-bottom {
        
    padding-top:1rem;

    hr {
      margin-bottom: 0.5rem;
      color: ${({ theme }) => theme.colors.blk};
      height: 2.3px;
    }

    .grid{
        
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    


    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom {
      padding-top: 4.8rem;
    }
  }
}

`

export default Footer
