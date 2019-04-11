var isDone = true;
var octal = 484;
var color = "red";
// # array
var arr = [1, 2, 3];
var arm = [1, 2, 3];
//# Tuple 元祖（数组） 已知固定的数量和类型
var x = ['hello', 12];
//# Enum 枚举 依次列举所有可能，并且定义的值不能超过定义的值
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Yellow"] = 1] = "Yellow";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
var c = Color.Red; //0
// 同时枚举类型默认开始为0，也可以修改
var Animal;
(function (Animal) {
    Animal[Animal["dog"] = 1] = "dog";
    Animal[Animal["cat"] = 2] = "cat";
})(Animal || (Animal = {}));
var a = Animal.cat; //2
//可以通过小标访问，如果超过了默认为undefined
var a2 = Animal[3];
//# any 定义的时候不知道什么类型，定义为any类型可以逃过类型检查
var notSure = 5;
notSure = "this is any";
// # void无返回值
function getName() {
    console.log(11);
}
//如果指定变量只能为undefined 或者null
//let n:void='ddd' 报错
//# undefined和null,是所有类型的子类，都可以定义
var n = undefined;
//但是如果使用了 --strictNullChecks，null和undefined只能被分配给自身和void
// # never 只一般不会发生的类型，主要用于方法或者箭头函数抛出错误
// never 不是任何子类，包括自身 
//Function returning never must have unreachable end point
function m(message) {
    throw new Error(message);
}
create({ name: 'cq' });
create(null);
//# type assertions 两种写法 但是在jsx中 写as写法
var m1 = "dfdf";
var n2 = m1.length;
var n3 = m1.length;
