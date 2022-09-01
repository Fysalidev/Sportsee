import styled from "styled-components";
import VerticalLayout from "../components/VerticalLayout";
import { useParams, useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100%;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  ${'' /* padding: 68px 90px 0 109px; */}
  gap: 77px;
`;

const Header = styled.header`
  background: transparent;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 24px;
  padding: 1rem 0;
`;

const Name = styled.span`
  color: red;
`;

const Paragraph = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`;

const Content = styled.section`
  flex-grow: 1;
  background: green;
  display: flex;
`;

const Diagrams = styled.div`
  flex-grow: 2;
  background: red;
  min-width: 774px;
  max-width: 835px;
`;

const ActivityGraph = styled.div`
  display: flex;
  justify-content: column;
  background: blue;
  height: 320px;
`;

const Graphics = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Graph = styled.div`
  width: 258px;
  height: 263px;
  background: white;
`;

const Cards = styled.div`
  flex-grow: 1;
  background: green;
  max-width: 258px;
  min-width: 200px;
`;

function Dashboard() {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  console.log(navigate);

  return (
    <Wrapper>
      <VerticalLayout />
      <Main>
        <Header>
          <Title>
            Bonjour <Name>{id}</Name>
          </Title>
          <Paragraph>
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </Paragraph>
        </Header>
        <Content>
          <Diagrams>
            <ActivityGraph>Activity Graph</ActivityGraph>
            <Graphics>
              <Graph>Session</Graph>
              <Graph>Intensité</Graph>
              <Graph>Score</Graph>
            </Graphics>
          </Diagrams>
          <Cards></Cards>
        </Content>
      </Main>
    </Wrapper>
  );
}
export default Dashboard;
