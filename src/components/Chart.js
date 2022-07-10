import { Typography } from "@mui/material";
import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const Chart = (props) => {
  // create variable "over" with all the cars whose horsepower is >= 200
  // const over = props.carsData.filter((car) => car.Horsepower >= 200).length;
  // create variable "under" with all the cars whose horsepower is < 200
  // const under = props.carsData.filter((car) => car.Horsepower <= 200).length;

  return (
    <div style={{ height: "100%" }}>
      <PieChart
        style={{ width: "200px" }}
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
