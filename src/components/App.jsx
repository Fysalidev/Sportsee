/* import logo from '../assets/logo.svg'; */
import styled from "styled-components";
import "../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "./Header";
import VerticalLayout from "./VerticalLayout";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-width: 1024px;
  max-width: 1440px;
  margin: auto;
`;

const Main = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Section = styled.section`
  flex-grow: 1;
  background: pink;
`;

function App() {
  return (
    <AppWrapper>
      <BrowserRouter>
        <Header />
        <Main>
          <VerticalLayout />
          <Section>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Section>
        </Main>
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
