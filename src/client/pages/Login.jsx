import "../styles/index.scss";
import { Input } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";

const Login = () => {
  const [error, setError] = useState(false);
  const [data, setData] = useState({});

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  
  const sendForm = (event) => {
    event.preventDefault();
    console.log("Enviando datos..." + data.username + " " + data.password);
    axios
      .post(
        "http://localhost:8000/auth/login",
        {
          username: data.username,
          password: data.password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log("Logged in");
        console.log(res);
      })
      .catch((err) => {});
  };

  return (
    <div>
      <div id="loginForm">
        <form onSubmit={sendForm}>
          <h3>Usuario</h3>
          <Input
            name="username"
            placeholder="Ingrese su nombre de usuario"
            size="medium"
          ></Input>
          <h3>Contraseña</h3>
          <Input
            name="password"
            placeholder="Ingrese su contraseña"
            type="password"
            size="medium"
          ></Input>
          <Button type="submit">Log in</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
