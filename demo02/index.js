var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//# variable declarations
//# let 有块级作用域  定义之前不能被读或者写，会有暂时性死区
//不能被重复定义
function foo() {
    return a;
}
foo();
var a = 6;
//方法里面的变量也可以被重新定义，但是必须在一个不同的作用域里面
function m(condition, x) {
    if (condition) {
        var x_1 = 100; //形成了一个单独的block-scope
    }
    console.log(x);
}
m(true, 10);
//# const  不能够被重复定义
//let vs const 
//spread 扩展 对象只能扩展属性不能扩展方法
var Obj = /** @class */ (function () {
    function Obj() {
        this.p = 15;
    }
    Obj.prototype.m = function () {
    };
    return Obj;
}());
var o = new Obj();
var o2 = __assign({}, o);
o2.p;
//o2.m(); 报错不存在该方法
