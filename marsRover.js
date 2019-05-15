class MarsRover {
    constructor(location, direction) {
        this.location = location;
        this.direction = direction;
    }
}

class RoverMovements {
    constructor(grid, marsRover) {
        this.grid = grid;
        this.marsRover = marsRover;
    }
}
// rotate(direction) {
//     const lookupLeft = { "E": "N", "N": "W", "W": "S", "S": "E" };
//     const lookupRight = { "E": "S", "S": "W", "W": "N", "N": "E" };
//     this.direction = direction === "L" ? lookupLeft[this.direction] : lookupRight[this.direction];
// }

// move() {
//     if (this.direction === "N") {
//         this.location[1] += 1;
//     }
//     if (this.direction === "S") {
//         this.location[1] -= 1;
//     }
//     if (this.direction === "W") {
//         this.location[0] -= 1;
//     }
//     if (this.direction === "E") {
//         this.location[0] += 1;
//     }
// }

// commands(list) {
//     if (list) {
//         const commandList = list.split("").filter(command =>
//             (command === "L" || command === "M" || command === "R")
//         );
//     }
//     commandList.forEach(command => {
//         command === "L" || command === "R" ?
//             this.rotate(command) :
//             this.move();
//     });
//     return this.commandList;
// }


module.exports = { RoverMovements, MarsRover };