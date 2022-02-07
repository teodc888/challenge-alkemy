import React from "react";
import { InputGroup, FormControl, Row, Button } from "react-bootstrap";

export default function Input({name, placeholder, onChange,type, text, icono}) {

  return (
    <>
      <div>
        <Row className="justify-content-center">
          <InputGroup
            className="mb-3"
            style={{ marginTop: "2%", width: "70%" }}
          >
            <FormControl
              placeholder={placeholder}
              aria-describedby="basic-addon2"
              name={name}
              onChange={onChange}
              type={type}
            />
             {
               icono === "true" ? <Button>{text}</Button> : null
             }
          </InputGroup>
        </Row>
      </div>
    </>
  );
}
