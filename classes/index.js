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
//## classes
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return 'Hello' + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter('world');
//### inheritance
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.move();
//complex example
var Plant = /** @class */ (function () {
    function Plant(theName) {
        this.name = theName;
    }
    Plant.prototype.say = function (distan) {
        if (distan === void 0) { distan = 0; }
        console.log("this's is " + distan);
    };
    return Plant;
}());
var Tree = /** @class */ (function (_super) {
    __extends(Tree, _super);
    function Tree(theName) {
        return _super.call(this, name) || this; //继承属性
    }
    Tree.prototype.hello = function (distan) {
        if (distan === void 0) { distan = 90; }
        _super.prototype.say.call(this, distan);
    };
    return Tree;
}(Plant));
var Follower = /** @class */ (function (_super) {
    __extends(Follower, _super);
    function Follower(theName, height) {
        var _this = _super.call(this, name) || this;
        _this.height = height;
        return _this;
    }
    Follower.prototype.say = function (distance) {
        if (distance === void 0) { distance = 90; }
        console.log("Follower's " + distance);
        _super.prototype.say.call(this, distance); //override method
    };
    return Follower;
}(Plant));
var tree = new Tree('tree');
tree.say();
tree.hello();
var follower = new Follower('follower', 50);
follower.say();
//### public,private,protected modifiers
//### public In the typescript ,each member is public by default
//### private it cannot be access from outside of container class
var Person = /** @class */ (function () {
    function Person(theName, age) {
        this.name = theName;
        this.age = age;
    }
    Person.prototype.say = function () {
        console.log("bmbnm " + name);
    };
    Person.prototype.sayAge = function () {
        console.log("person age " + this.age);
    };
    return Person;
}());
// 报错 new Person().name;
// new Person('age',18).say();
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super.call(this, 'nnn', 18) || this;
    }
    return Child;
}(Person));
var chen = new Person('ddd', 18);
chen.say();
var child = new Child();
chen = child;
//### protected instance method能够访问 
chen.sayAge();
//chen.age 暴露出错
// constructor marked protected 
var Color = /** @class */ (function () {
    function Color(theName) {
        this.name = theName;
    }
    return Color;
}());
//let color=new Color('red') 不能这样声明  The 'Person' constructor is protected 
//solution
var Rgb = /** @class */ (function (_super) {
    __extends(Rgb, _super);
    function Rgb(theName, type) {
        var _this = _super.call(this, theName) || this;
        _this.type = type;
        return _this;
    }
    Rgb.prototype.sayHello = function () {
        console.log("This's is " + this.name + " and This Type is " + this.type);
    };
    return Rgb;
}(Color));
var rgb = new Rgb('black', '0000');
rgb.sayHello();
//### readonly modifier
// rgb.time="df" error time is readonly
//### parameter properities
var Octoput = /** @class */ (function () {
    function Octoput(name) {
        this.name = name;
        this.numberOfLeg = 0;
        this.name = name;
    }
    return Octoput;
}());
//### Accessors
//require you set the complier to output ECMAScript5 or hight eg tsc --target ES2016 index.tsc --watch 
var passcode = "g";
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode == "screct") {
                this._fullName = newName;
            }
            else {
                console.log('Error:Unauthorized');
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
employee.fullName = "Bonnie";
if (employee.fullName) {
    console.log("This's is " + employee.fullName);
}
//### static Properties
var Grid = /** @class */ (function () {
    function Grid() {
    }
    Grid.prototype.calculateDistance = function (point) {
        var xDist = point.x - Grid.origin.x; //static propert use class name
        var yDist = point.y - Grid.origin.y;
        return { x: xDist, y: yDist };
    };
    Grid.origin = { x: 1, y: 1 };
    return Grid;
}());
var grid = new Grid();
var res = grid.calculateDistance({ x: 333, y: 999 });
console.log(res);
//### abstract classess not instantiated directly 
var Department = /** @class */ (function () {
    function Department(name) {
    }
    Department.prototype.printName = function () {
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'accounting') || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('accounting');
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log('Genertating accounting');
    };
    return AccountingDepartment;
}(Department));
// let department=new Department() not instantiated
var accounting = new AccountingDepartment();
accounting.printMeeting();
//### using a class as an interface
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
