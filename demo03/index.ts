//# interfaces 按照定义的属性 传递属性，没有顺序
interface labelVal{
    label:string,
    name:string
}
function printLabel(labelObj:labelVal){
    console.log(labelObj.label);
}
printLabel({name:'111',label:'111'});
// ## option Properties
interface Person{
    name:string,
    age?:number
}
function helloPerson(person:Person) {
    return {age:person.age}
    
}
helloPerson({age:111,name:"1111"})
//## readonly properties 
//### readonly properties vs const  const---->variable readonly----> property
interface Animal{
    readonly name:string
}
function helloAnimal(animal:Animal){
   //报错 animal.name="dfdf";
    console.log(animal.name)
}
// ### 数组只读
let reArr:ReadonlyArray<number>=[1,2,3];
// 报错 reArr.push(33);
let tempArr=reArr as number[];//只有这样重写
//## Excess Property Checks 总体上不推荐使用的，应该考虑是程序上的bug 或者重新定义接口
//如果在没有iterface 中定义的变量，你想使用，可以采用如下方法
// first
helloAnimal({age:1111,name:'333'} as Animal);
//second
interface Animal2{
    readonly name:string
    [propName:string]:any//这样
}
helloAnimal({age:1111,name:'333',size:64} as Animal2);
//## Function Types
interface SearchFunc{
    // 参数类型，参数名可以不一致 返回值boolean
    (name:string,age:string):boolean;
}
let searchFun:SearchFunc=function(name,age){//函数类型
    return false
}
searchFun('ds','22');
//参数名可以不一样
let searchFun2:SearchFunc=function(src,m):boolean{//函数类型 boolean指定当前函数返回值的是布尔类型 这里也可以不指定 也会依据SearchFunc 检查返回类型
    return false
}
//## Indexable Types ，only support string and number
interface StringArray{
    [index:number]:string
}
let myArray:StringArray=['Bob','F']
interface NumberDictionary {
    //  name: string;  error, the type of 'name' is not a subtype of the indexer 已经定义过了
    length: number;    // ok, length is a number
    [index: string]: number;
  
}
//readonly array
interface readonlyArray{
    readonly [name:number]:number
}
let readonlyArray:readonlyArray=[11,111]
//## Class Types 主要用于描述公共方法
interface PersonInterface{//public side
    name: string;
    hello(name:string)//method
}
class Personin implements PersonInterface{
    hello(name:'ddd'){

    };
    name: string;
}
//### static vs instance 
//#### static conctructor 类不会检测静态部分
//下面这个例子 static和instance都检测了 
//感觉不是太理解
interface ClockConstructor{
    new (hour:number,minute:number):ClockInterface;//为了实现静态部分的检测
}
interface ClockInterface{//instance
    track();
}
function createClock(ctor:ClockConstructor,hour:number,minute:number):ClockInterface{//这样会检测constructor
    return new ctor(hour,minute);
}
class Clock implements ClockInterface{
    constructor(h:number,m:number){

    }
    track(){

    }
}
//## extending interfaces eg:copy the members of other interface
interface Shape{
    code:string
}
interface Square extends Shape{
    name:string
}
let square=<Square>{};
square.name="df";
//combine
interface Tree{
    height:number
}
interface Follower{
    width:number
}
interface Plant extends Tree,Follower{//multiple interface
    kind:string
}
let plant=<Plant>{};
plant.height=44;
//## Hybrid Types
interface Counter{
    (name:string):string,
    interval:number,
    hello():void
}
function getCounter():Counter{
    let count=<Counter>function(name:string){};//name??
    count.interval=666;
    count.hello=function(){};
    return count;
}
//## interface extending Classess
class Control{
    private state:any//private or protected
}
interface SelectableControl extends Control{
    selectOption():void
}
class Button extends Control implements SelectableControl{
    selectOption(){}
}
class Image implements SelectableControl{
    private state:any;
    selectOption(){}
}