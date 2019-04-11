// ## Advanced Types
// ## Intersection（交叉） Type
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function (name) {
        console.log("I'm " + name);
    };
    return ConsoleLogger;
}());
function extend(first, second) {
    var result = {};
    for (var prop in first) {
        if (first.hasOwnProperty(prop)) {
            result[prop] = first[prop];
        }
    }
    for (var prop in second) {
        if (second.hasOwnProperty(prop)) {
            result[prop] = second[prop];
        }
    }
    return result;
}
var j = extend(new Person('j'), ConsoleLogger.prototype);
console.log(j.name);
function getSmallPet() {
    return;
}
var pet = getSmallPet();
//okay pet.layEggs();
// pet.swim error
// ### Type Guards and Differentiating Types
var pettwo = getSmallPet();
// if((<Bird>pettwo).fly){
//     (<Bird>pettwo).fly();
// }
// ### User-Defined Type Guard
function isFish(pet) {
    return pet.swim !== undefined;
}
var SpaceRepeatingPadder = /** @class */ (function () {
    function SpaceRepeatingPadder(numSpace) {
        this.numSpace = numSpace;
    }
    SpaceRepeatingPadder.prototype.getPaddingString = function () {
        return this.numSpace;
    };
    return SpaceRepeatingPadder;
}());
var StringPadder = /** @class */ (function () {
    function StringPadder(val) {
        this.val = val;
    }
    StringPadder.prototype.getPaddingString = function () {
        return this.val;
    };
    return StringPadder;
}());
function getRandomPadder() {
    return Math.random() < 0.5 ? new SpaceRepeatingPadder(3) : new StringPadder('r');
}
var padder = getRandomPadder();
console.log(padder instanceof SpaceRepeatingPadder);
console.log(padder instanceof StringPadder);
// ## Nullable types
// null and undefined is vaild values of every type.
// use --strictNullChecks fixes this
var s = "foo";
s = null;
// ## Optional parameters and properties
// use --strictNullChecks ,an optional parameter automatically adds |undefined
function getVal(x, y) {
    return x + y;
}
getVal(5, 6);
function broken(name) {
    function postfix(epithet) {
        return name.charAt(0) + '.  the ' + epithet; // error, 'name' is possibly null
    }
    name = name || "Bob";
    return postfix("great");
}
console.log(broken(null));
function getName(n) {
    if (typeof n == "string") {
        return n;
    }
    else {
        return n();
    }
}
;
// ## Numeric Literal Types
function rollDice() {
    return;
}
// ## Discriminated Unions
var BasicCalculator = /** @class */ (function () {
    function BasicCalculator(value) {
        if (value === void 0) { value = 0; }
        this.value = value;
    }
    BasicCalculator.prototype.currentValue = function () {
        return this.value;
    };
    BasicCalculator.prototype.add = function (operand) {
        this.value *= operand;
        return this;
    };
    return BasicCalculator;
}());
var v = new BasicCalculator(2).add(1).currentValue();
// ## Index types
//  index type query  K extends keyof T
//  indexed access  o[n]
function pluck(o, names) {
    return names.map(function (n) { return o[n]; });
}
// ### Index types and string index signatures
// ### Conditional Types
