import styled from "styled-components";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from "recharts";

const CustomResponsiveContainer = styled(ResponsiveContainer)`
  border-radius: 5px;
  overflow: hidden;
`;

const CustomTooltipSession = styled.div`
  width: 39px;
  height: 25px;
  ${"" /* background: #ffffff; */}
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline-color: none;
`;

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <CustomTooltipSession>
        <p>{`${payload[0].value} `}min</p>
      </CustomTooltipSession>
    );
  }
  return null;
};

const CustomCursor = ({ points }) => {
  return (
    <Rectangle
      fill="#000000"
      opacity={0.2}
      x={points[1].x}
      width={1000}
      height={300}
    />
  );
};

function SessionGraph({ data }) {
  return (
    <CustomResponsiveContainer width="100%" height={263}>
      <LineChart
        data={data}
        style={{ background: "#FF0000", opacity: 0.9 }}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 10,
        }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          horizontal={false}
        />

        <Line
          type="natural"
          dataKey="sessionLength"
          dot={false}
          activeDot={{ r: 4 }}
          stroke="#FFFFFF"
          strokeWidth={2}
          opacity={0.7}
        />

        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#FFFFFF", fontWeight: 500, fontSize: 12 }}
          interval="preserveStartEnd"
          fillOpacity={0.7}
          padding={{ right: 20, left: 20 }}
        />

        <YAxis
          axisLine={false}
          hide={true}
          tickLine={false}
          tick={false}
          domain={["dataMin - 10", "dataMax + 10"]}
          padding={{ top: 70, bottom: 20 }}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={<CustomCursor />}
          wrapperStyle={{ background: "#FFFFFF", outline: "none" }}
        />

        <text
          x="8%"
          y="10%"
          textAnchor="start"
          dominantBaseline="middle"
          fill="#FFFFFF"
          style={{ fontWeight: 500, opacity: 0.5 }}
        >
          Durée moyenne des
        </text>
        <text
          x="8%"
          y="18%"
          textAnchor="start"
          dominantBaseline="middle"
          fill="#FFFFFF"
          style={{
            fontWeight: 500,
            opacity: 0.5,
          }}
        >
          sessions
        </text>
      </LineChart>
    </CustomResponsiveContainer>
  );
}

export default SessionGraph;
