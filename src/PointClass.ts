class PointClass {
    x: number = 0;
    y: number = 0;

    // Construtor
    // O operador "?" marca variavel como opcional
    constructor (x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log("X: " + this.x + ", Y: " + this.y);
    }

    getDistance(another: PointClass) {
        //...
    }
}

//let point: PointClass;

let point = new PointClass();
point.x = 1;
point.y = 2;
point.draw();

point = new PointClass(3, 4);
point.draw();


