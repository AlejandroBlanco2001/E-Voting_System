import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./client/pages/start"
import Login from "./client/pages/Login"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Start />}/>
          <Route exact path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
