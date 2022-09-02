import styled from "styled-components";
import VerticalLayout from "../components/VerticalLayout";
import { useParams, useNavigate } from "react-router-dom";
import { userData } from "../services/providers";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100%;
`;

const Main = styled.main`
  flex-grow: 1;
`;

const Content = styled.section`
  margin: 68px 0 0 109px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  height: 166px;
  font-family: "Roboto";
  font-style: normal;
  & h1 {
    line-height: 24px;
    font-size: 48px;
    font-weight: 500;
    padding: 1rem 0 2rem 0;
  }
  & span {
    color: red;
  }

  & p {
    line-height: 24px;
    font-size: 18px;
    font-weight: 400;
  }
`;

const Activity = styled.div`
  display: flex;
  max-width: 1124px;
  justify-content: space-between;
`;

const Graphics = styled.div`
  flex-grow: 1;
  max-width: 834px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const Top = styled.div``;

const LargeGraph = styled.div`
  height: 320px;
  background: blue;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SmallGraph = styled.div`
  width: 258px;
  height: 263px;
  background: pink;
`;

const Cards = styled.div`
  background: yellow;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Card = styled.div`
  width: 258px;
  height: 124px;
  background: grey;
`;

function Dashboard() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [useMockedData, setApi] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const user = await userData(id, useMockedData);
        setData(user);
        setIsLoading(false);
      } catch (error) {
        console.log("error : ", error);
        navigate("/Error");
      }
    })();
  }, [navigate, id, useMockedData]);

  return (
    <Wrapper>
      <VerticalLayout />
      <Main>
        <Content>
          <Header>
            <h1>
              Bonjour <span>{data.firstName}</span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </Header>
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
