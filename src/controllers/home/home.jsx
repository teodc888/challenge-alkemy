import React, { useState, useEffect } from "react";
import CardSpoonacular from "../card/card";
import Search from "../search/search";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router";
export default function Home({ menu, setMenu }) {
  const navigate = useNavigate();
  const [info, setInfo] = useState([]);
  const [vegarian, setVegarian] = useState(0);
  const [notVegarian, setNotVegarian] = useState(0);

  useEffect(() => {
    if(vegarian === 2 && notVegarian === 2){
      setTimeout(() =>{
        navigate("/menu");
      }, 1000);
    }
  }, [navigate, vegarian, notVegarian]);

  return (
    <>
      <div>
        <h1>WELCOME!!!</h1>
        <Search setInfo={setInfo} />
        <h4>platos vegetarianos: {vegarian}</h4>
        <h4>platos no vegetarianos: {notVegarian}</h4>
        {vegarian === 2 && notVegarian === 2 ? (
          <>
            <h1>Redirect Menu</h1>
          </>
        ) : null}
      </div>
      <Row xs={1} md={2} lg={3} sytle={{ textAling: "center" }}>
        {info.map((item) => {
          return (
            <Col style={{ marginTop: "2%" }} key={item.id}>
              <CardSpoonacular
                info={info}
                menu={menu}
                setMenu={setMenu}
                idRecipe={item.id}
                name={item.title}
                image={item.image}
                diets={item.diets[0]}
                vegetarian={item.vegetarian}
                pricePerServing={item.pricePerServing}
                readyInMinutes={item.readyInMinutes}
                healthScore={item.healthScore}
                opcion="true"
                vegarian={vegarian}
                setVegarian={setVegarian}
                notVegarian={notVegarian}
                setNotVegarian={setNotVegarian}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
