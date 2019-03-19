//# basic type
let isDone:boolean=true;
let octal: number = 0o744;
let color:string="red";
// # array
let arr:number[]=[1,2,3];
let arm:Array<number>=[1,2,3];
//# Tuple 元祖（数组） 已知固定的数量和类型
let x:[string,number]=['hello',12];
//# Enum 枚举 依次列举所有可能，并且定义的值不能超过定义的值
enum Color{Red,Yellow,Green}
let c:Color=Color.Red;//0
// 同时枚举类型默认开始为0，也可以修改
enum Animal{dog=1,cat}
let a:Animal=Animal.cat//2
//可以通过小标访问，如果超过了默认为undefined
let a2:string=Animal[3]
//# any 定义的时候不知道什么类型，定义为any类型可以逃过类型检查
let notSure:any=5;
notSure="this is any"
// # void无返回值
function getName():void{
    console.log(11);
}
//如果指定变量只能为undefined 或者null
//let n:void='ddd' 报错
//# undefined和null,是所有类型的子类，都可以定义
let n:number=undefined;
//但是如果使用了 --strictNullChecks，null和undefined只能被分配给自身和void
// # never 只一般不会发生的类型，主要用于方法或者箭头函数抛出错误
// never 不是任何子类，包括自身 
//Function returning never must have unreachable end point
function m(message):never{
    throw new Error(message);
    
}
//# object 不是基本类型
declare function create(o:object|null):void;
create({name:'cq'});
create(null);
//# type assertions 两种写法 但是在jsx中 写as写法
let m1:any="dfdf";
let n2:number=(<string>m1).length;
let n3:number=(m1 as string).length