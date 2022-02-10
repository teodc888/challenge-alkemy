import React, { useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import Input from "../input/input";
import swal from "sweetalert";
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

  const alert = ({ title, text, icon, button }) => {
    swal({
      title: title,
      text: text,
      icon: icon,
      button: button,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post("http://challenge-react.alkemy.org/", input)
      .then((res) => {
        console.log(res.data.token);
        window.localStorage.setItem("token", res.data.token);
        alert({
          title: "Success",
          text: "Login Success",
          icon: "success",
          button: "OK",
        })
        setTimeout(()=>{
          window.location.reload();
        },4000)
      })
      .catch((err) => {
        console.log(err);
        console.log("No entro");
        setInput({
          email: "",
          password: "",
        });
        alert({
          title: "Error",
          text: "Usuario o contraseña incorrectos",
          icon: "error",
          button: "volver",
        });
      });
  };

  return (
    <div className="login">
      <h1 style={{ marginTop: "5%" }}>LOGIN</h1>
      <Form>
        <Input
          name="email"
          placeholder="EMAIL"
          type="text"
          onChange={handleInputChange}
          value={input.email}
        />
        <Input
          name="password"
          placeholder="PASSWORD"
          type="password"
          onChange={handleInputChange}
          value={input.password}
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
