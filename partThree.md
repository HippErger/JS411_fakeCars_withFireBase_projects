

## Day 3 - Class 10 Authorization

Your task will be to Allow the user upon Sign up select their intention for using the app either buying or selling. Implement a role system where a seller can add a new car but, a buyer can only view the cars. When a buyer is logged in they will not be able to see the "Add Car" button.

### Set UP
1. Change project name in `.firebaserc`  to match your project name in FireBase. In the `.firebaserc` file of your root directory you will see something inside like this. Change it to the name of your project from FireBase. Use the same one from your pre-class learning. You should also have a `.firebaserc` from your pre-class serverless functions work that you can just copy and paste.

```javascript
{
  "projects": {
    "default": "**YOUR_FIREBASE_PROJECT_HERE**"
  }
}

```

2. The function dependencies need to be installed. Go to `functions/` folder `cd functions` and type `npm install`.

3. The boiler plate for `functions/index.js` is set up but, in `firebase-config` you need to uncomment the `getFunctions` and `connectFunctionsEmulator` and their `import`.

### Component Reusability

1. We are going to add an edit button with `<EditCar/>` to the `<Car/>` component so that when a user clicks more details they can edit if  authorized to do so. You will need to import the `<EditCar/>` component. Look at the props for `<EditCar/>` and notice you will need to set a `setAnchorEl`  prop. In `<Car/>` set  `const [anchorEl, setAnchorEl] = useState(null);`  Also make sure to pass in the `carId` and `carsData` to props to `<EditCar/>`.


### Add Authorization to FakeCars app

#### `SelectUserRole.js`

1. In the pre-class lesson you hard coded the string for a role. This time we are going to have a dynamic selection based on the users input. Go to `SelectUserRole` component then Import it to the correct component.(hint: the user action is signing up)  Pass in a function from the parent component to `SelectUserRole`  that captures the value in state the user selects on sign up. Save that value captured from `SelectUserRole` in the state of the parent component. We can pass that value to the `createRole` function later.

2. Next Add the cloud function in `functions/index.js` We want to have a seller and buyer role. it will do the same thing as the one we used in the pre-class lesson however, some variable names will need to be changed to match our use case.

#### `utils/utilityFUnctions.js`

3. We need to call the cloud function from the front end when a user signs up. Goto `utils/utilityFUnctions.js` here you will add the `createRole` function it will be identical to the one you used in pre-class using `httpsCallable` to pass in the functions from `import {functions} from './../firebase-config'` and the name of the function from your
cloud function as a string then `import` it into the correct file. (hint: the user action is signing up)

4. Call `createRole` in the appropriate spot passing in the two necessary arguments.(hint: you are assigning a role to the user after sign up) Remember one of the arguments is a string that is the name of the role selected. In the pre-class we hardcoded it, but here we want to make it dynamic. Pass in the role value from the `SelectUserRole` component's parent to `createRole`.

5. Now open up two terminals and run your functions and react app. Go back to the pre-class if you are unsure about this step. Sign a user up and see if your code works correctly. You should have a `console.log()` in your cloud function and return the response to your createRole function just like the pre-class.

#### `hooks/customHooks.js`

6. Now we would expect our FireBase user object in app.js to to have the claim/role attached and update with `onAuthStateChange`. However if we read the [documentation](https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#onauthstatechanged) of `onAuthStateChange`. we will see that it only refreshes on login and logout. We have to force a refresh of the object. `console.log()` your user object from `onAuthStateChange` to see for your self.

7. Your next step is to create a function that will refresh the user object get the role/claim and be a custom hook callable any where in your code. The advantage of this is you can use it to check for the Authorization of a user anywhere in your app. Go to `hooks/customHooks.js` you will see a basic setup. 

8. You will fill out this custom hook `useIsAuthorized` to  take in two arguments/parameters The user object to be refreshed and a string to grab the role/claim from the same user object then set the results in state and return that state.

  > Note: The difference between a hook and a regular component is A hook returns state instead of jsx/html.

Refresh it with `const idTokenResult = await user?.getIdTokenResult();` (hint: `user` is the  FireBase user object from `onAuthStateChange`) If you read the [documentation](https://firebase.google.com/docs/reference/js/v8/firebase.User#getidtokenresult)  you will see `getIdTokenResult()` takes in an argument. Read the documentation
and input the correct argument.(hint: the user oject is currently stale and not up to date). Read the comment for more details.

9. Once complete The user object now has the claim/role attached to it. Now we need to utilize `useIsAuthorized` in places we want to restrict access.

#### `Dashboard.js`

11. We only want users that can sell to see the "Add Car" button. `useIsAuthorized` should be used here to check if the user is authorized.(hint: you need the FireBase user object from the App component) As the developer you pick the authorization of this component so type a string in the argument based on the authorization role we require for this component. Then use the resulting value to conditionally render <AddCar/>.

12. Test Your app log in as both a seller and then buyer. Make sure it is working as expected.

#### Push Your Self Further
Prompt 1: Create a welcome banner in the Header that says: “Here are all the cars you can buy!” for buyers and “Here are all the cars you can sell!" for sellers.


Prompt 2: Add a “Welcome {userEmail}" or “Welcome {userName}" to Nav Bar How do you do this? Figure it out.


Prompt 3: How would you change “Welcome" to “Good morning”, “Good Afternoon”, and “Good Evening” ? Figure it out.









