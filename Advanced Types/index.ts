// ## Advanced Types
// ## Intersection（交叉） Type
class Person {
    constructor(public name:string){}
}
interface Loggable{
    log(name:string):void
}
class ConsoleLogger implements Loggable{
    log(name){
        console.log(`I'm ${name}`);
    }
}
function extend<First,Second>(first:First,second:Second):First & Second{
    const result:Partial<First & Second>={};
    for(const prop in first){
        if(first.hasOwnProperty(prop)){
            (<First>result)[prop]=first[prop]
        }
    }
    for(const prop in second){
        if(second.hasOwnProperty(prop)){
            (<Second>result)[prop]=second[prop];
        }
    }
    return <First & Second>result;
}
const j=extend(new Person('j'),ConsoleLogger.prototype);
console.log(j.name);
// ## Union Types
// Union Types describles a value that can be one of serveral types.
interface Bird{
    fly();
    layEggs();
}
interface Fish{
    swim();
    layEggs();
}
function getSmallPet():Fish|Bird {
    return ;
}
let pet=getSmallPet();
//okay pet.layEggs();
// pet.swim error
// ### Type Guards and Differentiating Types
let pettwo=getSmallPet();
// if((<Bird>pettwo).fly){
//     (<Bird>pettwo).fly();
// }
// ### User-Defined Type Guard
function isFish(pet:Fish|Bird):pet is Fish{
    return (<Fish>pet).swim!==undefined;
}
// if(isFish(pet)){
//     pet.swim();
// }else{
//     pet.fly();
// }
// primitive is typeof
// object  instanceOf
interface Padder{
    getPaddingString():string
}
class SpaceRepeatingPadder implements Padder{
    constructor(private numSpace){

    }
    getPaddingString(){
        return this.numSpace;
    }
}
class StringPadder implements Padder{
    constructor(private val:string){}
    getPaddingString(){
        return this.val;
    }
}
function getRandomPadder(){
    return Math.random()<0.5?new SpaceRepeatingPadder(3):new StringPadder('r'); 
}
let padder:Padder=getRandomPadder();
console.log(padder instanceof SpaceRepeatingPadder);
console.log(padder instanceof StringPadder);
// ## Nullable types
// null and undefined is vaild values of every type.
// use --strictNullChecks fixes this
let s="foo";
s=null;
// ## Optional parameters and properties
// use --strictNullChecks ,an optional parameter automatically adds |undefined
function getVal(x:number,y?:number){
    return x+y;
}
getVal(5,6);
function broken(name: string | null): string {
    function postfix(epithet: string) {
      return name.charAt(0) + '.  the ' + epithet; // error, 'name' is possibly null
    }
    name = name || "Bob";
    return postfix("great");
  }
console.log(broken(null)); 
//Type Aliases
type Name=string;
type NameResolver=()=>string;
type NameOrResolver=Name|NameResolver;
function getName(n:NameOrResolver):Name{
    if(typeof n=="string"){
        return n;
    }else{
        return n();
    }
}
// aliasing a primitive is not terribly useful
// aliasing type like interface
// it is not possible for a type ailias to appear anywhere else on the right side of the declaration
//error type Yikes=Array<Yikes>;
// interface vs Type Aliases
//One difference is that interfaces create a new name that is used everywhere. Type aliases don’t create a new name — for instance, error messages won’t use the alias name.
// A second more important difference is that type aliases cannot be extended or implemented from (nor can they extend/implement other types).
// On the other hand, if you can’t express some shape with an interface and you need to use a union or tuple type, type aliases are usually the way to go
type Alias={num:number};
interface Interface{num:number};
declare function aliased(arg:Alias):Alias;
declare function interfaced(arg:Interface):Interface;
// ## String Literal Types
type Easing="ease-in"|"ease-out"|"ease-in-out";//allow three strings
// ## Numeric Literal Types
function rollDice():1|2|3 {
   return 
}
// ## Discriminated Unions
class BasicCalculator{
    public constructor(protected value:number=0){}
    public currentValue():number{
        return this.value;
    }
    public add(operand:number):this{
        this.value*=operand;
        return this;
    }
    // ... other
}
let v=new BasicCalculator(2).add(1).currentValue();
// ## Index types
//  index type query  K extends keyof T
//  indexed access  o[n]
function pluck<T,K extends keyof T>(o:T,names:K[]):T[K][]{
    return names.map(n=>o[n]);
}
// ### Index types and string index signatures
// ### Conditional Types