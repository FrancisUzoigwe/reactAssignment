import  { useState } from "react";
import React from "react"
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {AiOutlineMenu} from "react-icons/ai"
import Image from "../../assets/Logo.png"
import Imag from "../../assets/lab.png"


const Header = () => {
  const [learnToggle, setLearnToggle] = useState(false);
  const [supportToggle, setSupportToggle] = useState(false);


  const handleLearnMouseEnter = () => {
    setLearnToggle(true);
  };

  const handleLearnMouseLeave = () => {
    setLearnToggle(false);
  };

  const handleSupportMouseEnter = () => {
    setSupportToggle(true);
  };

  const handleSupportMouseLeave = () => {
    setSupportToggle(false);
  };


  return (
    <div>
      <Container>
        <Main>
          <Logo src={Imag}/>
          <NavHold>
            <Navs to="/features">Features</Navs>
            <Navs to="/learn" onMouseEnter={handleLearnMouseEnter} onMouseLeave={handleLearnMouseLeave}>
              Learn
              {learnToggle && (
                <DavHold onMouseEnter={handleLearnMouseEnter} onMouseLeave={handleLearnMouseLeave}>
                  <Dav>Document</Dav>
                  <Dav>Resources</Dav>
                  <Dav>Community</Dav>
                  <Dav>Blog</Dav>
                </DavHold>
              )}
            </Navs>

            <Navs to="/about">About</Navs>
            <Navs to="/pricing">Pricing</Navs>
            <Navs to="/support" onMouseEnter={handleSupportMouseEnter} onMouseLeave={handleSupportMouseLeave}>
              Support
              {supportToggle && (
                <DavHold onMouseEnter={handleSupportMouseEnter} onMouseLeave={handleSupportMouseLeave}>
                  <Dav>FAQs</Dav>
                  <Dav>Book a demo</Dav>
                  <Dav>Forums</Dav>
                  <Dav>E no easy🥱</Dav>
                </DavHold>
              )}
            </Navs>
          </NavHold>
        </Main>
        <Main2>
          <Logo src={Imag}/>
      
      <div>
      <New></New>
      <DaveHold>
        <Davs>Features</Davs>
        <Davs>Documents</Davs>
        <Davs>Resources</Davs>
        <Davs>Community</Davs>
        <Davs>Blog</Davs>
      </DaveHold>
      </div>
        </Main2>
      </Container>
    </div>
  );
};

export default Header;

const Davs = styled.div`
display: flex;
justify-content: center;
color: white;
align-items: center;
flex-direction: column;
margin-bottom: 3px;
`;

const DaveHold = styled.div`
position: absolute;
width: 120px;
height: 120px;
padding-top: 20px;
border-radius: 5px;
right: 25px;
background-color: grey;
display: none;
flex-direction: column;
align-items: center;
justify-content: center;

/* border: 1px solid black; */
`;

const New = styled(AiOutlineMenu)`
  width: 30px;
  height: 30px;
  font-weight: 600;
  color: white;
  position: relative;
`;

const Main2 = styled.div`
  width: 75%;
  height: 60px;
  display: none;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 700px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Main = styled.div`
  width: 75%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 701px) {
    display: none;
  }
`;

const DavHold = styled.div`
  background-color: #c2c2c2;
  position: absolute;
  top: 50px;
  width: 100px;
  height: 120px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;

  :hover {
    background-color: #a4a4a4;
  }
`;

const Dav = styled.div`
  margin-bottom: 8px;

  :hover {
    background-color: #bfbfbf;
    color: black;
    transition: all 350ms;
    border-radius: 5px;
    height: 18px;
  }
`;

const Navs = styled(NavLink)`

  color: white;
  text-decoration: none;
  font-weight: 500;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  display: flex;
  justify-content: center;
    width: 65px;
    align-items: center; 

:hover{
   background-color: #78c0ff;
   transition: all 550ms;
   /* width: 60px; */
   height: 30px;
   border-radius: 5px;
}

`;
const NavHold = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
width: 55%;

`;
const Logo = styled.img`
width: 140px;
height: 45px;
/* background-color: white; */

:hover{
  transform: scale(1.12);
  transition: all 740ms;
  cursor: pointer;
}
`;



const Container = styled.div`
width: 100%;
height: 65px;
background-color: #228BE6;
display: flex;
justify-content: center;
align-items: center;
`;