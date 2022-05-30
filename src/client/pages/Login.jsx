import "../styles/index.scss";
import { Input } from "@mui/material";
import { useNavigate } from "react-router-dom"
import swal from 'sweetalert2'
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Gobernacion from "../assets/gobernación.png"
import Gov from "../assets/col.svg";
import axios from "axios";

const Login = () => {
  const [error, setError] = useState(false)
  const [data, setData] = useState({})
  const [action, setAction] = useState(true)

  const navigate = useNavigate()

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  
  const sendForm = async (event) => {
    event.preventDefault();
    if(action === true){
      console.log("Enviando datos..." + data.username + " " + data.password + " " + data.cedula + " " + data.secret);
      await axios
        .post(
          "http://localhost:8000/auth/login",
          {
            username: data.username,
            cedula: data.cedula,
            secret: data.secret,
            password: data.password,
          },
          { withCredentials: true }
        )
        .then((res) => {
          if (res.data.message === "OK") {
            localStorage.setItem("user", data.username);
            navigate("../Vote", { replace: true });
          } else {
            swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              timer: 8000,
              showConfirmButton: false,
              footer: "Maybe you insert your password or user wrong, try again",
            });
          }
        })
        .catch((err) => {});
    }else{
      console.log("Enviando datos..." + data.username + " " + data.password + " " + data.cedula + " " + data.secret);
      await axios
        .post(
          "http://localhost:8000/auth/create",
          {
            username: data.username,
            cedula: data.cedula,
            secret: data.secret,
            password: data.password,
          },
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res.data);
          swal.fire({
            icon: "succesfull",
            title: "Welcome",
            text: "You are registred for the elections!, scan this QR with Google Authenticator",
            imageUrl: res.data,
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: "alter",
            showConfirmButton: true,
          });
        });
    }
  };

  return (
    <div>
      <div id="BarranquillaGov">
        <object data={Gov} alt="LogoGov"></object>
      </div>
      <div id="loginForm">
        <div id="imageDecorator">
          <img src={Gobernacion} alt="gobernación"></img>
        </div>
        <div class="verticalLine1"></div>
        <form onSubmit={sendForm}>
          <h3>Usuario</h3>
          <Input
            name="username"
            placeholder="Ingrese su nombre de usuario"
            onChange={handleInputChange}
            size="medium"
          ></Input>
          <h3>Cedula</h3>
          <Input
            name="cedula"
            placeholder="Ingrese su cedula"
            size="medium"
            onChange={handleInputChange}
          ></Input>
          <h3>Contraseña</h3>
          <Input
            name="password"
            placeholder="******"
            type="password"
            size="medium"
            onChange={handleInputChange}
          ></Input>
          <h3>Secret</h3>
          <Input
            name="secret"
            placeholder="******"
            size="medium"
            onChange={handleInputChange}
          ></Input>
          <Button type="submit" onClick={() => setAction(true)}>
            Log in
          </Button>
          <Button type="submit" onClick={() => setAction(false)}>
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
