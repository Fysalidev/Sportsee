import styled from "styled-components";
import Card from "../components/Card"

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width:100%;
  height:100%;
`;

const Dialog = styled.div`
width:50rem;
height:42rem;
background:black;
border-radius:1rem;

`;

const Switch = styled.div``;

const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

function Home() {
  return (
    <Main>
      <Dialog>
        <Switch></Switch>
        <Cards>
          <Card gender="woman" id="12" />
          <Card gender="man" id="18" />
        </Cards>
      </Dialog>
    </Main>
  );
}

export default Home;
