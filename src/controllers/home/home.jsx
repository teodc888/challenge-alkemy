import React, { useState } from "react";
import CardSpoonacular from "../card/card";
import Search from "../search/search";
import { Row, Col } from "react-bootstrap";
export default function Home() {
  const [info, setInfo] = useState([]);

  console.log(info);
  return (
    <>
      <div>
        <h1>WELCOME</h1>
        <Search setInfo={setInfo} />
      </div>
        <Row xs={1} md={2} lg={3} sytle={{ textAling: "center" }}>
          {info.map((item) => {
            return (
              <Col style={{ marginTop: "2%" }}>
                <CardSpoonacular
                  key={item.id}
                  name={item.title}
                  image={item.image}
                  caracteristicas={item.summary}
                />
              </Col>
            );
          })}
        </Row>

    </>
  );
}
