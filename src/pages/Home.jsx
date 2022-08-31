import styled from "styled-components";
import Card from "../components/Card";
import Switch from "../components/Switch";

const Main = styled.main`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const Dialog = styled.div`
  background: black;
  border-radius: 0.5rem;
  height: 42rem;
  overflow: hidden;
  padding: 1rem;
  width: 50rem;
`;

const CardsWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
`;

const SwitchWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
      <Dialog>
        <CardsWrapper>
          <Card gender="woman" id="12" />
          <Card gender="man" id="18" />
        </CardsWrapper>
        <SwitchWrapper>
          <Title>Setup Data Import ?</Title>
          <Switch />
        </SwitchWrapper>
      </Dialog>
    </Main>
  );
}

export default Home;
