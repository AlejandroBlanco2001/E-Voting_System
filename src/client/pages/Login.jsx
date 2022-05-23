import {Input} from "@mui/material"
import Button from "@mui/material/Button";

const Login = () => {
    return (
      <div id="loginForm">
        <h3>Usuario</h3>
        <Input placeholder="Ingrese su nombre de usuario" size="medium"></Input>
        <h3>Contraseña</h3>
        <Input
          placeholder="Ingrese su contraseña"
          type="password"
          size="medium"
        ></Input>
        <Button>Log in</Button>
      </div>
    );
}

export default Login