class MarsRover {
    constructor(xCoord, yCoord, direction) {
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.direction = direction;
    }
}

class RoverMovements {
    constructor(grid, { xCoord, yCoord, direction }) {
        this.grid = grid;
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

    instructions(list) {
        const instructionsArray = list.split("").filter(instruction =>
            (instruction === "L" || instruction === "M" || instruction === "R")
        );
        instructionsArray.forEach(instruction => {
            instruction === "L" || instruction === "R" ?
                this.rotate(instruction) :
                this.move();
        });
        return this.xCoord, this.yCoord, this.direction;
    }
}

module.exports = { RoverMovements, MarsRover };
