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
  diets,
  vegetarian,
  vegarian,
  setVegarian,
  notVegarian,
  setNotVegarian,
  pricePerServing,
  readyInMinutes,
  healthScore
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
  const alertError = () => {
    swal({
      title: "lleno",
      text: "se lleno el menu",
      icon: "error",
      button: "OK",
    });
  };

  const alertErrorV = () => {
    swal({
      title: "Error",
      text:
        "Usted tiene " +
        vegarian +
        " platos vegetarianos" +
        " y " +
        notVegarian +
        " platos no vegetarianos",
      icon: "error",
      button: "OK",
    });
  };

  const handleClick = () => {
    navigate(`/recipe/${idRecipe}`);
  };

  const handleClickMenu = () => {
    console.log(menu.length, "cantidad");
    if (menu.length <= 3) {
      if (vegetarian === true && vegarian <= 1) {
        console.log("vegetarian");
        setVegarian(vegarian + 1);

        const change = [
          ...menu,
          { name, image, caracteristicas, idRecipe, diets, pricePerServing, readyInMinutes, healthScore },
        ];
        setMenu(change);
        alert();
      } else if (vegetarian === false && notVegarian <= 1) {
        console.log("No vegetarian");
        setNotVegarian(notVegarian + 1);
        const change = [
          ...menu,
          { name, image, caracteristicas, idRecipe, diets, pricePerServing, readyInMinutes,healthScore },
        ];
        setMenu(change);
        alert();
      } else {
        alertErrorV();
      }
    } else {
      console.log("lleno");
      alertError();
    }
  };

  //holas
  return (
    <>
      <Row className="justify-content-center">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            {opcion === "true" ? (
              <Card.Text>{diets}</Card.Text>
            ) : (
              <Card.Text>{caracteristicas}</Card.Text>
            )}
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
