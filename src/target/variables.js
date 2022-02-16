let count = 5;
let num;
let a;
let b;
let c;
let d;
let e = [1, 2, 3];
let f = [1, 2, true, false];
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
;
let backgroundColor = Color.Red;
//# sourceMappingURL=variables.js.map