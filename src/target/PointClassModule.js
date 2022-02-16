"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointClassModule = void 0;
/* a palavra "export" transforma a classe
em um modulo, ous seja, ela só pode ser
visível em outros arquivos se for importada
*/
class PointClassModule {
    _x;
    _y;
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    draw() {
        console.log("X: " + this._x + ", Y: " + this._y);
    }
}
exports.PointClassModule = PointClassModule;
//# sourceMappingURL=PointClassModule.js.map