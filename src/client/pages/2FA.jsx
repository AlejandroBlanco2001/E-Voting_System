import Gobernacion from "../assets/gobernación.png";
import swal from "sweetalert2";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Input } from "@mui/material";

const Factor = () => {
      const [data, setData] = useState({});

      const handleInputChange = (event) => {
        setData({
          ...data,
          [event.target.name]: event.target.value,
        });
      };

      const sendForm = async (event) => {

      }

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
              <h3>Confirmar contraseña</h3>
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

export default Factor