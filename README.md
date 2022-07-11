## Setup

- First Look at the firebase-config file and notice we are grabbing the environment variables. Use your FireBase credentials from the .`env` file you made from pre-class and put it in the root directory on the same level as your package.json.

- Clone this repo and run `npm i` and then `npm start`

## Class 8 Project Instructions 

- We have a functioning FireBase sign up component and are adding a FireBase login page and protected routes to the FakeCars.com application. Once complete, you will be able to login to the app and remain logged in on page refresh and limit page access when logged out.

- You should see a sign up button on the top-right when the app first starts. Go ahead and navigate to it proceed to Sign up a new user. Notice that it takes you to the home page. Now open the console and look at the "auth.currentUser" in the console. You should see an object with the user information indicating our account creation was successful.  

- Next click the logout button and refresh the page. You will notice the "auth.currentUser" is `null` and a login button has appeared in the top right. Currently our sign up and logout work but, it is not dynamic and the login page does not connect to FireBase.  

- Now we need to know when the user is logged in or out. Go to `App.js` and `import {  onAuthStateChanged } from 'firebase/auth'` Write a `useEffect` hook for `onAuthStateChanged` and save the results in state under the appropriate comment.(don't forget all the needed imports). 

- Pass the state from `onAuthStateChanged` as a prop to the `<Navigation  user={user} />` component. Look at the logout/login conditional render in `Navigation.js` and change the correct code with your passed in prop to render logout/login. What happens?

- But does our app know we are ever logged in or out? Click on the "Home" and "About" links on the navigation bar. It looks like we can still access everything when logged out. 

- In the `Router.js` file we can see a list of all our routes and paths. Under the appropriate comment Write a `ProtectedRoute` component checking for the FireBase `user` that will be passed down from the `App` component.

- Replace all the element properties in our `Route` components (inside of `Routes`) with `<ProtectedRoute />` EXCEPT for the "/login" and "/signUp" route. We always want to be able to access so leave them alone.

- Don't forget to also add the component to the `<ProtectedRoute />` element in which the Route should render. For example, if the route is "/about", we would want to pass our "About" component in the component property:`<ProtectedRoute component={ About }/>`

- Upon making the changes to the `Route` component you should notice that you can no longer access any of the links in the navigation bar when logged out. They send you back to the login page because there is no Access to FireBase authentication. You need to make sure to let the router know the `user` state.

- Go back to `App.js` and Pass the resulting state as a prop called `user` to the `<Router  user={user}/>` component. Then pass it to your `<ProtectedRoute user={user} component={ About }/>`

- Notice you can now login and access the pages appropriately.  Refresh the page. Were you directed back to the login page?

- Currently we can sign up new users and logout but, we want to be able to log back in. Go to the `Login` component (under `src/components/Login.js`) and look at the login function. There is a comment to fill out the login function.


## Class 9 Project Instructions 

At this point, we have implemented Firebase Auth to our project and now know how to keep track if someone is logged in or not. By knowing if someone is logged in, we are able to provide to them web pages others who are not logged in would not be able to see. Along with that, we also want to restrict the ability to to do certain actions, such as create or update data. We setup these ProtectedRoutes in the previous section, and only if we are logged in, should we be able to access the Dashboard. The Dashboard page, once we are done building it, will allow us to Create, Update, and Delete certain data. We must first begin by creating a new collection of cars in our Firestore instance which will replace the cars data in our project that is coming from the `./cars.json` file.

We can enter this data manually using the Firestore console, one by one, or we can create a batch to create multiple documents at once from our "./cars.json" file. Whichever you choose, the code for the `writeBatch` method will be provided here.

### writeBatch

Let's start by adding our hard coded JSON data to our database. To do this we are going to need to create a batch using Firestore's "writeBatch" function. This allows us to write multiple documents at once, and will only succeed if all documents were successfully written. We will put this code in App.js and only use it only once, since we only want to upload the information one time. If this runs a second or third time, you would have written about 40 or 60 of the same cars, which we do not want. 

- Paste the code snippet below in the "./App.js" file, inside the Functional Component. Start your React project, `npm start`, and make sure to check the console on the browser. You should be looking for a "done" to print in the console. That will mean our batch was successful.

- Delete the code snippet from "./App.js". We only want this to run once, and only once.

    ```javascript
    useEffect(()=>{

    const addCarsCollection = async() => {
        const collectionRef = collection(db, 'cars')
        const batch = writeBatch(db)
        cars.forEach(object => {
        const docRef = doc(collectionRef)
        batch.set(docRef, {
            ...object,
            id: docRef.id
          })
        })
        await batch.commit()
        console.log('done')
    }

    addCarsCollection()
    },[])
    ```
We should now have a new collection of "cars" in our firebase console, which comes directly from our "./cars.json" file. Now we can replace the data in our project with real data from our database.

### Read

With our new Data in Firestore, we are going to create a query to *Read* that data and then save it to some *state* and replace our current data from the "./cars.json" file. We are going to create this state at the most **Parent** element in our project so that we can pass this state along to other components that will depend on this data.

- Inside "App.js", create a function inside a `useEffect` that will query Firestore to Read the entire *collection* of *documents* from the "cars" collection. Make sure to save your results from this query into *state*, `useState`. You will want to call that data "carsData" since it will be easier to replace with the current data being used in the project.

- Now that we have "carsData" saved to *state* we want to pass this along to all the components that are going to need it. In this case, pass the state into our "Router" component, since the "Router" component has access to all the other components, which we will then pass along that state to the components that will require it. This is considered prop drilling, and is entirely ok. It can at times be hard to keep track of all these "props", and eventually we will discuss a solution to *state management*. For now, it is important to know how props are passed around to other components.

- Pass our "carsData" *state* to the components that will depend on it: "Car", "Home", and "Dashboard".

- Make sure to go to each of those components and update our data with the data coming from "props". Make sure you are passing along props to the component. Also, you will need to delete the `import carsData from "./cars.json"` since it has been replaced.

- Inside our "Dashboard" component, we also have 2 components that will depend on the "carsData" state: "Chart" and "Total". Make sure to pass along that "carsData" state to these components as well.

    > Note: As you may have seen, "Chart" is a pie chart that is displayed inside the Dashboard page. We are using "react-minimal-pie-chart" for this feature, which makes it easy to create simple pie charts. Make sure to look at the documentation and this component to see how it works. 

- Inside our "Chart" component, you will need to create two variables to keep track of the "length" of cars that have Horsepower above and below 200. This will dynamically change as your data does.

- Inside our "Total component, you will just need to provide the length of the whole "carsData" array to make the total number dynamic as well.

Our project is now getting data from our Firestore database and works dynamically across the app. Great Job! 

### Create
Now we need to *Create* a document and store it to our Firestore database. We will then update our React state of these changes, without have to query another read, saving us an unnecessary request.

By now you should have seen a button on the "Dashboard" page which brings up a form. This "AddCar" component is using the "Dialog" component straight from MUI, which looks very neat. This dialog brings up a form where we can provide details for the new car we want to add. It currently only console logs our new car object. You are going to build the function to make a Firestore request to create a new *document*. You then will update carsData of your new *state* if we were successful with the creating the *document*

- Inside our "AddCar" component, let's begin by importing our "db" instance from our "firebase-config" file and the necessary function from the "firebase/firestore" library at the top level.

- Look at the "handleSubmit" function, it currently only has a console log and a "handleClose" function which just closes the Dialog window that pops up. Test this "onClick" event to make sure you get your car details in the console in your live React development server. It will be an empty object, unless you typed in some details.

- Make sure to create the collection reference first, then the document reference with the collection reference we created. This allows us to get the "id" of the document up-front so that we can store the "id" in the actual document. You will also need to provide that id inside the `setDoc` query when you pass in the object as the second parameter. That's if you want to provide the "id" to the actual document.

    ```javascript
    const collectionRef = collection(db, "cars");
    const docRef = doc(collectionRef);
    await setDoc(docRef, { ...car, id: docRef.id });
    ```
    >NOTE: We can substitute "addDoc" for "setDoc" if knowing the document id up-front is not as important. Usually, we do not need to store the "id" inside the document as the document title is the actual "id". "addDoc" will not need a "doc" reference, and instead, the "collection" ref will suffice.

    ```javascript
    const collectionRef = collection(db, "cars");
    const newDoc = await addDoc(ref, car);
    ```

- Make sure to turn the function to an asynchronous function by using async/await methods. Also use a try/catch block to catch any unexpected errors that may occur during the query.

- Update "carsData" *state* to include this new document/object we created. Make sure to pass the "setCarsData" function, from our "useState" hook from "App.js", as props to this component. This should update your current list without having to make another query to *Read* the list again. Alternatively, you can just make another request to Read the data.

- We also want to set the "cars" *state* inside the current component to the initial state of just empty strings and an empty colors array. This will clear the inputs in the form.

- The last function call in this "handleSubmit" should be the "handleClose" function call to close the Dialog.

- If successful, we should see our new "car" inside both our Firestore DB and our React app. Check to make sure both have been updated.

- Our Chart and Total should also be updated to represent the data we provided.


Great Job! We can now create data and store it to the Firestore DB while also updating our current React state.

### Delete
Now that we can *Create* some data, let's get into *Deleting* some of that data. This function should be simpler than the rest.

- Inside our "Dashboard" component, look for the "handleDelete" function. This function takes in a parameter called "anchor". This is the "anchorElement" which is the *MoreVert* icon that is clicked to bring up the the little *Menu*.  *Menu* is another MUI component, so be sure to check it out to understand it better. It works by displaying the *menu* on a specific element, the *anchor*, in which we want the menu to pop up at. We can pass some string value inside that *element* which we can then use for whatever we may need. In this case, we are passing the car's id as the id property so we know what document to delete by its "id". This id comes from the anchor when we call "anchor.id". Check the console log in place to see these values we are talking about. Click the *Delete* icon that comes from the *MoreVert* icon from different  rows in the list. The "id" should be changing along with it.
    >Note: The *MoreVert* icon is the 3 dots icon under the "edit" column. When clicked, it will display a menu with 2 other icons, a "Delete" and "Edit" icon.

- Now that we know the "id" from the document we want to *Delete*, lets build the function to carry out that operation. Let's start by importing the necessary functions from "firebase/firestore" and our "db" instance from the "firebase-config" file. We are going to need "doc" and "deleteDoc" from Firestore.

- Make sure to also turn this "handleSubmit" function to an asynchronous function, "async/await". Also, add the try/catch block as well.

- The document you are going to reference should be coming dynamically from the "id" set inside the anchor. So the function should look like this: `await deleteDoc(doc(db, "cars", anchor.id))`

- Just like before, we want to make sure we also update the state of these changes. We want to *filter* our "carsData" for any car whose id that matches the "id" of the car we just deleted. Alternatively, you can just make another "Read" request.

- The last function call in this "handleDelete" should be the "handleClose" function call to close the "menu" with our icons by setting the "anchorEl" to null.

We have implemented "Read", "Write", and "Delete", oh my! Next thing to implement is "Update".

### Update

Now for updating, we will use a lot of what we just covered to make this happen. We again will be updating documents based on the "id" that is selected, which also comes from the "anchorEl". This time, we are actually passing the "setAnchorEl" function from the "useState" hook so that we can set it to "null" at the end of our *Update* operation. We are also passing "carsData" so that we can filter our carsData inside the "EditCar" component to get the details of the car we are trying to update. The last property we are passing is the "id" that is coming from the anchor itself.

If you look at where the "EditCar" component is being called, closer to the end of the "Dashboard" component, you will see the 3 different properties we just mentioned. The "carId" property has this unique "?" in the value, right before ".id". This question mark checks to see if this anchor even exists, otherwise it just ignores it. The anchor is set to null, initially, but once we click the "MoreVert" icon, the "anchorEl" object exists, and inside of that we have the "id" of the element row we clicked. So, using that "?" mark after an object checks of its existence, otherwise, ignores it. 

Alright, now that we know what properties are going into this "EditCar" component, and we know what "id" we want to edit, let's go into the "EditCar" component and create our *Update* function.

- By now, you should see that our Update icon, when clicked, brings up a Dialog with a bunch of inputs, much like the "AddCar" component. The difference is that the inputs are already filled in with the details from the car we selected to *edit*. Other than that, these two components are very similar.

- Start by importing the required functions from `firebase/firestore` and our "{db}" instance from the "firebase-config" file. We will need to use `{doc, updateDoc}` from the firestore library.

- Inside of the "EditCar" component, we can see that we are already using the props we are passing through, take a look through this component and make sure everything make sense before moving on.

- Inside the "handleSubmit" function, this is where you will be making your Firestore query. We currently log the "car" *state* and the "id" of the car selected to the console when we click the "Save Changes" button. Make sure to use both the "car" and "props.carId" when creating your query.

- Make sure to turn the function to an asynchronous function by using async/await methods. Also use a try/catch block to catch any unexpected errors that may occur during the query.

- Update "carsData" *state* to include the changes we made. Make sure to pass the "setCarsData" function, from our "useState" hook from "App.js", as props to this component. This should update your current list without having to make another query to *Read* the list again. Alternatively, you can just make another request to Read the data.

- We do not need to update the "car" state inside the component since the Component will close after we "Save the Changes" and will again change if we decide to update another car.

- The last function call in this "handleSubmit" should be the "handleClose" function call to close the Dialog and it also sets the "anchorEl" *state* to "null".

- If successful, we should see our updated "car" inside both our Firestore DB and our React app. Check to make sure both have been updated.


## Class 10 Project Instructions 
