import styled from "styled-components";

import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from "recharts";

const Wrapper = styled.div`
  min-width: 228px;
  background: #fbfbfb;
  flex-grow: 1;
`;

function ScoreGraph({data}) {
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
      <ResponsiveContainer width="100%" height={263}>
        <RadialBarChart
          innerRadius="50%"
          outerRadius="80%"
          data={tab}
          startAngle={-280}
          endAngle={80}
          barSize={20}
        >
          <RadialBar
            background ={false}
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
