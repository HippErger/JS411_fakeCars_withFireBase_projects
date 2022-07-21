import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardActions,
  Divider,
  Typography,
} from "@mui/material";


import carsData from "../cars.json";
import Query from "./Query";

const Home = () => {
  console.log("CARS", carsData);

  return (
    <>
        <Query/>
      <div className="card-container">
        {carsData.map((car, idx) => (
          <Card key={idx} className="card">
            <CardContent className="text-gray">
              <Typography>{car.make.toUpperCase()}</Typography>
              <Typography>{car.model}</Typography>
              <ul>
                <li>Origin: {car["origin"]}</li>
                <li>MPG: {car["miles_per_gallon"]}</li>
                <li>Cylinders: {car["cylinders"]}</li>
                <li>Horsepower: {car["horsepower"]}</li>
              </ul>
            </CardContent>
            <Divider />
            <CardActions>
              <Link style={{ color: "mediumblue" }} to={`/car/${car.id}`}>
                See More Details
              </Link>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Home;
