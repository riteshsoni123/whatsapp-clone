import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

function Login({ onIdSubmit }) {
  const idRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    onIdSubmit(idRef.current.value);
  };
  const createNewId = () => {
    onIdSubmit(uuidv4());
  };

  return (
    <Container
      className="align-items-center d-flex"
      style={{ height: "100vh" }}
    >
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group>
          <Form.Label>Enter Your Id</Form.Label>
          <Form.Control type="text" ref={idRef} required></Form.Control>
        </Form.Group>
        <Button type="submit" className="mx-2 my-2">
          Login
        </Button>
        <Button onClick={createNewId} variant="secondary">
          Create A New Id
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
