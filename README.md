# Roomba Coding Challenge

### Overview

Given a set of driving instructions and dirt locations, track a roomba’s movements and the total amount of dirt it has collected.

### Specifications

The sample input gives you the room dimensions, initial location of the roomba, the dirt locations,
and the driving instructions. The dimensions and locations are arrays with the first number being
the x coordinate and the second number being the y coordinate. For example, given room
dimensions [5, 10] the room would be 5 units wide and 10 units high.
The driving instructions are given as North, South, East, and West. So, if the roomba’s current
position is (1, 2) and the next driving instruction to process is “N” then the roomba’s final position
for that step would be (1, 3). The roomba can’t navigate outside of the room dimensions.
If the driving instruction results in the roomba hitting a wall the roomba should not move from its
current location and the total wall hits should be incremented by 1. For example, if the roomba’s
current location is (1, 0) and the next driving instruction is “S”, then the roomba’s final position for
that step would still be (1, 0) and the total wall hits would be incremented by 1.
After processing all the driving instructions, print out the final location of the roomba, the total
distance traveled, the total amount of dirt collected, and the total number of times it ran into a
wall.

### Requirements

- Must be a react web application
- Upload a JSON file with room dimensions, dirt coordinates, roomba starting coordinates,
  and roomba driving instructions
- For each step show the current step, current location of the roomba, current driving
  instruction that was processed, total amount of dirt collected, and did the roomba run into
  a wall.
- After all steps are completed, show the roomba’s final position, total dirt collected, total
  unique dirt locations, total distance the roomba traveled, and the total amount of walls hit.

### Sample Input

```js
{
    "roomDimensions": [10, 10],
    "initialRoombaLocation": [1, 1],
    "dirtLocations": [
        [1, 2],
        [3, 5],
        [5, 5],
        [7, 9]
    ],
    "drivingInstructions": [
        "N",
        "E",
        "E",
        "N",
        "N",
        "N",
        "E",
        "E",
        "S",
        "W",
        "S",
        "S",
        "S",
        "S",
        "S"
    ]
}

```

### Sample Output

| Step | Roomb Location | Action Total Dirt | Collected | Total Wall Hits |
| :--: | :------------: | :---------------- | :-------: | :-------------: |
|  1   |      1, 1      |                   |     0     |        0        |
|  2   |      1, 2      | N                 |     1     |        0        |
|  3   |      2, 2      | E                 |     1     |        0        |
|  4   |      3, 2      | E                 |     1     |        0        |
|  5   |      3, 3      | N                 |     1     |        0        |
|  6   |      3, 4      | N                 |     1     |        0        |
|  7   |      3, 5      | N                 |     2     |        0        |
|  8   |      4, 5      | E                 |     2     |        0        |
|  9   |      5, 5      | E                 |     3     |        0        |
|  10  |      5, 4      | S                 |     3     |        0        |
|  11  |      4, 4      | W                 |     3     |        0        |
|  12  |      4, 3      | S                 |     3     |        0        |
|  13  |      4, 2      | S                 |     3     |        0        |
|  14  |      4, 1      | S                 |     3     |        0        |
|  15  |      4, 0      | S                 |     3     |        0        |
|  16  |      4, 0      | S                 |     3     |        1        |

Final Position: 4, 0 <br/>
Total Dirt Collected: 3 <br/>
Total Distance Traveled: 14 <br/>
Total Walls Hit: 1 <br/>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# Roomba-Coding-Challenge
