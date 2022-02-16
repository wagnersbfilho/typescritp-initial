class PointClass {
    x = 0;
    y = 0;
    // Construtor
    // O operador "?" marca variavel como opcional
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log("X: " + this.x + ", Y: " + this.y);
    }
    getDistance(another) {
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
//# sourceMappingURL=PointClass.js.map