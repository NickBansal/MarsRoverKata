const MarsRover = require("./marsRover");
jest.mock("./marsRover");

describe("Mars Rover", () => {
    beforeEach(() => {
        MarsRover.mockClear();
    });
    it("Check the class constructor has been called", () => {
        const rover = new MarsRover(1, "N");
        expect(rover).toHaveBeenCalledTimes(1);
    });
});