This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a quick and dirty demo, originally created to demonstrate some of the differences between the styled-components and typestyle libraries.

Comment out only the <Demo X/> component in the App.tsx file for the demo you want to run. This will ensure only necessary code is built and you'll be easily able to inspect what is going on in the style tag in the head.

## Demo 1

- Dynamic styling
- Debugging (comment out \$debugName in button.style.tsx to see this in action)

## Demo 2

- Deduping / class consolidation - demonstrates typestyle styles breaking because of its automatic deduping and order of imports of SomeComponent and Button2 in Demo2.tsx

## Demo 3

- CSS variables - demonstrates a problem where OOTB it's tricky to override CSS variables in an isolated container due to such strong typing

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
