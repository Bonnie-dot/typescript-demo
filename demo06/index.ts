//## Generics  for creating reusable components is generics
function indentity<T>(arg:T):T{
    return arg;
}
// two ways
let output=indentity<string>('string');
let output2=indentity('mystring');// most common 
console.log(output);
console.log(output2);
// ### working with generic Types variables
function indentity2<T>(arg:T[]):T[]{
    console.log(arg.length);
    return arg;
}
// other writing 
function indentity3<T>(arg:Array<T>):Array<T>{
    return arg;
}
let n=indentity2([1,3]);
let myIndentitiy:<T>(arg:Array<T>)=>T[]=indentity3;
let n2=myIndentitiy([6,6]);
console.log(n2);
// ## Generic Types function type and create generic interface
// is not possible to create generic enum and generic namespaces
interface GernericObj<T>{//可以非常明确的描述接口的参数
    (arg:T):T
}
let genericObj:GernericObj<number>=indentity
// Generic class
class GernericNumber<T>{
    zeroNum:T;
    add:(x:T,y:T)=>T;
}
let gernericNumber=new GernericNumber<number>();
gernericNumber.zeroNum=5;
let m=gernericNumber.add(5,6);
console.log(m);