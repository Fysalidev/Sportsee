import calories from "../assets/calories.png";
import proteines from "../assets/proteines.png";
import glucides from "../assets/glucides.png";
import lipides from "../assets/lipides.png";

import styled from "styled-components";
import VerticalLayout from "../components/VerticalLayout";
import ActivityCard from "../components/ActivityCard";
import { useParams, useNavigate } from "react-router-dom";
import { averageData, performanceData, userData } from "../services/providers";
import { activityData } from "../services/providers";
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../utils/context";

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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function Dashboard() {
  const { id } = useParams();
  const { api } = useContext(ApiContext);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const user = await userData(id, api);
        const activity = await activityData(id, api);
        const average = await averageData(id, api);
        const performance = await performanceData(id, api);
        setData({ user, activity, average, performance });
        setIsLoading(false);
      } catch (error) {
        console.log("error : ", error);
        navigate("/Error");
      }
    })();
  }, [navigate, id, api]);

  return (
    <Wrapper>
      <VerticalLayout />
      {isLoading ? (
        "Chargement de la page en cours... "
      ) : (
        <Main>
          <Content>
            <Header>
              <h1>
                Bonjour <span>{data.user.firstName}</span>
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
                <ActivityCard
                  name="Calories"
                  unit="kCal"
                  icon={calories}
                  data={data.user.keyData.calorieCount}
                />
                <ActivityCard
                  name="Protéines"
                  unit="g"
                  icon={proteines}
                  data={data.user.keyData.proteinCount}
                />
                <ActivityCard
                  name="Glucides"
                  unit="g"
                  icon={glucides}
                  data={data.user.keyData.carbohydrateCount}
                />
                <ActivityCard
                  name="Lipides"
                  unit="g"
                  icon={lipides}
                  data={data.user.keyData.lipidCount}
                />
              </Cards>
            </Activity>
          </Content>
        </Main>
      )}
    </Wrapper>
  );
}
export default Dashboard;
