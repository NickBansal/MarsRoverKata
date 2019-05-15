const { MarsRover, RoverInstructions } = require("./index");

describe("Mars Rover", () => {
    describe("Testing the move method", () => {
        it("Should move up if direction is N", () => {
            const rover = new MarsRover(1, 1, "N");
            rover.move();
            expect(rover.yCoord).toBe(2);
        });
        it("Should move down if direction is S", () => {
            const rover = new MarsRover(1, 1, "S");
            rover.move();
            expect(rover.yCoord).toBe(0);
        });
        it("Should move right if direction is E", () => {
            const rover = new MarsRover(1, 1, "E");
            rover.move();
            expect(rover.xCoord).toBe(2);
        });
        it("Should move left if direction is W", () => {
            const rover = new MarsRover(1, 1, "W");
            rover.move();
            expect(rover.xCoord).toBe(0);
        });
    });

    describe("Testing the rotate method - Left", () => {
        const rover = new MarsRover(1, 1, "N");

        it("Should rotate 90degrees left", () => {
            rover.rotate("L");
            expect(rover.direction).toBe("W");
        });
        it("Should rotate 90degrees left", () => {
            rover.rotate("L");
            expect(rover.direction).toBe("S");
        });
        it("Should rotate 90degrees left", () => {
            rover.rotate("L");
            expect(rover.direction).toBe("E");
        });
        it("Should rotate 90degrees left", () => {
            rover.rotate("L");
            expect(rover.direction).toBe("N");
        });
    });
    describe("Testing the rotate method - Right", () => {
        const rover = new MarsRover(1, 1, "N");
        it("Should rotate 90degrees right", () => {
            rover.rotate("R");
            expect(rover.direction).toBe("E");
        });
        it("Should rotate 90degrees right", () => {
            rover.rotate("R");
            expect(rover.direction).toBe("S");
        });
        it("Should rotate 90degrees right", () => {
            rover.rotate("R");
            expect(rover.direction).toBe("W");
        });
        it("Should rotate 90degrees right", () => {
            rover.rotate("R");
            expect(rover.direction).toBe("N");
        });
    });
    describe("Testing the instructions method works", () => {
        it("Case 1", () => {
            const rover = new MarsRover(1, 2, "N");
            let movement = new RoverInstructions([5, 5], rover);
            expect(movement.instructions("LMLMLMLMM")).toBe("1 3 N");
        });
        it("Case 2", () => {
            const rover = new MarsRover(3, 3, "E");
            let movement = new RoverInstructions([5, 5], rover);
            expect(movement.instructions("MMRMMRMRRM")).toBe("5 1 E");
        });
    });
});