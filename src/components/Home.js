import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardActions, Divider } from '@mui/material'

import carsData from '../cars.json'

const Home = () => {

    const toggleFavorite = async (carId) => {
        // Directions for delete
        // exist or not exist
        // .includes()
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
        // if it exists delete it from state and delete it from database
        // if it does not exist add it to state and add it to database





       
  
      const handleAdd = async (carId) => {
 
      };
  

      const handledelete = async (id) => {
      
      
      };
    }
 
    console.log('CARS', carsData)
    return (
        <div className="card-container">
            {carsData.map((car, idx) => (
                <Card key={idx} className="card">
                    <CardContent className="text-gray">
                        <span>{car.Name.toUpperCase()}</span>
                        <ul>
                        <li>Miles_per_Gallon: {car["Miles_per_Gallon"]}</li>
                        <li>Cylinders: {car["Cylinders"]}</li>
                        <li>Displacement: {car["Displacement"]}</li>
                        <li>Horsepower: {car["Horsepower"]}</li>
                        </ul>
                    </CardContent>
                    <Divider />
                    <CardActions style={{ color: 'mediumblue' }}>
                        <Link to={`/car/${car.id}`}>See More Details</Link>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default Home