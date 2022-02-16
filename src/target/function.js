function doSomethingVar() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally:' + i);
}
function doSomethingLet() {
    let i = 0;
    for (i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally:' + i);
}
doSomethingVar();
doSomethingLet();
//# sourceMappingURL=function.js.map