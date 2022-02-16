class PointEncapsulamento {
    _x;
    _y;
    // Construtor
    // O operador "?" marca variavel como opcional
    // Modificador de acesso (private/public) no construtor, cria variáveis de acordo com os parâmetros
    // underline antes da variavel para não criar conflito com getter e setter
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    draw() {
        console.log("X: " + this._x + ", Y: " + this._y);
    }
    get x() {
        return this._x;
    }
    // variavel maísucula!!
    set x(value) {
        if (value < 0)
            throw new Error('valor não pode ser menor que zero.');
        this._x = value;
    }
}
//let point: PointClass;
let pointE = new PointEncapsulamento();
pointE = new PointEncapsulamento(3, 4);
pointE.draw();
let x = pointE.x; // get
pointE.x = 10; //set
pointE.draw();
//# sourceMappingURL=PointEncapsulamento.js.map