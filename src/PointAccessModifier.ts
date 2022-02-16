class PointAM {
    // Construtor
    // O operador "?" marca variavel como opcional
    // Modificador de acesso (private/public) no construtor, cria variáveis de acordo com os parâmetros
    constructor (private x?: number, private y?: number) {
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


