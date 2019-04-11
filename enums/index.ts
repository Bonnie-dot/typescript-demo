//## enums  
// allow us define a set of named constants
// ### Numberic enums
// auto-incremented from the point,default 0
enum Direction{
    up,
    down,
    left,
    right
}
function response(message:Direction){
    console.log(message);
    return message;
}
response(Direction.down);
// Numberic enums can be mixed in computed and constant member,but enums without initializers need to be first or come after constant member
function getNumber(){
    return Math.random()
}
enum E{
    a,
    b=getNumber()
}
// ### String enums
// In a string enum, each member has to be constant-initialized with a string literal
enum Direction2 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
// ## Heterogeneous enums |not adivce
//technically enums can be mixed with string and numberic members
enum Heterogeneous{
    No=1,
    nv="dgfd"
}
//## Computed and constant members
// if first member in the enum not init, it assigned the value 0
//others init
enum FileAccess{
    //constant members
    None,
    Read=1<<1,
    Write=1<<1,
    ReadWrite=Read| Write,
    // computed member
    G = "123".length
}
// ## Union enums and enum member types
// There is a special subset of constant enum members that aren’t calculated: literal enum members. 
// Enums at runtime
enum E {
    X=2, Y, Z
}

function f(obj: { X: number }) {
    return obj.X;
}

// Works, since 'E' has a property named 'X' which is a number.
f(E)
// ## Reverse mappings
// In addition to creating an object with property names for members, numeric enums members also get a reverse mapping from enum values to enum names. 
// Keep in mind that string enum members do not get a reverse mapping generated at all
enum Enum{
   
}
let a=Enum.A;
let nameofA=Enum[a];
// ## const enums
// Const enums can only use constant enum expressions
// This is possible since const enums cannot have computed members.

const enum Enu2 {
    A = 1,
    B = A * 2
}
// ## Ambient enums
// Ambient enums are used to describe the shape of already existing enum types.
declare enum Enum {
    A ,
    B,
    C = 2
}

// One important difference between ambient and non-ambient enums is that, in regular enums, members that don’t have an initializer will be considered constant if its preceding enum member is considered constant. In contrast, an ambient (and non-const) enum member that does not have initializer is always considered computed.