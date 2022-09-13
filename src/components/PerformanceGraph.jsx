import styled from "styled-components";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const Wrapper = styled.div`
  width: 31%;
  ${"" /* height:50%; */}
  background: #282d30;
  border-radius: 5px;
  overflow: hidden;
  padding: 0.1rem;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  ${"" /* flex-grow:1; */}
`;

function PerformanceGraph({ data }) {
  return (
    <Wrapper>
      <ResponsiveContainer >
        <RadarChart
          outerRadius="58%"
          innerRadius="5%"
          data={data.performance}
          cx="50%"
          cy="50%"
        >
          <PolarGrid 
            radialLines={false}
            outerRadius="10%"
            />

          <PolarAngleAxis
            dataKey="kind"
            stroke={"#fff"}
            tickLine={false}
            radius="5%"
            fontSize={12}
            strokeWidth={1}
            axisLine={true}
          />

          <Radar
            name={data.performance.id}
            dataKey="value"
            fill="red"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </Wrapper>
  );
}

export default PerformanceGraph;
