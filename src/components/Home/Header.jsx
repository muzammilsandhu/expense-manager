import React, { useState, useEffect } from "react";
import ModalComp from "./ModalComp";
import "../../css/Home/Header.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../Images/logo.png";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`navbar ${
          scrollPosition > 0 ? "navbar-scroll navbar-white" : ""
        }`}
      >
        <Navbar
          className="shadow"
          bg="transparent"
          variant="dark"
          expand="md"
          fixed="top"
        >
          <Container>
            <Navbar.Brand href="#">
              <img alt="logo" src={logo} width="60" height="50" />
              <h4> | Expense Manager </h4>
            </Navbar.Brand>
            <Navbar.Toggle
              className="toggle-icon"
              aria-controls="basic-navbar-nav"
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/#/benefits-section" className="mx-3">
                  Benifits
                </Nav.Link>
                <Nav.Link href="/#/features-section" className="mx-3">
                  Features
                </Nav.Link>
                <button className="sign-btn" onClick={() => setShowModal(true)}>
                  {" "}
                  SIGN IN / SIGN UP{" "}
                </button>
                <ModalComp showModal={showModal} setShowModal={setShowModal} />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
    </>
  );
};

export default Header;
