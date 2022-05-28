import "../styles/index.scss";
import { Input } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom" 
import React, { useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";

const Login = () => {
  const [error, setError] = useState(false)
  const [data, setData] = useState({})
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleError = () => setError(false)

  const navigate = useNavigate()

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  
  const sendForm = async (event) => {
    event.preventDefault();
    console.log("Enviando datos..." + data.username + " " + data.password);
    await axios
      .post(
        "http://localhost:8000/auth/login",
        {
          username: data.username,
          password: data.password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res)
        if(res.data.message === "OK"){
          alert("LOGGED IN")
          navigate("../Vote", {replace: true})
        }else{
          alert("ERROR")
        }
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
            onChange={handleInputChange}
            size="medium"
          ></Input>
          <h3>Contraseña</h3>
          <Input
            name="password"
            placeholder="******"
            type="password"
            size="medium"
            onChange={handleInputChange}
          ></Input>
          <Button type="submit">Log in</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
