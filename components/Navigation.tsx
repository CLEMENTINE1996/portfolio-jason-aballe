import React, { useState, useEffect } from "react";
import { greetings, socialLinks } from "../portfolio";
import Headroom from "headroom.js";
import { UncontrolledCollapse, NavbarBrand, Navbar, NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

const Navigation = () => {
  const [collapseClasses, setCollapseClasses] = useState("");
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main")!);
    headroom.init();

    const handleScroll = () => {
      setIsTop(window.scrollY < 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header-global">
      <Navbar 
        className={`navbar-main navbar-transparent navbar-light headroom ${!isTop ? 'nav-glass' : ''}`} 
        expand="lg" 
        id="navbar-main"
      >
        <Container>
          <NavbarBrand href="/portfolio-jason-aballe" className="mr-lg-5">
            <div className="d-flex align-items-center">
              <h2 className="text-white font-weight-bold mb-0" id="nav-title" style={{ letterSpacing: '1px', fontSize: '1.5rem' }}>
                {greetings.name}
              </h2>
              <span className="text-white-50 ml-2 d-none d-md-inline" style={{ fontSize: '0.9rem', borderLeft: '1px solid rgba(255,255,255,0.3)', paddingLeft: '10px' }}>
                Portfolio
              </span>
            </div>
          </NavbarBrand>
          
          <button className="navbar-toggler" id="navbar_global">
            <span className="navbar-toggler-icon" />
          </button>

          <UncontrolledCollapse
            toggler="#navbar_global"
            navbar
            className={collapseClasses}
            onExiting={() => setCollapseClasses("collapsing-out")}
            onExited={() => setCollapseClasses("")}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <h3 className="text-primary">{greetings.name}</h3>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button className="navbar-toggler" id="navbar_global">
                    <span /><span />
                  </button>
                </Col>
              </Row>
            </div>

            <Nav className="navbar-nav-hover align-items-lg-center ml-lg-auto" navbar>
              <NavItem>
                <NavLink href="#skills" className="nav-link-inner--text text-white px-3">Expertise</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#experience" className="nav-link-inner--text text-white px-3">Experience</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#projects" className="nav-link-inner--text text-white px-3">Projects</NavLink>
              </NavItem>
              
              <div className="d-none d-lg-block mx-3" style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.2)' }} />

              {socialLinks.github && (
                <NavItem>
                  <NavLink rel="noopener" aria-label="Github" className="nav-link-icon" href={socialLinks.github} target="_blank">
                    <i className="fa fa-github" />
                    <span className="nav-link-inner--text d-lg-none ml-2">Github</span>
                  </NavLink>
                </NavItem>
              )}
              {socialLinks.linkedin && (
                <NavItem>
                  <NavLink rel="noopener" aria-label="Linkedin" className="nav-link-icon" href={socialLinks.linkedin} target="_blank">
                    <i className="fa fa-linkedin" />
                    <span className="nav-link-inner--text d-lg-none ml-2">Linkedin</span>
                  </NavLink>
                </NavItem>
              )}
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Navigation;