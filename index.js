/* eslint-disable no-undef */
const { MarsRover, RoverInstructions } = require("./MarsRover/index");
const grid = [];

process.stdout.write(`\nPlease enter your grid coordinates below - MUST include spaces\n
Then enter your rover coordinates and orientation followed by 'end' for results\n\n`);
process.stdin.on("data", (data) => {
    const newData = data.toString().trim().split(" ");
    newData[0].toLowerCase() === "end" ? printNextGeneration(grid) : grid.push(newData);
});

const printNextGeneration = (grid) => {
    const gridCoords = grid[0].map(Number);
    let roverName = [];
    let instructionsName = [];

    process.stdout.write("\n");
    for (let i = 1; i < grid.length; i += 2) {
        roverName[i] = new MarsRover(Number(grid[i][0]), Number(grid[i][1]), grid[i][2]);
    }

    for (let i = 2; i < grid.length; i += 2) {
        instructionsName[i] = new RoverInstructions(gridCoords, roverName[i - 1]);
        process.stdout.write(`${instructionsName[i].instructions(grid[i].join(" "))}\n`);
    }
    process.stdout.write("\n");
    process.exit();
};


