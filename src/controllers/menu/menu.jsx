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

  console.log(menu);

  let total = 0
  let timePreparacion = 0
  let totalV = 0




  if(menu.length !== 0){
    const aux = menu.map((price) => price.pricePerServing )
    const reducer = (accumulator, curr) => accumulator + curr;
    total = aux.reduce(reducer);

    const auxTime = menu.map((time) => time.readyInMinutes )
    const reducerTime = (accumulator, curr) => accumulator + curr;
    const tot = auxTime.reduce(reducerTime);
    timePreparacion = tot / auxTime.length

    const auxHealth = menu.map((health) => health.healthScore )
    const reducerHealth = (accumulator, curr) => accumulator + curr;
    const totHealth = auxHealth.reduce(reducerHealth);
    totalV = totHealth / auxHealth.length

  }

  console.log(totalV);


  return (
    <>
      <h1>MENU</h1>
      <p>Precio del menu: {total}</p>
      <p>Promedio de tiempo de preparación: {timePreparacion}</p>
      <p>Promedio de Healt Score: {totalV}</p>
      <Row xs={1} md={2} lg={3} sytle={{ textAling: "center" }}>
        {menu &&
          menu.map((item) => {
            return (
              <Col style={{ marginTop: "2%" }} key={item.idRecipe}>
                <CardSpoonacular
                  idRecipe={item.idRecipe}
                  name={item.name}
                  image={item.image}
                  handleDelete={() => handleDelete(item.idRecipe)}
                />
              </Col>
            );
          })}
      </Row>
    </>
  );
}
