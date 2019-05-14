class MarsRover {
    // #1 - set up the grid
    // #2 - starting coordinates for the rover
    // #3 - set the orientation
    // #4 - store a list of given commands
    constructor(location, direction) {
        this.location = location;
        this.direction = direction;
        this.commandList = [];
    }

    // Create look up objects for the rotation
    rotate(direction) {
        const lookupLeft = { "E": "N", "N": "W", "W": "S", "S": "E" };
        const lookupRight = { "E": "S", "S": "W", "W": "N", "N": "E" };
        this.direction = direction === "L" ? lookupLeft[this.direction] : lookupRight[this.direction];
    }

    // Navigate using the stored direction
    move(x) {
        if (x === "N") {
            this.location[1] += 1;
        }
        if (x === "S") {
            this.location[1] -= 1;
        }
        if (x === "W") {
            this.location[0] -= 1;
        }
        if (x === "E") {
            this.location[0] += 1;
        }
    }

    commands(list) {
        if (list) {
            this.commandList = list.split("").filter(command =>
                (command === "L" || command === "M" || command === "R")
            );
        }
        this.commandList.forEach(item => {
            item === "L" || item === "R" ?
                this.rotate(item) :
                this.move(this.direction);
        });
        return this.commandList;
    }

}

module.exports = MarsRover;