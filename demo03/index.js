function printLabel(labelObj) {
    console.log(labelObj.label);
}
printLabel({ name: '111', label: '111' });
function helloPerson(person) {
    return { age: person.age };
}
helloPerson({ age: 111, name: "1111" });
function helloAnimal(animal) {
    //报错 animal.name="dfdf";
    console.log(animal.name);
}
// ### 数组只读
var reArr = [1, 2, 3];
// 报错 reArr.push(33);
var tempArr = reArr; //只有这样重写
//## Excess Property Checks 总体上不推荐使用的，应该考虑是程序上的bug 或者重新定义接口
//如果在没有iterface 中定义的变量，你想使用，可以采用如下方法
// first
helloAnimal({ age: 1111, name: '333' });
helloAnimal({ age: 1111, name: '333', size: 64 });
var searchFun = function (name, age) {
    return false;
};
searchFun('ds', 'd');
