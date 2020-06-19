import React, { useState } from "react";
import crickbuzz from '../images/crickbuzz.PNG';
import { Collapse, Navbar,NavbarText, NavbarToggler,NavbarBrand,Nav, Button } from 'reactstrap';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <>
      <Navbar  light expand="md header">
        <NavbarBrand>
          <img  src={crickbuzz} alt="crickbuzz"/>
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar></Nav>
            
              <NavbarText className="pr-3"><Button color="light" className="btn">Log in</Button></NavbarText>
              <NavbarText className="pr-3"><Button color="success" className="btn">Sign up</Button></NavbarText>
            
          </Collapse>
        </Navbar>
    </>
  );
};
export default Header;