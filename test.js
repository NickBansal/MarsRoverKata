const MarsRover = require("./marsRover");

describe("Mars Rover", () => {
    describe("Coordinates given for the Mars Rover", () => {
        it("Should set the starting coordinates", () => {
            const rover = new MarsRover([1, 1]);
            expect(rover.location).toEqual([1, 1]);
        });
        it("Should set the starting coordinates", () => {
            const rover = new MarsRover([2, 3]);
            expect(rover.location).toEqual([2, 3]);
        });
    });
    describe("Orientation is set", () => {
        it("Should also set the orientation", () => {
            const rover = new MarsRover([1, 1], "N");
            expect(rover.direction).toEqual("N");
        });
        it("Should also set the orientation", () => {
            const rover = new MarsRover([1, 1], "E");
            expect(rover.direction).toEqual("E");
        });
        it("Should also set the orientation", () => {
            const rover = new MarsRover([1, 1], "W");
            expect(rover.direction).toEqual("W");
        });
        it("Should also set the orientation", () => {
            const rover = new MarsRover([1, 1], "S");
            expect(rover.direction).toEqual("S");
        });
    });
    describe("A list of commands is given", () => {
        let rover;
        beforeEach(() => {
            rover = new MarsRover([2, 2], "N");
        });
        it("Should be stored and be accessible", () => {
            rover.commands("L");
            expect(rover.commands()).toEqual(["L"]);
        });
        it("Should be stored and be accessible", () => {
            rover.commands("LMR");
            expect(rover.commands()).toEqual(["L", "M", "R"]);
        });
        it("Should be stored and be accessible", () => {
            rover.commands("LMLMRM");
            expect(rover.commands()).toEqual(["L", "M", "L", "M", "R", "M"]);
        });
        it("Should only store actual commands", () => {
            rover.commands("LPMKR");
            expect(rover.commands()).toEqual(["L", "M", "R"]);
        });

        describe("L Commands", () => {
            it("Should turn the rover 90degrees left", () => {
                rover.commands("L");
                expect(rover.direction).toBe("W");
            });
            it("Should turn the rover 90deg left", () => {
                rover.commands("LLL");
                expect(rover.direction).toBe("E");
            });
        });
        describe("R Commands", () => {
            it("Should turn the rover 90degrees right", () => {
                rover.commands("R");
                expect(rover.direction).toBe("E");
            });
            it("Should turn the rover 90deg left", () => {
                rover.commands("RR");
                expect(rover.direction).toBe("S");
            });
        });
    });

    describe("M Commands", () => {
        it("Should move the rover north direction", () => {
            const rover = new MarsRover([2, 2], "N");
            rover.commands("M");
            expect(rover.location).toEqual([2, 3]);
        });
        it("Should move the rover south direction", () => {
            const rover = new MarsRover([2, 2], "S");
            rover.commands("M");
            expect(rover.location).toEqual([2, 1]);
        });
        it("Should move the rover west direction", () => {
            const rover = new MarsRover([2, 2], "W");
            rover.commands("M");
            expect(rover.location).toEqual([1, 2]);
        });
        it("Should move the rover east direction", () => {
            const rover = new MarsRover([2, 2], "E");
            rover.commands("M");
            expect(rover.location).toEqual([3, 2]);
        });
    });
});