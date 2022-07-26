import  React,{useContext} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {  Paper } from "@mui/material";
import { Link } from 'react-router-dom'

import {ReadLikedCarsContext} from './../Context/likesContext'


const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList({carsData}) {

  const userLikedCars = useContext(ReadLikedCarsContext);

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 175 }}>

      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
            Favorites
          </Typography>
          <Demo>
          <Paper style={{maxHeight: 200, overflow: 'auto'}}>
            <List dense={true} >
             {  /*{  .map((ele,indx) => 
                    <ListItem key={}>
                    <ListItemText
                      primary={carsData.find().model}
                      secondary={ null}
                    />
                     <Link style={{ color: 'mediumblue' }} to={`/car/${}`}>Details</Link>
                  </ListItem>
              )} */ }
            </List>
            </Paper>
          </Demo>
        </Grid>
    
      </Grid>
   
    </Box>
  );
}