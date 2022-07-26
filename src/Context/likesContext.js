import React, { createContext, useState } from "react";

// Create two context:
// ReadLikedCarsContext: to query the context state
// SetLikedCarsContext: to mutate the context state
const ReadLikedCarsContext = createContext(undefined);
const SetLikedCarsContext = createContext(undefined);

// A "provider" is used to denote a component that passes its props
// all the way down the component tree.
function LikedCarsProvider({ children }) {
  const [likedExample, setLikedExample] = useState({
    docId: "34ffdfd",
    data: { userId: "56ybdd", likedCarsId: ['fsdf45555','v4fsdf45k50'] }
  });

  const [likedCars, setLikedCars] = useState({});


   return (
     <ReadLikedCarsContext.Provider value={likedExample}>
       <SetLikedCarsContext.Provider value={setLikedExample}>
         {children}
       </SetLikedCarsContext.Provider>
     </ReadLikedCarsContext.Provider>
   );
 }
 
 export { LikedCarsProvider, ReadLikedCarsContext, SetLikedCarsContext };