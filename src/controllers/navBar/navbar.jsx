import React from "react";
import { Button, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router";

export default function NavBar() {
  const navigate = useNavigate();

  let loggedIn = localStorage.getItem("token");

  const handleClick = () => {
    window.localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  const handleMenu = () => {
    navigate("/menu");
  };

  const handleHome = () => {
    navigate("/");
  };
  return (
    <>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Navbar.Brand style={{ marginLeft: "1%" }}>Challenge</Navbar.Brand>
        {loggedIn ? (
          <>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link onClick={handleHome}>Home</Nav.Link>
                <Nav.Link onClick={handleMenu} >Menu</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Button
              variant="danger"
              onClick={handleClick}
              style={{ backgroundColor: "red", marginRight: "1%" }}
            >
              singOut
            </Button>
          </>
        ) : null}
      </Navbar>
    </>
  );
}
