import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Card, Row } from "react-bootstrap";
export default function Recipe() {
  const [recipe, setRecipe] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setRecipe(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  console.log(recipe);

  return (
    <>
      <Row className="justify-content-center">
        <Card style={{ width: "60%", marginTop:"2%" }}>
          <Card.Img variant="top" src={recipe.image} />
          <Card.Body>
            <Card.Title>{recipe.title}</Card.Title>
            <Card.Text dangerouslySetInnerHTML={{ __html: `<b>Summary:</b> ${recipe.summary}` }}></Card.Text>
            <Button>Add Menu</Button>
          </Card.Body>
        </Card>
      </Row>
    </>
  );
}
