/* eslint-disable no-undef */
const { MarsRover, RoverMovements } = require("./MarsRover/index");

const rover1 = new MarsRover(1, 2, "N");
const rover2 = new MarsRover(3, 3, "E");
const movement1 = new RoverMovements([5, 5], rover1);
const movement2 = new RoverMovements([5, 5], rover2);
console.log(movement1.instructions("LMLMLMLMM"));
console.log(movement2.instructions("MMRMMRMRRM"));