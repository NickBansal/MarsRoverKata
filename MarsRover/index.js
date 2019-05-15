class MarsRover {
    constructor(xCoord, yCoord, direction) {
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.direction = direction;
    }

    move() {
        if (this.direction === "N") {
            this.yCoord += 1;
        }
        if (this.direction === "S") {
            this.yCoord -= 1;
        }
        if (this.direction === "W") {
            this.xCoord -= 1;
        }
        if (this.direction === "E") {
            this.xCoord += 1;
        }
    }

    rotate(direction) {
        const lookupLeft = { "E": "N", "N": "W", "W": "S", "S": "E" };
        const lookupRight = { "E": "S", "S": "W", "W": "N", "N": "E" };
        this.direction = direction === "L" ? lookupLeft[this.direction] : lookupRight[this.direction];
    }
}
class RoverInstructions {
    constructor(grid, rover) {
        this.grid = grid;
        this.rover = rover;
    }
    instructions(list) {
        const instructionsArray = list.split("").filter(instruction =>
            (instruction === "L" || instruction === "M" || instruction === "R")
        );
        instructionsArray.forEach(instruction => {
            instruction === "L" || instruction === "R" ?
                this.rover.rotate(instruction) :
                this.rover.move();
        });
        return `${this.rover.xCoord} ${this.rover.yCoord} ${this.rover.direction}`;
    }
}

module.exports = { RoverInstructions, MarsRover };
