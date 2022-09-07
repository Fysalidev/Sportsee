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
overflow:hidden;
`;

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="customTooltipSession">
        <p className="tooltipDataSession">{`${payload[0].value} `}min</p>
      </div>
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
          top: 10,
          right: 0,
          left: -60,
          bottom: 10,
        }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          width="100%"
          vertical={false}
          horizontal={false}
        />
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#FFFFFF", fontWeight: 500, fontSize: 12 }}
          //tickMargin={10}
          interval="preserveStartEnd"
          fillOpacity={0.7}
          style={{ transform: "scale(0.9)", transformOrigin: "bottom" }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={false}
          domain={["dataMin - 5", "dataMax + 5"]}
        />
        <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#FFFFFF"
          opacity={0.7}
          strokeWidth={3}
          dot={false}
          activeDot={{ r: 4 }}
        />
      </LineChart>
    </CustomResponsiveContainer>
  );
}

export default SessionGraph;
