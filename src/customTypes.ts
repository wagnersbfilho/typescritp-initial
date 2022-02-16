let drawPoint = (x, y, z, w, a, b) => {
    //...
}

// OBJECT
let drawPointObj = (point) => {
    //.. console x and y
}

drawPointObj({
    x: 1,
    y: 2
})

//IN LINE ANNOTATION
let drawPointInLineAnnotation = (point: {x: number, y: number}) => {
    //...
}

drawPointInLineAnnotation ({
    x: 1,
    y: 2
})

//INTERFACE
interface Point {
    x: number,
    y: number
}

let drawPointInterface = (point: Point) => {
//...
}

drawPointInterface ({
    x: 1,
    y: 2
})

//COESÃO:
class PointClass1s {
    x: number;
    y: number;
    
    draw() {
        //....
    }

    getDistance(another: Point) {
        //...
    }
}
