const { MarsRover, RoverMovements } = require("./index");
// jest.mock("./index");

describe("Mars Rover", () => {
    describe("Testing the move method", () => {
        it("Should move up if direction is N", () => {
            const rover = new MarsRover(1, 1, "N");
            const movement = new RoverMovements([5, 5], rover);
            movement.move();
            expect(movement.yCoord).toBe(2);
        });
        it("Should move down if direction is S", () => {
            const rover = new MarsRover(1, 1, "S");
            const movement = new RoverMovements([5, 5], rover);
            movement.move();
            expect(movement.yCoord).toBe(0);
        });
        it("Should move right if direction is E", () => {
            const rover = new MarsRover(1, 1, "E");
            const movement = new RoverMovements([5, 5], rover);
            movement.move();
            expect(movement.xCoord).toBe(2);
        });
        it("Should move left if direction is W", () => {
            const rover = new MarsRover(1, 1, "W");
            const movement = new RoverMovements([5, 5], rover);
            movement.move();
            expect(movement.xCoord).toBe(0);
        });
    });
    describe("Testing the rotate method - Left", () => {
        const rover = new MarsRover(1, 1, "N");
        let movement = new RoverMovements([5, 5], rover);
        it("Should rotate 90degrees left", () => {
            movement.rotate("L");
            expect(movement.direction).toBe("W");
        });
        it("Should rotate 90degrees left", () => {
            movement.rotate("L");
            expect(movement.direction).toBe("S");
        });
        it("Should rotate 90degrees left", () => {
            movement.rotate("L");
            expect(movement.direction).toBe("E");
        });
        it("Should rotate 90degrees left", () => {
            movement.rotate("L");
            expect(movement.direction).toBe("N");
        });
    });
    describe("Testing the rotate method - Right", () => {
        const rover = new MarsRover(1, 1, "N");
        let movement = new RoverMovements([5, 5], rover);
        it("Should rotate 90degrees right", () => {
            movement.rotate("R");
            expect(movement.direction).toBe("E");
        });
        it("Should rotate 90degrees right", () => {
            movement.rotate("R");
            expect(movement.direction).toBe("S");
        });
        it("Should rotate 90degrees right", () => {
            movement.rotate("R");
            expect(movement.direction).toBe("W");
        });
        it("Should rotate 90degrees right", () => {
            movement.rotate("R");
            expect(movement.direction).toBe("N");
        });
    });
});