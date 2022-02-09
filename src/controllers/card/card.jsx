import React from "react";
import { Card, Button, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
export default function CardSpoonacular({
  name,
  image,
  caracteristicas,
  idRecipe,
  setMenu
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${idRecipe}`);
  };

  const handleClickMenu = () => {
    setMenu(name);
  };

  return (
    <>
      <Row className="justify-content-center">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{caracteristicas}</Card.Text>
            <Button variant="primary" onClick={handleClick}>
              View
            </Button>
            <Button variant="primary" style={{marginLeft:"30%"}} onClick={handleClickMenu}>
              Menu
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </>
  );
}
