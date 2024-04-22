import React from 'react'
import styled from 'styled-components';
export default function App() {
  return (
    <Container>
      <TopContainer>
      <div className='logo'>
        <img src="Photos/Foody Zone.svg" alt="Logo"/>
      </div>
      <div className='search'>
        <input type='text' placeholder='Search food'/>
      </div>
      </TopContainer>
    </Container>
  )
}

const Container=styled.div`
max-width: 1200px;
margin: 0 auto;
`;
const TopContainer=styled.div`
min-height: 140px;
display: flex;
align-items: center;
justify-content: space-around;
padding:16px;
.search{
  input{
    background-color: transparent;
    border-radius: 5px;
    height: 40px;
    border: 1px solid red;
    color: white;
    font-size: 16px;
    padding: 0 10px;
  }
}
`;