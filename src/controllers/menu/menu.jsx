import React from "react";
import CardSpoonacular from "../card/card";
import { Row, Col } from "react-bootstrap";
export default function Menu({ menu }) {
  console.log(menu);
  return (
    <>
      <Row xs={1} md={2} lg={3} sytle={{ textAling: "center" }}>
        {menu &&
          menu.map((item) => {
            return (
              <Col style={{ marginTop: "2%" }} key={item.id}>
                <CardSpoonacular
                  idRecipe={item.id}
                  name={item.name}
                  image={item.image}
                />
              </Col>
            );
          })}
      </Row>
    </>
  );
}
