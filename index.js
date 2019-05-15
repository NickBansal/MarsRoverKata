/* eslint-disable no-undef */
const printNextGeneration = require("./MarsRover/utils");
const grid = [];

process.stdout.write(`\nPlease enter your grid coordinates below - MUST include spaces\n
Then enter your rover coordinates and orientation followed by 'end' for results\n\n`);
process.stdin.on("data", (data) => {
    const newData = data.toString().trim().split(" ");
    newData[0].toLowerCase() === "end" ? printNextGeneration(grid) : grid.push(newData);
});




