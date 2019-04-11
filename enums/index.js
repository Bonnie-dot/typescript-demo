//## enums  
// allow us define a set of named constants
// ### Numberic enums
// auto-incremented from the point,default 0
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
function response(message) {
    console.log(message);
    return message;
}
response(Direction.down);
// Numberic enums can be mixed in computed and constant member,but enums without initializers need to be first or come after constant member
function getNumber() {
    return Math.random();
}
var E;
(function (E) {
    E[E["a"] = 0] = "a";
    E[E["b"] = getNumber()] = "b";
})(E || (E = {}));
// ### String enums
// In a string enum, each member has to be constant-initialized with a string literal
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "DOWN";
    Direction2["Left"] = "LEFT";
    Direction2["Right"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
// ## Heterogeneous enums |not adivce
//technically enums can be mixed with string and numberic members
var Heterogeneous;
(function (Heterogeneous) {
    Heterogeneous[Heterogeneous["No"] = 1] = "No";
    Heterogeneous["nv"] = "dgfd";
})(Heterogeneous || (Heterogeneous = {}));
//## Computed and constant members
// if first member in the enum not init, it assigned the value 0
//others init
var FileAccess;
(function (FileAccess) {
    //constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 2] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 2] = "ReadWrite";
    // computed member
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
// ## Union enums and enum member types
// There is a special subset of constant enum members that aren’t calculated: literal enum members. 
// Enums at runtime
(function (E) {
    E[E["X"] = 2] = "X";
    E[E["Y"] = 3] = "Y";
    E[E["Z"] = 4] = "Z";
})(E || (E = {}));
function f(obj) {
    return obj.X;
}
// Works, since 'E' has a property named 'X' which is a number.
f(E);
// ## Reverse mappings
// In addition to creating an object with property names for members, numeric enums members also get a reverse mapping from enum values to enum names. 
// Keep in mind that string enum members do not get a reverse mapping generated at all
var Enum;
(function (Enum) {
})(Enum || (Enum = {}));
var a = Enum.A;
var nameofA = Enum[a];
// One important difference between ambient and non-ambient enums is that, in regular enums, members that don’t have an initializer will be considered constant if its preceding enum member is considered constant. In contrast, an ambient (and non-const) enum member that does not have initializer is always considered computed.
