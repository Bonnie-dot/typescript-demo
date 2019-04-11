//## classes
class Greeter{
    greeting:string;
    constructor(message:string){
        this.greeting=message;
    }
    greet(){
        return 'Hello'+this.greeting
    }
}
let greeter=new Greeter('world');
//### inheritance
class Animal{//superclassess
    move(){

    }
}
class Dog extends Animal{//subclassedd
    bark(){

    }
}
let dog=new Dog();
dog.move();
//complex example
class Plant{
    name:string;
    constructor(theName:string){
        this.name=theName
    }
    say(distan:number=0){
        console.log(`this's is ${distan}`)
    }
}
class Tree extends Plant{
    constructor(theName){
        super(name)//继承属性
    }
    hello(distan=90){
       super.say(distan)
    }
}
class Follower extends Plant{
    height:number;
    constructor(theName,height){
        super(name);//super==>superclass this==>class
        this.height=height;
    }
    say(distance=90){
        console.log(`Follower's ${distance}`)
        super.say(distance);//override method
    }
}
let tree=new Tree('tree');
tree.say();
tree.hello();
let follower:Plant=new Follower('follower',50);
follower.say();
//### public,private,protected modifiers
//### public In the typescript ,each member is public by default
//### private it cannot be access from outside of container class
class Person{
    private name:string;
    protected age:number;
    constructor(theName,age){
        this.name=theName;
        this.age=age;
    }
    say (){
        console.log(`bmbnm ${name}`);
    }
    sayAge(){
        console.log(`person age ${this.age}`);
    }
}
// 报错 new Person().name;
// new Person('age',18).say();
class Child extends Person{
    constructor(){
        super('nnn',18)
    }
}
let chen=new Person('ddd',18);
chen.say();
let child=new Child();
chen=child;
//### protected instance method能够访问 
chen.sayAge();
//chen.age 暴露出错
// constructor marked protected 
class Color{
    name:string;
    protected constructor(theName){
        this.name=theName;
    }
}
//let color=new Color('red') 不能这样声明  The 'Person' constructor is protected 
//solution
class Rgb extends Color{
    readonly time:string;
    private type:string;
    constructor(theName,type){
        super(theName)
        this.type=type;
    }
    sayHello(){
        console.log(`This's is ${this.name} and This Type is ${this.type}`);
    }
}
let rgb=new Rgb('black','0000');
rgb.sayHello();
//### readonly modifier
// rgb.time="df" error time is readonly
//### parameter properities
class Octoput{
    readonly numberOfLeg:number=0;
    constructor(readonly name:string){
        this.name=name;
    }
}
//### Accessors
//require you set the complier to output ECMAScript5 or hight eg tsc --target ES2016 index.tsc --watch 
let passcode="g";
class Employee{
    private _fullName:string;
    get fullName(){
        return this._fullName;
    }
    set fullName(newName:string){
        if(passcode=="screct"){
            this._fullName=newName;
        }else{
            console.log('Error:Unauthorized')
        }
    }
}
let employee=new Employee();
employee.fullName="Bonnie";
if(employee.fullName){
    console.log(`This's is ${employee.fullName}`);
}
//### static Properties
class Grid{
    static origin={x:1,y:1};
    calculateDistance(point:{x:number,y:number}){
        let xDist=point.x-Grid.origin.x;//static propert use class name
        let yDist=point.y-Grid.origin.y;
        return {x:xDist,y:yDist}
    }
}
let grid=new Grid();
let res=grid.calculateDistance({x:333,y:999});
console.log(res);
//### abstract classess not instantiated directly 
abstract class Department{
    constructor(name:string){

    }
    printName():void{
    }
    abstract printMeeting():void;//must implemented in derived classes
}
class AccountingDepartment extends Department{
    constructor(){
        super('accounting')
    }
    printMeeting():void{
        console.log('accounting')
    }
    generateReports():void{
        console.log('Genertating accounting')
    }
}
// let department=new Department() not instantiated
let accounting=new AccountingDepartment();
accounting.printMeeting();
//### using a class as an interface
class Point{
    x:number;
    y:number
}
interface Point3d extends Point{
    z:number
}