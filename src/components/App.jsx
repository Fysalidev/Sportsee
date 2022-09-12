import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "./Header";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Error";
import { ApiProvider } from "../utils/context";

const AppWrapper = styled.div`
  flex-direction: column;
  display: flex;
  height: 100%;
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
        <ApiProvider>
          <View>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user/:id" element={<Dashboard />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </View>
        </ApiProvider>
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
