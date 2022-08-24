/* import logo from '../assets/logo.svg'; */
import "../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "./Header"

function App() {
  return (
    <div className="App">
      <div className="App">
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
