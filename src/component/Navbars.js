import React from "react";
import "./Navbar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, animateScroll as scroll } from "react-scroll";

class Navbars extends React.Component {
  moveTo = (id, name) => {
    return (
      <Link
        activeClass="active"
        to={id}
        spy={false}
        smooth={true}
        offset={-56}
        duration={400}
      >
        {name}
      </Link>
    );
  };
  render() {
    return (
      <>
        <Navbar className="navbar-main" bg="primary" variant="dark">
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav>
            <Nav.Link href="#aboutme">
              {this.moveTo("aboutme", "About Me")}
            </Nav.Link>
            <Nav.Link href="#skills">
              {this.moveTo("skills", "Skills")}
            </Nav.Link>
            <Nav.Link href="#portfolio">
              {this.moveTo("portfolio", "Portfolio")}
            </Nav.Link>
            <Nav.Link href="#contactme">
              {this.moveTo("contactme", "Say Hello")}
            </Nav.Link>
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default Navbars;
