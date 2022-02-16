/* a palavra "export" transforma a classe
em um modulo, ous seja, ela só pode ser 
visível em outros arquivos se for importada
*/
export class PointClassModule {
    constructor (private _x?: number, private _y?: number) {
    }

    draw() {
        console.log("X: " + this._x + ", Y: " + this._y);
    }
}