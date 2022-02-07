import React, { useState } from "react";
import Input from "../input/input";

export default function Search() {
  const [input, setInput] = useState({
    search: "",
  });

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Input
        name="search"
        placeholder="SEARCH"
        type="text"
        onChange={handleInputChange}
        text="Buscar"
        icono="true"
      />
    </>
  );
}
