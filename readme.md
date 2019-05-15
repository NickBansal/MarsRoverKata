# Mars Rover

This exercise creates the 'Mars Rover' kata using Javascript, TDD using jest and linting using eslint.
The following rules needed to be applied:

**Input:**
* The first line of input is the upper-right coordinates of the plateau, the lower-left coordinates are assumed to be 0,0.
* The rest of the input is information pertaining to the rovers that have been deployed. Each rover has two lines of input. The first line gives the rover’s position, and the second line is a series of instructions telling the rover how to explore the plateau.
* The position is made up of two integers and a letter separated by spaces, corresponding to the x and y co-ordinates and the rover’s orientation.
* Each rover will be finished sequentially, which means that the second rover won’t start to move until the first one has finished moving.

**Output:**
* The output for each rover should be its final co-ordinates and heading.

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
The terminal will then instruct you to input your grid coordinates. This will be followed by your rover coordinates and orientation. And then  followed by the instructions.

you can enter as many pairs of rover details and instructions as you like  and when finished simply type 'end'

Finally the output will be shown in the terminal 

## Testing
To test the code type into the following into the terminal
```js
$ npm run test
```