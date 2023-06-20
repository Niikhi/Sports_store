import React from 'react';
import styled from 'styled-components'

const Partners = () => {
  return (
    <Wrapper>
     <div className="container">
        <h3>Cheated about 1000+ companies</h3>
        <div className="brand-section-slider">
          <div className="slide">
        
            <img
              src="images/netfli.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="images/youtube.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="images/whatsapp.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="images/brand.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="images/twitter.png"
              alt="trusted-brands"
            />
          </div>
        </div>
     </div>
        
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 3rem 1rem;
  
    border-radius: 2rem;

  
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img{
    width:6rem;
    height:6rem;
  }

  .brand-section-slider {
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 2.5rem;
      display: flex;
      ${'' /* background-color: red;  */}
      
    }
  }
`;

export default Partners
