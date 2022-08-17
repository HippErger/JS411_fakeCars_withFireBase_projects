import React, { useState } from "react";
// import {db} instance from the firebase-config file

// Import necessary functions from firebase/firestore library: {collection, doc, setDoc}

import { Chip, Grid, IconButton, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function EditCar(props) {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState("");
  const [car, setCar] = useState({});
  
   // Add CarsData prop to car state
   useEffect(() => {
    const foundCar =  props.carsData.find((car) => car.id === props.carId)
    props.setCar(foundCar);
  }, [prop.carsData,props.carId])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    props.setAnchorEl(null);
  };

  const handleDeleteFromArray = (color) => {
    const newArr = car.colors.filter((c) => c !== color);
    const newCar = { ...car };
    newCar.colors = newArr;
    console.log(color, newCar);
    return setCar(newCar);
  };

  const handleAddToArray = (color) => {
    const newCar = { ...car };
    newCar.colors.push(color);
    console.log(color, newCar);
    setCar(newCar);
    setColor("");
  };

  // This function is connected to the "Save Changes" buttons "onClick" event.
  // Make sure to make this function asynchronous
  const handleSubmit = () => {
    console.log("This is your new car:", car);
    console.log("This is the card ID: ", props.carId);
    // Create Firestore query function here. Make sure to use async/await
    // Also, make sure to wrap your code in a try/catch block to handle any errors

    handleClose();
  };

  return (
    <>
      <IconButton variant="contained" onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
        <DialogTitle align="center">Edit Car Details</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} mt={1}>
            <Grid item xs={6}>
              <TextField
                inputProps={{ fontSize: "50px" }}
                value={car?.make}
                id="make"
                label="Make"
                type="text"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => setCar({ ...car, make: e.target.value })}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                inputProps={{ fontSize: "50px" }}
                value={car?.model}
                id="model"
                label="Model"
                type="text"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => setCar({ ...car, model: e.target.value })}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                value={car?.miles_per_gallon}
                id="miles_per_gallon"
                label="Miles Per Gallon"
                type="number"
                variant="outlined"
                size="small"
                onChange={(e) =>
                  setCar({ ...car, miles_per_gallon: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                value={car?.cylinders}
                id="cylinders"
                label="Cylinders"
                type="number"
                variant="outlined"
                size="small"
                onChange={(e) => setCar({ ...car, cylinders: e.target.value })}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                value={car?.displacement}
                id="displacement"
                label="Displacement"
                type="number"
                variant="outlined"
                size="small"
                onChange={(e) =>
                  setCar({ ...car, displacement: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                value={car?.horsepower}
                id="horsepower"
                label="Horsepower"
                type="number"
                variant="outlined"
                size="small"
                onChange={(e) => setCar({ ...car, horsepower: e.target.value })}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                value={car?.weight_in_lbs}
                id="weight_in_lbs"
                label="Weight (lbs)"
                type="number"
                variant="outlined"
                size="small"
                onChange={(e) =>
                  setCar({ ...car, weight_in_lbs: e.target.value })
                }
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                value={car?.acceleration}
                id="acceleration"
                label="Acceleration"
                type="number"
                variant="outlined"
                size="small"
                onChange={(e) =>
                  setCar({ ...car, acceleration: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={car?.year}
                id="year"
                label="Year"
                type="date"
                variant="outlined"
                size="small"
                onChange={(e) => setCar({ ...car, year: e.target.value })}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                value={car?.origin}
                id="origin"
                label="Origin"
                type="Origin"
                variant="outlined"
                size="small"
                onChange={(e) => setCar({ ...car, origin: e.target.value })}
              />
            </Grid>
            <Grid item sx={{ margin: "auto" }} xs={8}>
              <span style={{ display: "flex" }}>
                <TextField
                  value={color}
                  id="color"
                  label="Add Colors"
                  type="text"
                  fullWidth
                  variant="outlined"
                  size="small"
                  onChange={(e) => {
                    setColor(e.target.value);
                  }}
                />
                <Button
                  sx={{ alignSelf: "center", ml: "5px" }}
                  variant="contained"
                  type="submit"
                  onClick={() => handleAddToArray(color)}
                >
                  Add
                </Button>
              </span>
            </Grid>
            <Grid item xs={12}>
              <h6>Current Colors: </h6>
              <span>
                {car.colors.map((color) => (
                  <Chip
                    clickable
                    label={color}
                    key={color}
                    onDelete={() => handleDeleteFromArray(color)}
                    sx={{
                      margin: "2px",
                      backgroundColor: color,
                    }}
                  />
                ))}
              </span>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="error">
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained" color="success">
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
