/* import logo from '../assets/logo.svg'; */
import "../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

function App() {
  return (
    <div className="App">
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
