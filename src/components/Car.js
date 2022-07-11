import React from "react";
import { useParams } from "react-router-dom";
import { Container, Paper, Chip } from "@mui/material";
import carsData from "../cars.json";

const Car = () => {
  const id = useParams().id;
  const car = carsData.find((c) => c.id === Number(id));

  return (
    <Container maxWidth="sm" className="car-container">
      <Paper className="car-paper">
        <h2>{car.Name}</h2>
        {Object.keys(car).map((key, idx) => {
          return <Chip key={idx} label={`${key}: ${car[key]}`}></Chip>;
        })}
      </Paper>
    </Container>
  );
};

export default Car;
