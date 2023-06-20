import React from 'react'
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import Nav from "./Nav";

const Header = () => {
  return (
  <MainHeader> 
  <div className='lol'>
  <h1 >vengeance</h1>
    <NavLink to="/">
        <img src='./images/logo.png' alt='logo'/>
    </NavLink>
  </div>
    
    <Nav/>
  </MainHeader>
  );
}




const MainHeader = styled.header`
position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  align-items: center;
  padding: 0 3rem;
  justify-content: space-between;
  z-index: 100;
  border-bottom: 2px solid #000;
  border-radius: 0 0 2rem 2rem;
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 2px 4px rgba(0, 0, 0, 0.1),
    0 10px 20px rgba(0, 0, 0, 0.1);

img {
  margin-right:10rem;
  border: 1px solid #000;
  border-radius: 50%;
  height: 8.5rem;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

}

h1{
  font-size:3.5rem;
  margin-left:3rem;
  text-transform: uppercase;
  font-family: 'Raleway', sans-serif; 
  font-weight: 700;
  color: #333;
}

.lol{
  
  display: inline-block;
  align-items: center;
  display:flex;
  gap : 5rem;
}
.logo{
    height:5rem;
}

`

export default Header
