import styled from "styled-components";
import "../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "./Header";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Error";

const AppWrapper = styled.div`
  flex-direction:column;
  display:flex;
  height: 100vh;
  width: 100%;
`;

const View = styled.div`
  flex-grow: 1;
`;

function App() {
  return (
    <AppWrapper>
      <BrowserRouter>
        <Header />
        <View>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:id" element={<Dashboard />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </View>
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
