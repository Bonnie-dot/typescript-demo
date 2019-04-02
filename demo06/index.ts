//## Generics  for creating reusable components is generics
function indentity<T>(arg:T):T{
    return arg;
}
// two ways
let output=indentity<string>('string');
let output2=indentity('mystring');// most common 
console.log(output);
console.log(output2);