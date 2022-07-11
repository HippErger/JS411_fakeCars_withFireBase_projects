import React, { useState } from "react";
// import {db} instance from the firebase-config file

// Import necessary functions from firebase/firestore library: {collection, doc, setDoc}

import {
  Chip,
  Grid,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

export default function AddCar(props) {
  const [open, setOpen] = useState(false);
  const [car, setCar] = useState({
    id: "",
    Name: "",
    Miles_per_Gallon: "",
    Cylinders: "",
    Displacement: "",
    Horsepower: "",
    Weight_in_lbs: "",
    Acceleration: "",
    Year: "",
    Origin: "",
    Colors: [],
  });
  const [color, setColor] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteFromArray = (color) => {
    const newArr = car.Colors.filter((c) => c !== color);
    const newCar = { ...car };
    newCar.Colors = newArr;
    console.log(color, newCar);
    return setCar(newCar);
  };

  const handleAddToArray = (color) => {
    const newCar = { ...car };
    newCar.Colors.push(color);
    console.log(color, newCar);
    setCar(newCar);
    setColor("");
  };

  // This function is connected to the "Add New Car" buttons "onClick" event.
  // Make sure to make this function asynchronous
  const handleSubmit = () => {
    console.log("This is your new car:", car);
    // Create Firestore query function here. Make sure to use async/await
    // Also, make sure to wrap your code in a try/catch block to handle any errors
    
    handleClose()
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Add Car
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
        <DialogTitle align="center">Add a New Car</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} mt={1}>
            <Grid item xs={12}>
              <TextField
                inputProps={{ fontSize: "50px" }}
                value={car.Name}
                id="Name"
                label="Name"
                type="text"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => setCar({ ...car, Name: e.target.value })}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                value={car.Miles_per_Gallon}
                id="Miles_per_Gallon"
                label="Miles Per Gallon"
                type="number"
                variant="outlined"
                size="small"
                onChange={(e) =>
                  setCar({ ...car, Miles_per_Gallon: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                value={car.Cylinders}
                id="Cylinders"
                label="Cylinders"
                type="number"
                variant="outlined"
                size="small"
                onChange={(e) => setCar({ ...car, Cylinders: e.target.value })}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                value={car.Displacement}
                id="Displacement"
                label="Displacement"
                type="number"
                variant="outlined"
                size="small"
                onChange={(e) =>
                  setCar({ ...car, Displacement: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                value={car.Horsepower}
                id="Horsepower"
                label="Horsepower"
                type="number"
                variant="outlined"
                size="small"
                onChange={(e) => setCar({ ...car, Horsepower: e.target.value })}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                value={car.Weight_in_lbs}
                id="Weight_in_lbs"
                label="Weight (lbs)"
                type="number"
                variant="outlined"
                size="small"
                onChange={(e) =>
                  setCar({ ...car, Weight_in_lbs: e.target.value })
                }
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                value={car.Acceleration}
                id="Acceleration"
                label="Acceleration"
                type="number"
                variant="outlined"
                size="small"
                onChange={(e) =>
                  setCar({ ...car, Acceleration: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={car.Year}
                id="Year"
                label="Year"
                type="date"
                variant="outlined"
                size="small"
                onChange={(e) => setCar({ ...car, Year: e.target.value })}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                value={car.Origin}
                id="Origin"
                label="Origin"
                type="Origin"
                variant="outlined"
                size="small"
                onChange={(e) => setCar({ ...car, Origin: e.target.value })}
              />
            </Grid>
            <Grid item sx={{ margin: "auto" }} xs={8}>
              <span style={{ display: "flex" }}>
                <TextField
                  value={color}
                  id="Color"
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
                {car.Colors.map((color) => (
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
            Create New Car
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
