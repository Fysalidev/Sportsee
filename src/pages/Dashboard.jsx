import styled from "styled-components";

import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ApiContext } from "../utils/context";
import { activityData } from "../services/providers";
import { averageData, performanceData, userData } from "../services/providers";

import calories from "../assets/calories.png";
import proteines from "../assets/proteines.png";
import glucides from "../assets/glucides.png";
import lipides from "../assets/lipides.png";

import VerticalLayout from "../components/VerticalLayout";
import ActivityCard from "../components/ActivityCard";
import ActivityGraph from "../components/ActivityGraph";
import SessionGraph from "../components/SessionGraph";
import PerformanceGraph from "../components/PerformanceGraph";
import ScoreGraph from "../components/ScoreGraph";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;

const Main = styled.main`
  flex-grow: 1;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 6.805% 0 8.24%;
`;

const Header = styled.header`
  font-family: "Roboto";
  font-style: normal;

  & h1 {
    font-size: 48px;
    font-weight: 500;
    line-height: 24px;
    margin-top: 5.14%;
  }

  & span {
    color: red;
  }

  & p {
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    margin-top: 3.8%;
  }
`;

const Activity = styled.div`
  display: flex;
  gap: 3%;
  height: 65.5%;
  margin-top: 5.35%;
`;

const Graphics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.75%;
  max-height: 611px;
  width: 74.29%;
`;

const OtherGraphics = styled.div`
  display: flex;
  gap: 1%;
  height: 43.05%;
  justify-content: space-between;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 611px;
  width: 23%;
`;

/**
 * Create Dashboard page
 * @returns {JSX.Element} Dashboard component
 */

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
                <ActivityGraph data={data.activity} />
                <OtherGraphics>
                  <SessionGraph data={data.average.sessions} />
                  <PerformanceGraph data={data.performance} />
                  <ScoreGraph data={data.user.score} />
                </OtherGraphics>
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
