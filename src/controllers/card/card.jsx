import React from "react";
import { Card, Button, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import swal from "sweetalert";

export default function CardSpoonacular({
  name,
  image,
  caracteristicas,
  idRecipe,
  setMenu,
  menu,
  opcion,
  handleDelete,
}) {
  const navigate = useNavigate();

  const alert = () => {
    swal({
      title: "Add",
      text: "Added successfully",
      icon: "success",
      button: "OK",
    });
  };



  const handleClick = () => {
    navigate(`/recipe/${idRecipe}`);
  };

  const handleClickMenu = () => {
    const change = [...menu, { name, image, caracteristicas, idRecipe }];
    setMenu(change);
    alert();
  };



  //holas
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
            {opcion === "true" ? (
              <Button
                variant="primary"
                style={{ marginLeft: "30%" }}
                onClick={handleClickMenu}
              >
                Menu
              </Button>
            ) : (
              <Button
                variant="primary"
                style={{ marginLeft: "30%" }}
                onClick={handleDelete}
              >
                Delete
              </Button>
            )}
          </Card.Body>
        </Card>
      </Row>
    </>
  );
}
