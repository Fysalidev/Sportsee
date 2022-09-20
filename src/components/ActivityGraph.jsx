import styled from "styled-components";
import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Wrapper = styled(ResponsiveContainer)`
  background: #fbfbfb;
`;

const CustomTooltipWrapper = styled.div`
  background: #e60000;
  color: #ffffff;
  height: 63px;
  font-family: "Roboto";
  font-size: 7px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  outline: none;
  text-align: center;
  width: 39px;
`;

/**
 * Custom active Tooltip's BarChart
 * @param {boolean}  [Props.active='true']
 * @param {array}   [Props.payload=[]]
 * @returns tooltip or null
 */

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <CustomTooltipWrapper>
        <p className="tooltipData">{`${payload[0].value} `}g</p>
        <p className="tooltipData">{`${payload[1].value} `}kCal</p>
      </CustomTooltipWrapper>
    );
  }
  return null;
};

/**
 * Create activity graph BarChart
 * @returns {JSX.Element} ActivityGraph component
 */

function ActivityGraph({ data }) {
  return (
    <Wrapper width="100%" height="52.38%">
      <BarChart data={data.activity} barSize={7} barGap={8} barCategoryGap={57}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          tick={{ fill: "#9B9EAC", fontWeight: 500, fontSize: 14 }}
          tickMargin={14}
          axisLine={false}
        />

        <YAxis
          yAxisId="left"
          orientation="left"
          dataKey="calories"
          tickCount={3}
          hide={true}
        />

        <YAxis
          yAxisId="right"
          orientation="right"
          dataKey="kilogram"
          tickLine={false}
          tick={{ fill: "#9B9EAC", fontWeight: 500, fontSize: 14 }}
          tickMargin={20}
          minTickGap={16}
          axisLine={false}
          domain={["dataMin - 2", "dataMax + 1"]}
          tickCount={3}
        />

        <Tooltip
          content={<CustomTooltip />}
          wrapperStyle={{ outline: "none" }}
        />
        <Legend
          verticalAlign="top"
          iconType="circle"
          iconSize={8}
          height={60}
          align="right"
          width={300}
          formatter={(value) => {
            return (
              <span style={{ color: "#74798C", fontSize: 14, fontWeight: 500 }}>
                {value}
              </span>
            );
          }}
        />
        <Bar
          yAxisId="right"
          dataKey="kilogram"
          name="Poids (kg)"
          fill="#282D30"
          radius={[3, 3, 0, 0]}
        />
        <Bar
          yAxisId="left"
          dataKey="calories"
          name="Calories brulées (kCal)"
          fill="#E60000"
          radius={[3, 3, 0, 0]}
        />
        <text
          y={15}
          width={147}
          height={48}
          textAnchor="start"
          dominantBaseline="middle"
          fill="#20253A"
          style={{
            fontWeight: 500,
            fontSize: 15,
            fontFamily: "roboto",
          }}
        >
          Activité quotidienne
        </text>
      </BarChart>
    </Wrapper>
  );
}

ActivityGraph.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    activity: PropTypes.arrayOf(
      PropTypes.shape({
        kilogram: PropTypes.number,
        calorie: PropTypes.number,
        day: PropTypes.string,
      }).isRequired
    ),
  }).isRequired,
};

export default ActivityGraph;
