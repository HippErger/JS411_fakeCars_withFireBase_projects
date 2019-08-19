## !! INSTRUCTOR REPO !!

This project should be complete and fully executable

## Setup

Clone this repo and run `npm i` and then `npm start`

## Project Instructions

* We are adding a login page to the FakeCars.com application. Once complete, you will be able to login to the app and you will remain logged in on page refresh until the cookie expires at one mintes time.

* You should see a login page when the app first starts. Go ahead and login. Notice that it takes you to the home page. Now, click the logout button. You should have been logged out and taken back to the "/login" route. But are we ever logged in or out? Click on the "Home" and "About" links on the navigation bar. It looks like we can still access everything.

* In the `Router.js` file we can see a list of all our routes and paths. Write a `ProtectedRoute` function under the appropriate comment.

* Write a `checkAuth` function under the approprate comment. Use the `cookie` module to parse the browser cookies and check the `isLogged` cookie. If it has a value, return `true` otherwise return `false`. 

* Replace all uses of the `Route` component (inside of Switch) with `ProtectedRoute` EXCEPT for the "/login" route. We always want to be able to access that so leave it alone.

* Upon making the change to `ProtectedRoute` you should notice that you can no longer access any of the links in the navigation bar. They send you back to the login page because there is no cookie available. Let's make sure we set one when we log in.

* Go to the `Login` component (under `src/Login.js`) and look at the login function. There is a comment to add the cookie. Set the cookie equal to the following value: `loggedIn=true;max-age=60*1000`. 

* Notice you can now login and access the pages appropriately. We've set an expiration time of one minute on the cookie so go do something else for a minute and then come back to this site. Refresh the page. Were you directed back to the login page?

