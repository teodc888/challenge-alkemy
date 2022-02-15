import React from "react";
import CardSpoonacular from "../card/card";
import { Row, Col } from "react-bootstrap";
import swal from "sweetalert";

export default function Menu({ menu, setMenu }) {

  const alert = () => {
    swal({
      title: "Success",
      text: "successfully removed",
      icon: "success",
      button: "OK",
    });
  };


  const handleDelete = (idRecipe) => {
    setMenu((menu) => menu.filter((item) => item.idRecipe !== idRecipe));
    alert();
  };
  return (
    <>
      <Row xs={1} md={2} lg={3} sytle={{ textAling: "center" }}>
        {menu &&
          menu.map((item) => {
            return (
              <Col style={{ marginTop: "2%" }} key={item.idRecipe}>
                <CardSpoonacular
                  idRecipe={item.idRecipe}
                  name={item.name}
                  image={item.image}
                  handleDelete={()=> handleDelete(item.idRecipe)}
                />
              </Col>
            );
          })}
      </Row>
    </>
  );
}
