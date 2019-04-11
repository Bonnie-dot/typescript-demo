var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//## Generics  for creating reusable components is generics
function indentity(arg) {
    return arg;
}
// two ways
var output = indentity('string');
var output2 = indentity('mystring'); // most common 
console.log(output);
console.log(output2);
// ### working with generic Types variables
function indentity2(arg) {
    console.log(arg.length);
    return arg;
}
// other writing 
function indentity3(arg) {
    return arg;
}
var n = indentity2([1, 3]);
var myIndentitiy = indentity3;
var n2 = myIndentitiy([6, 6]);
console.log(n2);
var genericObj = indentity;
// Generic class
var GernericNumber = /** @class */ (function () {
    function GernericNumber() {
    }
    return GernericNumber;
}());
var gernericNumber = new GernericNumber();
gernericNumber.zeroNum = 5;
gernericNumber.add = function (x, y) {
    return y + x;
};
console.log(gernericNumber.add(6, 8));
function loggingIdentity(arg) {
    console.log(arg.length); //这样就限制了参数类型
    return arg;
}
loggingIdentity({ dd: 3, length: 6 });
// get the key
function getProperty(obj, key) {
    return obj[key];
}
console.log(getProperty({ m: 1 }, 'm'));
// using class types in generic
function create(c) {
    return new c();
}
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
    }
    return BeeKeeper;
}());
var ZooKeeper = /** @class */ (function () {
    function ZooKeeper() {
    }
    return ZooKeeper;
}());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bee;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lion;
}(Animal));
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag;
