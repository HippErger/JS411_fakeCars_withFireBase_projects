
## Day 1 - Class 8 Authentication

 We have a functioning FireBase sign up component but, not a functional login component. We will be adding a FireBase login page and protected routes to the FakeCars.com application. Once complete, you will be able to login to the app and remain logged in on page refresh and limit page access when logged out.

1. You should see a sign up button on the top-right when the app first starts. Go ahead and navigate to it proceed to Sign up a new user. Notice that it takes you to the home page. Now open the console and look at the "auth.currentUser" in the console. You should see an object with the user information indicating our account creation was successful.  

2. Next click the logout button. Nothing happen? Refresh the page. You will notice the "auth.currentUser" is `null` and a login button has appeared in the top right. Currently our sign up and logout work but, it is not dynamic.(hint: firebase `signOut`  is located in Navigation.js and works the same as our pre-class lesson) 

3. Now we need to let our app know when a user is logged in or out without having to refresh the page. Go to `App.js` and `import {  onAuthStateChanged } from 'firebase/auth'` Write a `useEffect` hook for `onAuthStateChanged` and save the results in state under the appropriate comment.(don't forget all the needed imports). 

4. Look in `Navigation.js` We want our app to conditionaly display the login/logout without having to manaualy refresh the page. Use what you did in `App.js` from `onAuthStateChanged` as a prop to passed in and render logout/login conditionally. Test it out What happens?

5. But does our app know we are ever logged in or out? Click on the "Home" and "About" links on the navigation bar. It looks like we can still access everything when logged out. 

6. In the `Router.js` file we can see a list of all our routes and paths. Under the appropriate comment Write a `ProtectedRoute` component checking for the FireBase `user` that will be passed down from the `App` component.

7. Replace all the element properties in our `Route` components (inside of `Routes`) with `<ProtectedRoute />` EXCEPT for the "/login" and "/signup" route. We always want to be able to access so leave them alone.

8. Don't forget to also add the component to the `<ProtectedRoute />` element in which the Route should render. For example, if the route is "/about", we would want to pass our "About" component in the component property:`<ProtectedRoute component={ About }/>`

9. Upon making the changes to the `Route` component you should notice that you can no longer access any of the links in the navigation bar when logged out. They send you back to the login page because there is no Access to FireBase authentication. You need to make sure to let the router know the `user` state.

10. Go back to `App.js` and Pass the resulting state as a prop called `user` to the `<Router  user={user}/>` component. Then pass it to your `<ProtectedRoute user={user} component={ About }/>`

11. Notice you can now login and access the pages appropriately.  Refresh the page. Were you directed back to the login page?

12. Currently we can sign up new users and logout but, we want to be able to log back in. Go to the `Login` component (under `src/components/Login.js`) and look at the login function. There is a comment to fill out the login function.

13. Test the app and make sure everything is working as expected.
