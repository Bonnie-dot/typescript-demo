//## Generics  for creating reusable components is generics
function indentity(arg) {
    return arg;
}
// two ways
var output = indentity('string');
var output2 = indentity('mystring'); // most common 
console.log(output);
console.log(output2);
// ### working with generic Types variables
function indentity2(arg) {
    console.log(arg.length);
    return arg;
}
// other writing 
function indentity3(arg) {
    return arg;
}
var n = indentity2([1, 3]);
var myIndentitiy = indentity3;
var n2 = myIndentitiy([6, 6]);
console.log(n2);
var genericObj = indentity;
// Generic class
var GernericNumber = /** @class */ (function () {
    function GernericNumber() {
    }
    return GernericNumber;
}());
var gernericNumber = new GernericNumber();
gernericNumber.zeroNum = 5;
var m = gernericNumber.add(5, 6);
console.log(m);
