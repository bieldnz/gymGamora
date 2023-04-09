import React from 'react'
import Styles from "../styles/navbar.module.css"
import Brand from "../../public/brand.png"
import { AiOutlineMenu } from "react-icons/ai"
import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarTop = ({irPlanos, irUnidades, irSobre}) => {
  return (
    <Navbar expand="md" className={Styles.navbar}>
      <Navbar.Brand href="#home"><img src={Brand} width="100px" height="100px"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className={Styles.collapseToggle}>
        <AiOutlineMenu />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className={Styles.centralizar}>
        <Nav className={`${Styles.navAuto}`}>
          <Nav.Link href="#home" className={Styles.navLink}>
            <div onClick={irPlanos}>Planos</div>
          </Nav.Link>
          <Nav.Link href="#home" className={Styles.navLink}>
            <div onClick={irUnidades}>Unidades</div>
          </Nav.Link>
          <Nav.Link href="#home" className={Styles.navLink}>
            <div onClick={irSobre}>Sobre</div>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarTop