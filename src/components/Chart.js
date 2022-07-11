import { Typography } from "@mui/material";
import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const Chart = () => {
  // create variable "over" with all the cars whose horsepower is >= 200

  // create variable "under" with all the cars whose horsepower is < 200

  return (
    <div style={{ height: "100%" }}>
      <PieChart
        style={{ width: "200px" }}
        // replace the "value" values with our over and under variables.
        data={[
          { title: "Over", value: 16, color: "#C13C37" },
          { title: "Under", value: 4, color: "#E38627" },
        ]}
        label={({ dataEntry }) => dataEntry.value}
        labelStyle={{
          fill: "white",
          fontSize: "small",
        }}
      />
      <Legend />
    </div>
  );
};

function Legend() {
  return (
    <>
      <Typography variant="h6" align="center">
        Horsepower
      </Typography>
      <div align="center">
        <Typography fontSize={12} variant="p">
          <span style={{ background: "#C13C37" }}>&nbsp; &nbsp; &nbsp;</span>
          &nbsp; Over 200 HP
        </Typography>
        &nbsp; &nbsp;
        <Typography fontSize={12} variant="p">
          <span style={{ background: "#E38627" }}>&nbsp; &nbsp; &nbsp;</span>
          &nbsp; Under 200 HP
        </Typography>
      </div>
    </>
  );
}

export default Chart;
