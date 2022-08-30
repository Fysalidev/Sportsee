import styled from "styled-components";
import "../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "./Header";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Error";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: auto;
  max-width: 1440px;
  min-width: 1024px;
`;

function App() {
  return (
    <AppWrapper>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<Dashboard />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
