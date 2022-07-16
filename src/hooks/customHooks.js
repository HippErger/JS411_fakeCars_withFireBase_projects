import { useState, useEffect } from "react";
              
export const useIsAuthorized = () => { // Add the two necessary parameters
  const [isUserRole, setIsUserRole] = useState(false);

    // Put getUserRole function inside of a useEffect hook and call it inside there
    // then refresh the user token
    // grab the role/claim from the resulting object using the role string
    // hint: console.log() the result to see find the claims/role
    //  and set it in state     
    // return that state 


    const getUserRole = async () => {

    }

  return isUserRole;
};
