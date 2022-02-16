class PointAM {
    x;
    y;
    // Construtor
    // O operador "?" marca variavel como opcional
    // Modificador de acesso (private/public) no construtor, cria variáveis de acordo com os parâmetros
    constructor(x, y) {
        this.x = x;
        this.y = y;
        //        this.x = x;
        //        this.y = y;
    }
    draw() {
        console.log("X: " + this.x + ", Y: " + this.y);
    }
}
//let point: PointClass;
let pointAM = new PointAM();
pointAM = new PointAM(3, 4);
pointAM.draw();
//# sourceMappingURL=PointAccessModifier.js.map