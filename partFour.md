
## Day 4 - Class 11 Queries 

## Queries 
Use the [Documentatoin](https://firebase.google.com/docs/firestore/query-data/queries) and your FireBase Learning app to understand quries first. Then continue with this assignment. Also, here is a [video example](https://www.youtube.com/watch?v=gEaY2GZMino) to follow that is close to a setup we already have from CRUD Pre-class.

### Add Feature: User Can Like Cars 

This will be a major feature that will utilize much that you have learned so far. From reading/writing to a database, creating collections and querying data.

The expected behavior is for a user to be able to click a heart icon and save that car to the database so when the user comes back they will be able to see their saved cars on the home page and a list of them in the dashboard. In general when it comes to adding a new feature you always want to start with the data this is called data driven design.

1. When a user Signs up a new collection will be created called `userLikedCars`. This collection will hold the `userId` and an array of `likedCarsId`. Create a function that saves
this `{ userId: userId, likedCarsId: []}` to the database on initial signing up. After that you should Sign up a new user and check the FireStore database to see if it worked.

#### Clickable Icon for each Car On the Home page

2. Next we need some icons to click on that will change based on if they have favorite a car on the home page. We should have it already [package](https://www.npmjs.com/package/@mui/icons-material)(you will see it in package.json dependencies) then read the [Documentation](https://mui.com/material-ui/material-icons/) For material-icons. Find the heart icons one that is solid and one the is just an outline and import them. For now add both icons to each car so they appear after the list of car attributes. You should see the two hearts next to each-other on every car card on the home page.

3. Now we need some `onclick` functionality so that we can capture the id of the chosen car. Remember when passing in a value to an `onclick` function you need to use a function that returns a function so the value can be passed in `onClick={()=> toggleFavorite(car.id)}` This is an anonymous arrow function that returns the named function you will create. Without the outer function `toggleFavorite` would execute right away instead of when clicked. Test by `console.log()` the car Id when it is clicked.



4. Our goal is to update the database in  `userLikedCars` collection when the car is clicked with the corresponding id. However, we do not have access to the document id in the database and we have only written to the database now we need to read it and get the `userLikedCars`  document by Querying with the userId because, we saved it in our database like this `{ userId, likedCarsId: []}` Go look at your FireBase Console and you will see a userId with a value and an empty  `likedCarsId`. 

#### `App.js` and the userId(uid)

5. Go to `App.js` for the firebase user object that contains the userId.(uid) And use that to Query `userLikedCars` collection for the matching document. Copy and paste the code below to get you started. Go to the [Documentation](https://firebase.google.com/docs/firestore/query-data/get-data) If unsure on how to query and read the database.

```javascript
  // App.js
  //class 11:  Query `userLikedCars` collection for the matching document based on the user Id (uid).
   useEffect(() => {
    const getUsersLikedCars = async () => { 
  
    };
    if(user?.uid  != null ){
        getUsersLikedCars();
      } 
    //  console.log("user",user);
  }, [user]);
  

```


6. Once you have retrieved the matching document with a query get the doc and iterate over it and just `console.log` it for now. `console.log(doc.id, " => ", doc.data());`

7.  We need to save the results of querying the `userLikedCars`  collection in state and pass it down via props to update `likedCarsId` when a car is clicked. We have been prop drilling. Passing props to every level. Now we are going to use `createContext` To set the state and automatically pass props all the way down without having to do it ourselves. There will be some slightly different code but, underneath it is working exactly the same as before.

#### Context

8. Go to `Context/likesContext.js` file. You will see a component that is setup to wrap around children components and pass its state and props down to them.

9. Since we want our state/props to be available to our entire app we want to setup the context component above our app component in the `index.js` file.
 
Add:`import {LikedCarsProvider} from './Context/likesContext`

Change:  `root.render(<LikedCarsProvider><App /></LikedCarsProvider>);`

```javascript
      // index.js
    import React from "react";
    import * as serviceWorker from "./serviceWorker";
    import { createRoot } from "react-dom/client";
    import App from "./App";
    import "./index.css";

    import {LikedCarsProvider} from './Context/likesContext'

    const root = createRoot(document.getElementById("root"));
    // <App /> Is Now  Child of <LikedCarsProvider>
    root.render(<LikedCarsProvider><App /></LikedCarsProvider>);

    serviceWorker.unregister();


```


10. We will use the `likedExample` state in `Context/likesContext.js` and `console.log(likedExample)`  in another component to see it in action. Notice the ` <ReadLikedCarsContext.Provider value={likedExample}>` component. It was declared and created `const ReadLikedCarsContext = createContext(undefined);`  and now we will use it to pass props down.

11. This will work in any component but for this example we will use `Home.js`. Import our context `import {ReadLikedCarsContext} from './../Context/likesContext'` To read our username data we need to import a new hook `import React, {useContext} from 'react'`.

12. At the top of the `<Home/>` component Access the props `const userLikedCars = useContext(ReadLikedCarsContext);` then `console.log("userLikedCars",userLikedCars)` it and start the app and check for the value. After That experiement with the commented code and change the
state of likesContext.

```javascript
// Home.js
 import React, {useContext} from 'react'
import {ReadLikedCarsContext} from './../Context/likesContext'
//   // WE CAN CHANGE THE STATE with SetLikedCarsContext fromm likesContext.js
//   // `import {ReadLikedCarsContext, SetLikedCarsContext,} from './../Context/likesContext'`

const Home = ({carsData}) => {
    const userLikedCars = useContext(ReadLikedCarsContext);
    console.log("userLikedCars",userLikedCars)
    //      const setUserLikedCars = useContext(SetLikedCarsContext);
    //      setUserLikedCars("Change values here");
    //      console.log("userLikedCars",userLikedCars) // updated values 


```

13. After testing and understanding context proceed to `Context/likesContext.js` and switch the values from the examples to `likedCars` and `setLikedCars`. So we have a clean slate to work with.
```javascript
     <ReadLikedCarsContext.Provider value={likedCars}>
       <SetLikedCarsContext.Provider value={setLikedCars}>
```


 #### Combine it all together

When a user clicks a heart to like we need to update the `userLikedCars`  collection document and add the `likedCarsId` cars array.
 `{ userId: userId, likedCarsId: []}` Then display a full heart if the car is liked or a heart outline if the car is not liked. In addition, we will have a list of liked cars on the dashboard page.

 14. In the `<App/>` component we are just `console.log(doc.id, " => ", doc.data());` the returned data. Instead follow the data model from the `likedExample` as a guide in the context `LikedCarsProvider` component and save it to `setLikedCars` state instead of just logging it.

 15. Now we can access the `likedCars` state anywhere in the app. Now instead of just logging the `car.id` implement `useContext` to pass `likedCars` document to be updated to the database when the car is clicked. Be sure to Update both the `likedCars` state and the document fromm `userLikedCars` collection. Now check the database and `likedCars` state they should match when you click on heart.

 16. Implement a condition render for the two heart icons. If the id exists in `likedCarsId` array then render the solid heart if it does not exist render the outlined heart. `.includes(car.id)` would be a useful method to check if a value exists in an array.

 17. We now want to render the favorite cars in a list on the dashboard page. We will need the `likedCars` and use the id to find the car in `carsData` and display the model and link to the details when they click the more details link. In `FavoritesList.js` Fill in the missing  `.map((ele,indx) => `,    `primary={carsData.find().model}`, `/car/${}` code and export it to display a list of favorite cars in the dashboard.

 18. Implement delete in the `toggleFavorite` favorites function. You will need to check if the id exists in the like array already and if it does not call `handleAdd` else call  `handledelete`.



