// 1. Copy and paste your prototype in here and refactor into class syntax.

class cuboidMaker {
constructor(attributes) {
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
}

volume () {
    return this.length * this.width * this.height
};

surfaceArea () {
    return 2 * (this.length * this.width) * (this.length * this.height) * (this.width * this.height)
    }
}
const cuboidClass = new CuboidMaker ({
    length: 4,
    width: 5,
    height: 5,
    })


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidClass.volume()); // 100
console.log(cuboidClass.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class cuboidMaker {
    constructor(attributes) {
        this.length = attributes.length;
        this.width = attributes.width;
        this.height = attributes.height;
    }

    volume () {
        return this.length * 3
    };

    SurfaceArea () {
        return this.length * 2
    }
    }
    const cuboidClass1 = new CuboidMaker ({
        length: 4,
        width: 5,
        height: 5,
        })
console.log(".........cube classes start here ....")
console.log(cuboidClass.volume());
console.log(cuboidClass.surfaceArea());