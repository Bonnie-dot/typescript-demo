//# variable declarations
//# let 有块级作用域  定义之前不能被读或者写，会有暂时性死区
//不能被重复定义
function foo(){
    return a;
}
foo();
let a=6;
//方法里面的变量也可以被重新定义，但是必须在一个不同的作用域里面
function m(condition,x){
    if(condition){
        let x=100;//形成了一个单独的block-scope
    }
    console.log(x);
}
m(true,10);
//# const  不能够被重复定义
//let vs const 
//spread 扩展 对象只能扩展属性不能扩展方法
class Obj{
    p=15;
    m(){

    }
}
let o=new Obj();
let o2={...o};
o2.p;
//o2.m(); 报错不存在该方法