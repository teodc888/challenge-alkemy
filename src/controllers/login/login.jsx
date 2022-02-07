import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import Input from "../input/input";
export default function Login() {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email:"",
        password:""
    });

    const handleInputChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    const handleClick = () => {
        navigate("/home");
    };

    console.log(input);

  return (
    <div className="login">
      <h1 style={{marginTop:"5%"}}>LOGIN</h1>
        <Input name="email" placeholder="EMAIL" type="text" onChange={handleInputChange} />
        <Input name="password" placeholder="PASSWORD" type="password" onChange={handleInputChange} />

          <Button variant="success" onClick={handleClick} style={{backgroundColor:"blue", marginTop:"3%"}}>login</Button>

    </div>
  );
}
