# Mars Rover

This exercise creates the 'Mars Rover' kata using Javascript, TDD using jest and linting using eslint.

## Design
I decided to apply SOLID methodology to my classes to make each class have limited responsibilities and breaking them down to be more reusable.
I created a 'MarsRover' folder which contained an index file for the classes, utils file for the functions and test file for the testing to make the code more modular.
The main index file is where the code will be run from.

## Assumptions
Not much information was given about the grid coordinates as they did not effect the outcome at all, but as they were mentioned in the brief I felt the need to leave them in the RoverInstructions class. I have not included functionality in the grid to have limitations or wrap-arounds.
I also assumed the following for the input:
* The grid input would include 2 numbers seperated by a space
* The rover coordinate and orientation would consist of a number, number, letter again each seperated by a space
* The instructions would be a string with no spaces
unfortunately the code will break if these rules are breached - I have written instructions in the terminal to combat this.

## Instructions 
In order to get this working on your local machine please check if node is installed by typing this command into your terminal

```js
$ node -v
```
Navigate to the main directory and install the required NPM packages:
```js
$ npm i
```
Whilst in the main directory, run the following command in the terminal to execute the code:
```js
$ node index
```
The terminal will then instruct you to input your grid coordinates. This will be followed by your rover coordinates and orientation. And then followed by the rovers instructions.

you can enter as many pairs of rover details and instructions as you like  and when finished simply type 'end'

Finally the output will be shown in the terminal 

## Testing
To test the code type into the following into the terminal
```js
$ npm run test
```