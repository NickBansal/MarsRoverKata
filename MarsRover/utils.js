/* eslint-disable no-undef */
const { MarsRover, RoverInstructions } = require("./index");

const printNextGeneration = (commands) => {
    const gridCoords = commands[0].map(Number);
    let roverName = [];
    let instructionsName = [];

    process.stdout.write("\n");
    commands.forEach(() => {

    });
    for (let i = 1; i < commands.length; i += 2) {
        roverName[i] = new MarsRover(Number(commands[i][0]), Number(commands[i][1]), commands[i][2]);
    }
    for (let i = 2; i < commands.length; i += 2) {
        instructionsName[i] = new RoverInstructions(gridCoords, roverName[i - 1]);
        process.stdout.write(`${instructionsName[i].instructions(commands[i].join(" "))}\n`);
    }
    process.stdout.write("\n");
    process.exit();
};

module.exports = printNextGeneration;



