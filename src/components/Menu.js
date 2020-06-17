import React, { useState } from 'react';
import crickbuzz from '../images/crickbuzz.PNG';

import { Collapse, Navbar,NavbarText, NavbarToggler,NavbarBrand,Nav, NavItem, NavLink,Button } from 'reactstrap';


const Menu = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
  <>
    <Navbar  light expand="md header ">
      {/* <NavbarBrand>
        <img  src={crickbuzz} alt="crickbuzz"/>
        
    </NavbarBrand> */}
    <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
          {/* <Nav className="mr-auto" navbar></Nav> */}
          {/* <NavbarText className="pr-3 text-white ml-5 menubar">Home</NavbarText>
          <NavbarText className="pr-3 menubar text-white">Livescore</NavbarText>
          <NavbarText className="pr-3 menubar text-white">Players</NavbarText>
          <NavbarText className="pr-3 menubar text-white">Score</NavbarText> */}
      </Collapse>
    </Navbar>
  </>
  );
};
export default Menu;