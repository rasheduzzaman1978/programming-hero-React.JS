import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';


const resultData = [
  {
    "student_id": 1,
    "name": "Alice",
    "physics": 89,
    "chemistry": 87,
    "math": 90
  },
  {
    "student_id": 2,
    "name": "Bob",
    "physics": 75,
    "chemistry": 80,
    "math": 78
  },
  {
    "student_id": 3,
    "name": "Charlie",
    "physics": 92,
    "chemistry": 85,
    "math": 88
  },
  {
    "student_id": 4,
    "name": "David",
    "physics": 68,
    "chemistry": 72,
    "math": 70
  },
  {
    "student_id": 5,
    "name": "Eva",
    "physics": 95,
    "chemistry": 91,
    "math": 93
  },
  {
    "student_id": 6,
    "name": "Frank",
    "physics": 60,
    "chemistry": 65,
    "math": 62
  },
  {
    "student_id": 7,
    "name": "Grace",
    "physics": 88,
    "chemistry": 84,
    "math": 86
  },
  {
    "student_id": 8,
    "name": "Henry",
    "physics": 77,
    "chemistry": 79,
    "math": 74
  },
  {
    "student_id": 9,
    "name": "Ivy",
    "physics": 91,
    "chemistry": 89,
    "math": 92
  },
  {
    "student_id": 10,
    "name": "Jack",
    "physics": 73,
    "chemistry": 76,
    "math": 75
  }
];

const ResultChart = () => {
  return (
    <div>

      <LineChart width={800} height={500} data={resultData}>
        <XAxis dataKey={'name'}></XAxis>
        <YAxis></YAxis>
        <Line dataKey={'math'}></Line>
        <Line dataKey={'chemistry'} stroke='red'></Line>

      </LineChart>
    </div>
  );
};

export default ResultChart;