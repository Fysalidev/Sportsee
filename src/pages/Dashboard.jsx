import styled from "styled-components";
import VerticalLayout from "../components/VerticalLayout";
import { useParams, useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100%;
`;

const Main = styled.main`
  flex-grow: 1;
`;

const Content = styled.div`
  margin:auto;
`;

const Activity = styled.div`
  display: flex;
  max-width:1124px;
  justify-content: space-between;
`;

const Graphics = styled.div`
flex-grow:1;
max-width:834px;
display:flex;
flex-direction: column;
gap: 28px;
`;

const Top = styled.div``;

const LargeGraph = styled.div`
  height: 320px;
  background: blue;
`;

const Bottom = styled.div`
display:flex;
justify-content: space-between;

`;

const SmallGraph = styled.div`
width:258px;
height:263px;
background:pink;
`;

const Cards = styled.div`
background: yellow;
display:flex;
flex-direction:column;
justify-content:space-between;
`;

const Card = styled.div`
width:258px;
height:124px;
background:grey;
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
        <Content>
          <div>
            <h1>Bonjour Grégory</h1>
            <p>Paragraphe de le page sera ici</p>
          </div>
          <Activity>
            <Graphics>
              <Top>
                <LargeGraph>Activity</LargeGraph>
              </Top>
              <Bottom>
                <SmallGraph>Session</SmallGraph>
                <SmallGraph>Intensity</SmallGraph>
                <SmallGraph>Score</SmallGraph>
              </Bottom>
            </Graphics>
            <Cards>
              <Card>Calories</Card>
              <Card>Protéines</Card>
              <Card>Glucides</Card>
              <Card>Lipides</Card>
            </Cards>
          </Activity>
        </Content>
      </Main>
    </Wrapper>
  );
}
export default Dashboard;
