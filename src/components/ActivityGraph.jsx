import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function ActivityGraph({ data }) {
  console.log(data.activity);

  return (
    <ResponsiveContainer height={320}>
      <BarChart
        data={data.activity}
        margin={{
          top: 23,
          right: 26,
          left: 26,
          bottom: 23,
        }}
        barSize={7}
        barGap={8}
        barCategoryGap={54}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          tick={{ fill: "#9B9EAC", fontWeight: 500, fontSize: 14 }}
          tickMargin={14}
          axisLine={false}
        />
        <YAxis
          dataKey="kilogram"
          tickLine={false}
          orientation="right"
          tick={{ fill: "#9B9EAC", fontWeight: 500, fontSize: 14 }}
          tickMargin={20}
          minTickGap={16}
          axisLine={false}
        />
        
        <Tooltip />
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          height={60}
        />
        <Bar
          dataKey="kilogram"
          name="Poids (kg)"
          fill="#282D30"
          radius={[3, 3, 0, 0]}
        />
        <Bar
          dataKey="calories"
          name="Calories brulées (kCal)"
          fill="#E60000"
          radius={[3, 3, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default ActivityGraph;
