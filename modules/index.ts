// ## export
// Any declaration (such as function,interface,variable,class,type alias) can be exported by adding the export keyword
//### Export statements need rename
class Zip{

}
export {Zip as main};
//### Re-exports re-exports  does not impact it locally,or any
// an modules can wrap one or more modules and comblie all their exports
export * from './index';
// ## import
// import a single export
import {helloAnimal} from '../interfaces/index'