import React from "react";
import { Form } from "react-bootstrap";

const Login = () => {
  return (
    <div className="container">
      <h3>Login</h3>
      <form>
        <Form.Control
          type="text"
          placeholder="Disabled input"
          aria-label="Disabled input example"
          disabled
          readOnly
        />
        <br />
        <Form.Control
          type="text"
          placeholder="Disabled readonly input"
          aria-label="Disabled input example"
          readOnly
        />
      </form>
    </div>
  );
};

export default Login;
