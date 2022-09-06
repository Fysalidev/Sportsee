import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
} from "recharts";

function ScoreGraph() {
 const data = [
/*    {
     name: "18-24",
     uv: 40,
     pv: 2400,
     fill: "#8884d8",
   },
   {
     name: "25-29",
     uv: 50,
     pv: 4567,
     fill: "#83a6ed",
   },
   {
     name: "30-34",
     uv: 60,
     pv: 1398,
     fill: "#8dd1e1",
   },
   {
     name: "35-39",
     uv: 70,
     pv: 9800,
     fill: "#82ca9d",
   },
   {
     name: "40-49",
     uv: 80,
     pv: 3908,
     fill: "#a4de6c",
   },
   {
     name: "50+",
     uv: 90,
     pv: 4800,
     fill: "#d0ed57",
   }, */
   {
     name: "unknow",
     uv: 100,
     pv: 4800,
     fill: "#ffc658",
   },
 ];

  return (
    <ResponsiveContainer>
      <RadialBarChart
        width={730}
        height={250}
        innerRadius="90%"
        outerRadius="80%"
        data={data}
        startAngle={0}
        endAngle={360}
      >
        <RadialBar
          minAngle={15}
          label={{ fill: "#666", position: "insideStart" }}
          background
          clockWise={true}
          dataKey="uv"
          domain={[0,100]}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}

export default ScoreGraph;
