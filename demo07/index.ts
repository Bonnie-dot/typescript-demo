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