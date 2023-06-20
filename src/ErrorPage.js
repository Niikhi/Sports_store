import React from 'react';
import styled from "styled-components";
import {Button}  from "./styles/Button";
import { NavLink } from "react-router-dom";


const ErrorPage = () => {
  return (
    <Wrapper>

    <div className='container'>
    <div>
      <h2>404</h2>
      <h3>PAGE NOT FOUND</h3>

      <p>
        The page u r looking does not exist
        Please click the below button
        to redirect
      </p>

      <NavLink to ="/">
              <Button>Home</Button>
            </NavLink>
    </div>

    </div>

    </Wrapper>
    
  );
}

const Wrapper = styled.section`
max-width:80rem;
margin:5rem ;

background-color: rgba(81, 56, 238, 0.4);

.container{
  padding:8rem;
  text-align: center;
}

h2{
  font-size:9rem;
}
h3{ font-size:4rem;
margin-bottom:1rem;}
p{
  
  margin: 2rem 0;
}
`

export default ErrorPage
