import styled from "styled-components";

import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from "recharts";

const Wrapper = styled.div`
  min-width: 254px;
  background: #fbfbfb;
  flex-grow: 1;
`;

function ScoreGraph({ data }) {
  console.log(data);

  const formatData = [
    {
      score: data,
      fill: "#E60000",
    },
  ];

  return (
    <Wrapper>
      <ResponsiveContainer width="100%" height={263}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          style={{ backgroundColor: "#FBFBFB" }}
          width="100%"
          height="100%"
          margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
          innerRadius={70}
          barSize={10}
          data={data}
          startAngle={80}
          endAngle={450}
        >
          <circle cx="50%" cy="50%" fill="white" r="82"></circle>
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={1}
            tick={false}
          />
          <RadialBar
            background
            dataKey="uv"
            angleAxisId={1}
            fill="#E60000"
            cornerRadius="10"
            data={[data[0]]}
          />
         {/*  <text
            className="scoreSize"
            fontWeight="700"
            fontSize={26}
            fill="#282D30"
            x="50%"
            y="45%"
            textAnchor="middle"
          >{`${data}%`}</text>
          <text
            className="graphTitle"
            fontWeight="500"
            fill="#74798C"
            x="50%"
            y="55%"
            textAnchor="middle"
          >
            de votre
          </text>
          <text
            className="graphTitle"
            fontWeight="500"
            fill="#74798C"
            x="50%"
            y="65%"
            textAnchor="middle"
          >
            objectif
          </text>
          <text
            className="graphTitle"
            x="12%"
            y="15%"
            width={147}
            height={48}
            textAnchor="start"
            dominantBaseline="middle"
            fill="#20253A"
            style={{ fontWeight: 500 }}
          >
            Score{" "}
          </text> */}
        </RadialBarChart>
      </ResponsiveContainer>
    </Wrapper>
  );
}

export default ScoreGraph;
