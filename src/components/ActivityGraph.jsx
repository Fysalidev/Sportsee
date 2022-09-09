import styled from "styled-components";
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
  height: 63px;
  width: 39px;
  color: #ffffff;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 7px;
  line-height: 24px;
  text-align:center;
`;

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

function ActivityGraph({ data }) {

  return (
    <Wrapper height={320}>
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

        <Tooltip content={<CustomTooltip />}/>
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

export default ActivityGraph;
