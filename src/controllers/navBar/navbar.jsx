import React from "react";
import { Button, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
  let loggedIn = localStorage.getItem("token");
  const handleClick = () => {
    window.localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Navbar.Brand style={{ marginLeft: "1%" }}>Challenge</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/menu">Menu</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {loggedIn ? (
          <Button
            variant="danger"
            onClick={handleClick}
            style={{ backgroundColor: "red", marginRight: "1%" }}
          >
            singOut
          </Button>
        ) : null}
      </Navbar>
    </>
  );
}
