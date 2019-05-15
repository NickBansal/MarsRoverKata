/* eslint-disable no-undef */
const { MarsRover, RoverMovements } = require("./MarsRover/index");

const rover = new MarsRover(1, 1, "N");
const movement = new RoverMovements([5, 5], rover);

console.log(movement.getCoords());