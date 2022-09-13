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
  margin: 0 6.805% 0 8.24%;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Header = styled.header`
  font-family: "Roboto";
  font-style: normal;

  & h1 {
    line-height: 24px;
    font-size: 48px;
    font-weight: 500;
    margin-top:5.14%;
  }

  & span {
    color: red;
  }

  & p {
    line-height: 24px;
    font-size: 18px;
    font-weight: 400;
    margin-top:3.8%;
  }
`;

const Activity = styled.div`
  display: flex;
  gap: 3%;
  margin-top:5.35%;
  height:65.5%;
  ${'' /* border:solid 2px red; */}
`;

const Graphics = styled.div`
  width: 74.29%;
  max-height:611px;
  display: flex;
  flex-direction: column;
  gap: 4.75%;
`;

const OtherGraphics = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1%;
  ${'' /* border: solid 2px green; */}
  height:43.05%;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height:611px;
  width: 23%;
  ${'' /* flex-grow: 1; */}
  ${'' /* border: solid 2px orange; */}
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
        console.log(data);
        setIsLoading(false);
      } catch (error) {
        console.log("error : ", error);
        navigate("/Error");
      }
    })();
  }, [navigate, id, api]);

  console.log(data);

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
