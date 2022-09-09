import styled from "styled-components";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const Wrapper = styled.div`
  min-width: 254px;
  height: 263px;
  background: #282d30;
  border-radius: 5px;
  overflow: hidden;
  padding: 0.1rem;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  flex-grow:1
  
`;

function PerformanceGraph({ data }) {
  return (
    <Wrapper>
      <ResponsiveContainer width="100%" height={263}>
        <RadarChart
          outerRadius={90}
          innerRadius={10}
          data={data.performance}
          cx="50%"
          cy="50%"
          //style={{ background: "#282D30", color: "#FFFFFF" }}
          //outerRadius="80%"
          //margin={{top: 0,right: 0,left:0,bottom: 0,}}
          //aspect={1}
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
