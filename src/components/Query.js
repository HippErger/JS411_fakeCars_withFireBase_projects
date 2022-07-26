import React, { useEffect, useState } from "react";
import {  TextField,  IconButton,  InputAdornment,  RadioGroup,  FormControlLabel,  Radio } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

const Query = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [option, setOption] = useState("make");

  const handleRadioChange = (event) => {
    setOption(event.target.value);
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    console.log("submitted");
    if (searchQuery) {
      console.log("option:", option);
      console.log("searchQuery:", searchQuery);
    }
  };

  useEffect(() => {
    console.log("effect");
    return () => {
      console.log("cleanup");
    };
  }, []);

  return (
    <form
      style={{
        margin: "20px auto",
        width: "350px",
      }}
      onSubmit={handleSubmit}
    >
      <div style={{ display: "flex" }}>
        <TextField
          label="Search Cars..."
          variant="outlined"
          placeholder="Search..."
          size="small"
          fullWidth
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          InputProps={{
            endAdornment: searchQuery ? (
              <InputAdornment position="end">
                <IconButton onClick={() => setSearchQuery("")}>
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            ) : (
              <></>
            ),
          }}
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon color="primary" />
        </IconButton>
      </div>
      <div>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          value={option}
          name="radio-buttons-group"
          onChange={handleRadioChange}
        >
          <FormControlLabel value="make" control={<Radio />} label="Make" />
          <FormControlLabel value="model" control={<Radio />} label="Model" />
        </RadioGroup>
      </div>
    </form>
  );
};

export default Query;
