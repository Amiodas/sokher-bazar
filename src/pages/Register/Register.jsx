import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../../providers/AuthProviders";

const Register = () => {
  const { createUser, googleAuth } = useContext(AuthContext);

  const handleRegisterForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, email, password);

    createUser(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  };
  return (
    <div>
      <h3>Register</h3>
      <Form onSubmit={handleRegisterForm}>
        {/* Name */}
        <Form.Group className="mb-3" controlId="registerForm.ControlInput1">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" name="name" placeholder="John Doe" />
        </Form.Group>
        {/* Email */}
        <Form.Group className="mb-3" controlId="registerForm.ControlInput2">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="example@gmail.com"
            required
          />
        </Form.Group>
        {/* Password */}
        <Form.Group className="mb-3" controlId="registerForm.ControlInput3">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="******"
            required
          />
        </Form.Group>
        <Button className="" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default Register;
