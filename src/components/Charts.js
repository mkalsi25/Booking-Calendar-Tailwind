import React from "react";

import { Chart } from "react-google-charts";
export default function Charts({ result }) {
  return (
    <Chart
      width={"100%"}
      height={"100vh"}
      chartType="Gantt"
      loader={<div>Loading Chart</div>}
      data={[
        [
          { type: "string", label: "Task ID" },
          { type: "string", label: "Task Name" },
          { type: "string", label: "Resource" },
          { type: "date", label: "Start Date" },
          { type: "date", label: "End Date" },
          { type: "number", label: "Duration" },
          { type: "number", label: "Stock" },
          { type: "string", label: "Booking" },
        ],
        [
          result[0].name,
          result[0].name,
          result[0].name,
          new Date(2021, 2, 22),
          new Date(2021, 5, 20),
          null,
          100,
          null,
        ],
        [
          result[1].name,
          result[1].name,
          result[1].name,
          new Date(2021, 5, 21),
          new Date(2021, 8, 20),
          null,
          100,
          null,
        ],
        [
          result[2].name,
          result[2].name,
          result[2].name,
          new Date(2021, 12, 21),
          new Date(2021, 12, 22),
          null,
          100,
          null,
        ],
      ]}
      options={{
        gantt: {
          trackHeight: 30,
        },
      }}
    />
  );
}
