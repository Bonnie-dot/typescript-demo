// ## Type Compatibility
// ### This comparison process proceeds recursively, exploring the type of each member and sub-member
interface Named{
    name:string
}
let x:Named;
let y={name:'111',location:"dd"};
console.log(x=y);
//  Enum values from different enum types are considered incompatible