import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import LoginService from "../services/authentication/loginService";

export default function Login() {
  const username = useFormInput("");
  const password = useFormInput("");
  const history = useHistory();

  async function login(e) {
    e.preventDefault();
    let payload = {
      username: username.value,
      password: password.value,
    };
    let response = await LoginService.login(payload);
    if (response.status === 200) {
      history.push("/counter");
    } else {
      console.log("login failed");
    }
  }

  return (
    <Form>
      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" {...username} />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" {...password} />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={(e) => login(e)}>
        Submit
      </Button>
    </Form>
  );
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange,
  };
}
