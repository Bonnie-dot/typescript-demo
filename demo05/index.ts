//##functions
//### typing the function  
// add types to the parameters and add a return type
function add(x:number,y:number):number{
    return x+y;
}
//### write the function type
//include parameter types and return type
let myAdd:(x:number,y:number)=>number=function(x:number,y:number):number{
            //parameter
    return x+y;
}
// let myAdd=function(x:number,y:number):number{return x+y}
let myAddTwo:(x:number,y:number)=>number=function(x,y:number):number{
    return x+y;
}
myAdd(1,5)
//### optional and Default Parameters
// adding ? to optional and the end of parameters
// return default void
function buildName(firstName:string,lasttime?:string){

}
buildName('xcxc','cxvc')
//### default parameters 位置可以随便放
//要是有默认的参数，默认参数在require parameter之前,必须明确调用undefined
function hello(firstName:string,lastname='44444'):void{
    console.log(`${firstName}+${lastname}`)
}
function helloTwo(lastname='44444',firstName:string):void{
    console.log(`${firstName}+${lastname}`)
}
hello('dsfsd')//dsfsd
hello('dsfsd',undefined);
helloTwo(undefined,'dsfsd')//dsfsd
helloTwo('dsfsd',undefined);
//### Rest Parameters you can use as many as you want
function buildNameTwo(name:string,...restOfName:string[]){
    console.log(name+" "+restOfName.join(' '));
}
buildNameTwo('ddd','sdf','sdf','111');
//### this es5是调用的是觉得的 es6是在创建时决定的、
interface Card{
    suit:string,
    card:number
}
interface Deck{
    suits:string[];
    cards:number[];
    createCard(this:Deck):()=>Card;//指定this是哪个对象，不用传
}
let deck:Deck={
    suits:['1','2'],
    cards:[0,3],
    createCard(this:Deck){
        return ()=>{
           return {suit:this.suits[0],card:this.cards[0]};
        };
    }
}
let createFun=deck.createCard();
console.log(createFun());