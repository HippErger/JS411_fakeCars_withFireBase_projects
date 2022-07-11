import { Typography } from "@mui/material";
import React from "react";

const Total = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="h3">Total Cars:</Typography>
      {/* change 20 to props.carsData.length */}
      <Typography variant="h3">{20}</Typography>
    </div>
  );
};

export default Total;
