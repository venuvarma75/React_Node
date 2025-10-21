import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import {Link} from "react-router-dom"
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbarr.css"
function Navbarr() {
  return (
    <Navbar expand="lg" className="bg-primary" id="navbaaar">
      <Container fluid>
        <Navbar.Brand>vTechnologies</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}>
            <Link to="/recipes" id="Prod">Recipes</Link>
            <Link to="/cart">
              <CiShoppingCart size={30} style= {{color:"white",fontWeight:600}}/>
            </Link>
            
            <Link to="/favs">
              <CiHeart size={30} style= {{color:"white",fontWeight:600}}/>
            </Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;