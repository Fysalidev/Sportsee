import styled from "styled-components";
import { ResponsiveContainer, RadialBarChart, RadialBar } from "recharts";

const Wrapper = styled.div`
  background: #fbfbfb;
  border-radius: 5px;
  flex-grow: 1;
  ${'' /* min-width: 228px; */}
  width:30%;
  overflow: hidden;
  position: relative;
`;

const Title = styled.h2`
  color: #20253a;
  font-family: "Roboto";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  left: 20px;
  line-height: 24px;
  position: absolute;
  top: 15px;
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
  z-index: 1;
`;

const Objectif = styled.p`
  color: #282d30;
  font-family: "Roboto";
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  padding: 0 10px;
  text-align: center;
  & span {
    font-weight: 400;
  }
`;

const Comment = styled.p`
  color: #74798c;
  font-family: "Roboto";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  width: 100px;
`;

function ScoreGraph({ data }) {
  console.log(data);

  const tab = [
    {
      scale: 0,
      fill: "transparent",
    },
    {
      scale: 100,
      fill: "transparent",
    },
    {
      scale: data,
      fill: "#FF0000",
    },
  ];

  return (
    <Wrapper>
      <Title>Score</Title>
      <Content>
        <Objectif>
          {data}
          <span>%</span>
        </Objectif>
        <Comment>de votre objectif</Comment>
      </Content>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          outerRadius={90}
          innerRadius={70}
          //innerRadius="50%"
          //outerRadius="80%"
          data={tab}
          startAngle={-280}
          endAngle={80}
          barSize={20}
        >
          <RadialBar
            background={false}
            clockWise={true}
            dataKey="scale"
            cornerRadius={25}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </Wrapper>
  );
}

export default ScoreGraph;
