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
gernericNumber.add=function(x,y){
    return y+x;
}
console.log(gernericNumber.add(6,8));
//  lets us make sure all of the properties of the class are working with same type 
// generic classes are only generic over their instance rath than static side ,so static properties can not use the class's type parameter
// ## Generic Constraints 让参数为any 会造成一些麻烦
interface Lengthwise{
    length:number
}
function loggingIdentity<T extends Lengthwise>(arg:T):T{
    console.log(arg.length);//这样就限制了参数类型
    return arg;
}
loggingIdentity({dd:3,length:6});
// get the key
function getProperty<T,K extends keyof T>(obj:T,key:K){
    return obj[key];
}
console.log(getProperty({m:1},'m'));
// using class types in generic
function create <T>(c:{new ():T}):T{
    return new c();
}
class BeeKeeper{
    hasMask:Boolean
}
class ZooKeeper{
    nametag:string
}
class Animal{
    numLegs:number
}
class Bee extends Animal{
    keeper:BeeKeeper
}
class Lion extends Animal{
    keeper:ZooKeeper
}
function createInstance<A extends Animal>(c:new()=>A):A{
    return new c();
}
createInstance(Lion).keeper.nametag;