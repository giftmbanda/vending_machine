import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";


export default function MyNavbar() {
  return (
    <div>
      <Navbar expand="lg" variant="light" bg="light" marginTop="10">
        <Container>
          <Navbar.Brand href="#">Case Study - Standard Bank Vending Machine </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
