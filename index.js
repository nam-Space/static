class Theory {
    constructor(name, desc, number = 1) {
        this.name = name,
        this.discription = desc,
        this.getNumber = function() {
            return 3*number
        }
    }
}

class Geometry extends Theory {
    constructor(length, desc, number) {
        super(desc, number)
        this.getNumber = function() {
            return 3*length
        }
    }
}

const square = new Geometry(10, 'Ko có', 20)
console.log(square.getNumber())