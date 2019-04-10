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
