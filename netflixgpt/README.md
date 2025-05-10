# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# NetflixGpt
A smart video streaming platform like Netflix, powered by ChatGPT, where users can simply type natural language queries like 'funny Indian movie' and instantly get a curated list of available titles that match their request.


- create react app
- configured tailwind css in our app
- Header
- Routing
- Building Login form
- create signup form
- Form validation
- UseRef Hook
- firebase setup
- deploying app in production
- create SignUp User Account
- setup redux store
- added userSlice and provided it to whole app in app.js
- implemented Sign up
- updated profile
- bugFix: signUp user displayName
- bugFix: if the user is not logged in redirect it to "/" page and vice versa
- bugfix: unsubscribed to the onAuthStateChanged callback
- we will use tmdb site for movie apis inorder to use it you need to login in tmdb site :-https://www.themoviedb.org/
  after logging in you need to go to edit profile and from there you need to go to API section and create an api after that you can go in documentation section and go to MOVIE LISTS section and under there go to Now Playing section which is a get method there on the language section click javascrpt and sav the const options part in a constants file min is saved under utils/constants and the api is called in browse file under src.

- build main component
- created movie slice, updated appstore 
- added videoTitle and videoBackground and made mainContainer for our    app and made video auto play 

- build secondary component

firebase:-https://console.firebase.google.com/project/netflixgpt-1812e/overview

# features
-Login/Sign-up page
    -sign-in/Sign-up form once logged in
    -redirect to browse page
-Browse (only after authentication)
    -Header
    -Main Movie
        -Trailer in background
        -Title & Description
        -Movie suggestions
            -MovieLists  which are vertically scrollable

-NetflixGpt
 -Search bar
 -Movie Suggestions