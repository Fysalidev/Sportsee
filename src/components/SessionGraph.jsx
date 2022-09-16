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

const Wrapper = styled.div`
  background: red;
  border-radius: 5px;
  overflow: hidden;
  width: 31%;
`;

const CustomTooltipSession = styled.div`
  align-items: center;
  display: flex;
  font-family: "Roboto";
  font-size: 8px;
  font-style: normal;
  font-weight: 500;
  height: 25px;
  justify-content: center;
  line-height: 24px;
  outline-color: none;
  width: 39px;
`;

/**
 * Custom active Tooltip's LineChart
 * @param {boolean}  [Props.active='true']
 * @param {array}   [Props.payload=[]]
 * @returns tooltip or null
 */

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

/**
 * Custom active Tooltip's BarChart
 * @param {prop}
 * @return {JSX.Element} Rectangle component
 */

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

/**
 * Create session graph LineChart
 * @returns {JSX.Element} SessionGraph component
 */

function SessionGraph({ data }) {
  return (
    <Wrapper>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          style={{ background: "#FF0000", opacity: 0.9 }}
          margin={{
            top: 25,
            right: 0,
            left: 0,
            bottom: 25,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            horizontal={false}
            xOuterPadding={1}
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
            padding={{ right: 0, left: 0 }}
          />

          <YAxis
            axisLine={false}
            hide={true}
            tickLine={false}
            tick={false}
            domain={["dataMin - 10", "dataMax + 10"]}
            padding={{ top: 0, bottom: 0 }}
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
            style={{ fontSize: 14, fontWeight: 500, opacity: 0.5 }}
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
              fontSize: 14,
              fontWeight: 500,
              opacity: 0.5,
            }}
          >
            sessions
          </text>
        </LineChart>
      </ResponsiveContainer>
    </Wrapper>
  );
}

export default SessionGraph;
