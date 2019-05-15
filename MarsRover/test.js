const { MarsRover, RoverMovements } = require("./index");
jest.mock("./index");

describe("Mars Rover", () => {
    beforeEach(() => {
        const rover = new MarsRover(1, 1, "N");
        const movement = new RoverMovements([5, 5], rover);
    });
});