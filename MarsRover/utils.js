/* eslint-disable no-undef */
const printNextGeneration = (grid) => {
    const gridCoords = grid[0].map(Number);
    let roverName = [];
    let instructionsName = [];
    process.stdout.write("\n");
    for (let i = 1; i < grid.length; i += 2) {
        roverIndex = 1;
        roverName[roverIndex] = new MarsRover(Number(grid[i][0]), Number(grid[i][1]), grid[i][2]);
        roverIndex++;
    }
    for (let i = 2; i < grid.length; i += 2) {
        instructionsIndex = 1;
        instructionsName[instructionsIndex] = new RoverInstructions(gridCoords, roverName[instructionsIndex]);
        console.log(instructionsName[instructionsIndex]);
        process.stdout.write(`${instructionsName[instructionsIndex].instructions(grid[i].join(" "))}\n`);
        // console.log(instructionsName[instructionsIndex].instructions(grid[i].join(" ")));
        instructionsIndex++;
    }
    process.stdout.write("\n");
    process.exit();
};

module.exports = printNextGeneration;



