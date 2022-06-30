## Setup

- First Look at the firebase-config file and notice we are grabbing the environment variables. Use your FireBase credentials from the .`env` file you made from pre-class and put it in the root directory on the same level as your package.json.

- Clone this repo and run `npm i` and then `npm start`

## Class 8 Project Instructions 

- We have a functioning FireBase sign up component we are adding a FireBase login page and protected routes to the FakeCars.com application. Once complete, you will be able to login to the app and you will remain logged in on page refresh and control page access.

- You should see a sign up button on the top-right when the app first starts. Go ahead and navigate to it proceed to Sign up a new user. Notice that it takes you to the home page. Now open the console and look at the "auth.currentUser" in the console. You should see an object with the user information indicating our account creation was successful.  

- Next click the logout button and refresh the page. You will notice the "auth.currentUser" is `null` and a login button has appeared in the top right. Currently our sign up and log out work but, it is not dynamic and the login page does not connect to FireBase.  

- Now we need to know when the user is logged in or out. Go to `App.js` and `import {  onAuthStateChanged } from 'firebase/auth'`  write Write a `useEffect` hook for `onAuthStateChanged` and save the results in state under the appropriate comment.(don't forget all the needed imports). Pass the resulting state as a prop to the `<Navigation  user={user} />` component. Look at the logout/login dynamic render and change the correct code with your passed in prop to conditionally render logout/login. What happens?

- But does our app know we are ever logged in or out? Click on the "Home" and "About" links on the navigation bar. It looks like we can still access everything when logged out. 

- In the `Router.js` file we can see a list of all our routes and paths. Write a `ProtectedRoute` checking for the FireBase `user` under the appropriate comment.

- Replace all the element properties in our `Route` components (inside of `Routes`) with `<ProtectedRoute />` EXCEPT for the "/login" and "/signUp" route. We always want to be able to access so leave them alone.


- Don't forget to also add the component to the `<ProtectedRoute />` element in which the Route should render. For example, if the route is "/about", we would want to pass our "About" component in the component property:`<ProtectedRoute component={ About }/>`


- Upon making the changes to these `Route`'s you should notice that you can no longer access any of the links in the navigation bar when logged out. They send you back to the login page because there is no Access to FireBase authentication. You need to make sure to let the router know the `user` state.

Go back to `App.js` and Pass the resulting state as a prop called `user` to the `<Router  user={user}/>` component. Then pass it to your `<ProtectedRoute user={user} component={ About }/>`

- Notice you can now login and access the pages appropriately.  Refresh the page. Were you directed back to the login page?

- Currently we can sign up new users and logout but, we want to be able to log back in. Go to the `Login` component (under `src/components/Login.js`) and look at the login function. There is a comment to fill out the login function.


## Class 9 Project Instructions 

