/* eslint-disable no-undef */
const { MarsRover, RoverInstructions } = require("./index");

const printNextGeneration = (commands) => {
    let gridCoords;
    let roverName = [];
    let instructionsName = [];

    process.stdout.write("\n");
    commands.forEach((command, index) => {
        if (index === 0) {
            gridCoords = command.map(Number);
        } else if (index % 2 !== 0) {
            roverName[index] = new MarsRover(Number(commands[index][0]), Number(commands[index][1]), commands[index][2]);
        } else {
            instructionsName[index] = new RoverInstructions(gridCoords, roverName[index - 1]);
            process.stdout.write(`${instructionsName[index].instructions(commands[index].join(" "))}\n`);
        }
    });
    process.stdout.write("\n");
    process.exit();
};

module.exports = printNextGeneration;



