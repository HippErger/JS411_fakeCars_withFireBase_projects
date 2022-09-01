import React from "react";
import { useParams } from "react-router-dom";
import { Container, Paper, Chip } from "@mui/material";
import carsData from "../cars.json";

// Don't forget to pass along (props) as the parameter
const Car = () => {
  const id = useParams().id;
  // Change "carsData" to "props.carsData
  // When you change from a file to a database remember id is stored as a string in firebase
  const car = carsData.find((c) => c.id === Number(id));

  return (
    <Container maxWidth="sm" className="car-container">
      <Paper className="car-paper">
        <h2>{car.make}</h2>
        <h3>{car.model}</h3>
        <div>
          {Object.keys(car).map((key, idx) => {
            return (
              <Chip
                style={{ margin: "5px" }}
                key={idx}
                label={`${key}: ${car[key]}`}
              ></Chip>
            );
          })}
        </div>
      </Paper>
    </Container>
  );
};

export default Car;
