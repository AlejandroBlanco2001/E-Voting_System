import "../styles/index.scss";
import { Input } from "@mui/material";
import { useNavigate } from "react-router-dom"
import swal from 'sweetalert2'
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Gobernacion from "../assets/gobernación.png"
import axios from "axios";

const Login = () => {
  const [error, setError] = useState(false)
  const [data, setData] = useState({})
  const [open, setOpen] = useState(false)
  const [action, setAction] = useState(true)
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
    if(action === true){
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
            localStorage.setItem('user', data.username)
            navigate("../Vote", {replace: true})
          }else{           
            swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              timer: 6000,
              showConfirmButton: false,
              footer: 'Maybe you insert your password or user wrong, try again',
            })
          }
        })
        .catch((err) => {})
    }else{
      console.log("Enviando datos..." + data.username + " " + data.password);
      await axios
        .post(
          "http://localhost:8000/auth/create",
          {
            username: data.username,
            password: data.password,
          },
          { withCredentials: true}
        ).then((res) => {
          console.log(res.data)
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
        })
    }
  };

  return (
    <div>
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
          <h3>Contraseña</h3>
          <Input
            name="password"
            placeholder="******"
            type="password"
            size="medium"
            onChange={handleInputChange}
          ></Input>
          <Button 
          type="submit" 
          onClick={() => setAction(true)}>Log in</Button>
          <Button 
          type="submit" 
          onClick={() => setAction(false)}
          >Register</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
