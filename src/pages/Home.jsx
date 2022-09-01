import styled from "styled-components";
import Card from "../components/Card";
import Switch from "../components/Switch";

const Main = styled.main`
  align-items: center;
  background: #020203;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

const CardsWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const SwitchWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 50%;
  justify-content: center;
`;

const Title = styled.h2`
  color: #e60000;
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
  font-weight: 500;
`;

function Home() {
  return (
    <Main>
      <CardsWrapper>
        <Card gender="man" id="12" />
        <Card gender="woman" id="18" />
      </CardsWrapper>
      <SwitchWrapper>
        <Title>Setup Data Import ?</Title>
        <Switch />
      </SwitchWrapper>
    </Main>
  );
}

export default Home;
