import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./client/pages/start"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Start />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
