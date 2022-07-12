import { Typography } from "@mui/material";
import React from "react";

// Don't forget to pass along (props) as the parameter
const Total = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="h3">Total Cars:</Typography>
      <Typography variant="h3">
        {/* change 20 to props.carsData.length */}
        {20}
      </Typography>
    </div>
  );
};

export default Total;
