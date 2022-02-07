import React from "react";
import { Card, Button, Row } from "react-bootstrap";

export default function CardSpoonacular({ name, image, caracteristicas }) {
  return (
    <>
      <Row className="justify-content-center">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{caracteristicas}</Card.Text>
            <Button variant="primary">View</Button>
          </Card.Body>
        </Card>
      </Row>
    </>
  );
}
