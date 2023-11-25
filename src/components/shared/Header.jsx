import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import CustomNavlink from "./CustomNavlink";

function Header() {
  return (
    <Navbar expand="lg" className="bg-black text-white">
      <Container>
        <Navbar.Brand href="#home" className="text-white">
          <span className="text-info">Facturacion</span> SPEAF
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <CustomNavlink to="" className="p-2">
              Create Bill
            </CustomNavlink>
            <CustomNavlink to="/bill-list" className="p-2">
              Bills List
            </CustomNavlink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
