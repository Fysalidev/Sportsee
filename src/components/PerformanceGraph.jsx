import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

function PerformanceGraph({ data }) {

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={data.performance}
        margin={{
          top: 0,
          right: 0,
          left:0,
          bottom: 0,
        }}
        aspect={1}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />
        <PolarRadiusAxis />
        <Radar
          name={data.performance.id}
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default PerformanceGraph;
