//## Generics  for creating reusable components is generics
function indentity(arg) {
    return arg;
}
// two ways
var output = indentity('string');
var output2 = indentity('mystring'); // most common 
console.log(output);
console.log(output2);
