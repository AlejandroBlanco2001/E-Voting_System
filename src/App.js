import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./client/pages/start"
import Vote from "./client/pages/Vote"
import Result from "./client/pages/Result"
import Login from "./client/pages/Login"
import Factor from "./client/pages/2FA";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Start />} />
        <Route exact path="/resultado" element={<Result />} />
        <Route exact path="/vote" element={<Vote />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Factor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
