import styled from "styled-components";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const Wrapper = styled.div`
  
  width:26%;
  height:50%;
  background: #282d30;
  border-radius: 5px;
  overflow: hidden;
  padding: 0.1rem;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  ${'' /* flex-grow:1; */}
  
`;

function PerformanceGraph({ data }) {
  return (
    <Wrapper>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          outerRadius={75}
          innerRadius={10}
          data={data.performance}
          cx="50%"
          cy="50%"
        >
          <PolarGrid 
          radialLines={false} />

          <PolarAngleAxis
            dataKey="kind"
            //style={{ color: "#fff" }}
            stroke={"#fff"}
            tickLine={false}
            radius={10}
            fontSize={12}
            strokeWidth={1}
            axisLine={false}
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
