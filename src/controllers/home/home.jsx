import React, { useState } from "react";
import CardSpoonacular from "../card/card";
import Search from "../search/search";
import { Row, Col } from "react-bootstrap";
export default function Home({ menu, setMenu }) {
  const [info, setInfo] = useState([]);

  return (
    <>
      <div>
        <h1>WELCOME!!!</h1>
        <Search setInfo={setInfo} />
      </div>
      <Row xs={1} md={2} lg={3} sytle={{ textAling: "center" }}>
        {info.map((item) => {
          return (
            <Col style={{ marginTop: "2%" }} key={item.id}>
              <CardSpoonacular
                menu={menu}
                setMenu={setMenu}
                idRecipe={item.id}
                name={item.title}
                image={item.image}
                caracteristicas={item.summary}
                opcion="true"
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
