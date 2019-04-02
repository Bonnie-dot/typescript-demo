//##functions
//### typing the function  
// add types to the parameters and add a return type
function add(x, y) {
    return x + y;
}
//### write the function type
//include parameter types and return type
var myAdd = function (x, y) {
    //parameter
    return x + y;
};
// let myAdd=function(x:number,y:number):number{return x+y}
var myAddTwo = function (x, y) {
    return x + y;
};
myAdd(1, 5);
//### optional and Default Parameters
// adding ? to optional and the end of parameters
// return default void
function buildName(firstName, lasttime) {
}
buildName('xcxc', 'cxvc');
//### default parameters 位置可以随便放
//要是有默认的参数，默认参数在require parameter之前,必须明确调用undefined
function hello(firstName, lastname) {
    if (lastname === void 0) { lastname = '44444'; }
    console.log(firstName + "+" + lastname);
}
function helloTwo(lastname, firstName) {
    if (lastname === void 0) { lastname = '44444'; }
    console.log(firstName + "+" + lastname);
}
hello('dsfsd'); //dsfsd
hello('dsfsd', undefined);
helloTwo(undefined, 'dsfsd'); //dsfsd
helloTwo('dsfsd', undefined);
//### Rest Parameters you can use as many as you want
function buildNameTwo(name) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    console.log(name + " " + restOfName.join(' '));
}
buildNameTwo('ddd', 'sdf', 'sdf', '111');
var deck = {
    suits: ['1', '2'],
    cards: [0, 3],
    createCard: function () {
        var _this = this;
        return function () {
            return { suit: _this.suits[0], card: _this.cards[0] };
        };
    }
};
var createFun = deck.createCard();
console.log(createFun());
//### overloads return different types of objects based on the shape of arguments passed in 
var suits = ['heart', 'spades', 'clubs'];
function pickCard(x) {
    if (typeof x == "object") {
        return Math.floor(Math.random()) * x.length;
    }
    else if (typeof x == "number") {
        var pickSuit = Math.floor(x / 12);
        return {
            suit: suits[pickSuit],
            cards: x / 13
        };
    }
}
var myDeck = [{ suit: 'dis', card: 1 }];
var pickCard1 = pickCard(myDeck);
console.log(pickCard1);
var pickCard2 = pickCard(11);
console.log(pickCard2);
