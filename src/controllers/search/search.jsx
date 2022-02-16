import React, { useState } from "react";
import axios from "axios";
import Input from "../input/input";
import { Form } from "react-bootstrap";

export default function Search({setInfo}) {
  const [input, setInput] = useState({
    search: "",
  });

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${input.search}&addRecipeInformation=true`
      )
      .then((res) => {
        setInfo(res.data.results);
        window.localStorage.setItem("infoRecipe", JSON.stringify(res.data.results));

      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          name="search"
          placeholder="SEARCH"
          type="text"
          onChange={handleInputChange}
          text="Search"
          icono="true"
          onClick={handleSubmit}
        />
      </Form>
    </>
  );
}
