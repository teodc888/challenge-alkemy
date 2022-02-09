import React, { useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import Input from "../input/input";
export default function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };


  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post("http://challenge-react.alkemy.org/", input)
      .then((res) => {
        console.log(res.data.token);
        window.localStorage.setItem("token", res.data.token);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login">
      <h1 style={{ marginTop: "5%" }}>LOGIN</h1>
      <Form >
        <Input
          name="email"
          placeholder="EMAIL"
          type="text"
          onChange={handleInputChange}
        />
        <Input
          name="password"
          placeholder="PASSWORD"
          type="password"
          onChange={handleInputChange}
        />

        <Button
          variant="success"
          onClick={handleClick}
          style={{ backgroundColor: "blue", marginTop: "3%" }}
        >
          login
        </Button>
      </Form>
    </div>
  );
}
