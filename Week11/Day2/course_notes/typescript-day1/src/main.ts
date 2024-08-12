// // let username = "John";

// // username = "Dan";
// // username = "42";

// // console.log(username);

// // let a = 12;
// // let b = "7";
// // let c = 2;

// // console.log(a + b);
// // console.log(a + c);
// // console.log(a / b);

// // type number
// let num: number = 7;
// // num = 9;
// // num = '12'
// // num = 5
// // num = true

// // type string
// let str: string;
// str = "abc";
// // str = 9;

// // type boolean
// let bol: boolean = true; // false
// // bol = false;

// // type any - try not to use any as much as posible
// let anytype: any;
// // anytype = "a";
// // anytype = 9;
// // anytype = false;
// // anytype = {};

// // union type
// let myunion: number | string | boolean;
// // myunion = 12;
// // myunion = "12";
// // myunion = true;

// // type RegExp
// let reg: RegExp = /\w+/g;

// // type Array
// let strarr: string[] = [];
// // let strarr: string[] = ['abc', 'bcd','cde']
// // strarr[1] = 'aaa'
// // strarr[0] = 999
// // strarr.push('bbb')
// // strarr.push(true)

// let numarr: number[] = [];
// // numarr[0] = '9'

// let numstrarr: (string | number | boolean)[] = ["a", 1, "b"];
// // numstrarr.push(true)

// // type Tuple
// let mytuple: [string, number, boolean] = ["a", 1, true];
// // mytuple[0] = 1
// // mytuple[1] = 4

// // type Object
// let myobj: object = {};
// // myobj = []

// // const userOne = {
// //   name: "John",
// //   age: 25,
// //   address: "abc",
// // };

// // userOne.gender = 'male'

// // type or interface

// // type User = {
// //   name: string,
// //   age: number,
// //   address?: string,
// //   active: boolean,
// // };

// interface User {
//   name: string;
//   age: number;

//   // optional property
//   address?: string;
//   active?: boolean;
// }

// let myuser: User = {
//   name: "aaa",
//   age: 33,
//   address: "aaa aaa",
//   //   active: true,
//   //   last: 'kkkkk'
// };

// let myuser1: User = {
//   name: "bbb",
//   age: 44,
//   active: true,
// };

// // type Enum
// enum Grade {
//   U,
//   D,
//   C,
//   B,
//   A,
// }

// //  console.log(Grade[Grade.U]);

// // type literal
// let statuscode: "loading" | "success" | "failed";
// // statuscode = "failed";

// // type Aliases
// type StringOrNumber = string | number;

// type StudentGrade = StringOrNumber | boolean;

// type Student = {
//   name: string;
//   age: number;
//   isGood: StudentGrade;
// };

// let stud1: Student = {
//   name: "Anne",
//   age: 33,
//   isGood: 7,
// };

// // function
// // const sum = (a: number, b: number): number => {
// //   return a + b;
// // };

// // sum(4,6);
// // sum('3', 7)

// // const sumconcat = (a: string, b: StringOrNumber): number => {
// //   return (a) + (b);
// // };

// // sumconcat("3", "4");

// const greet = (name: string): void => {
//   console.log(`Hello ${name}`);
// };

// type SumFunc = (a: number, b: number) => number;

// const add: SumFunc = (a, b) => {
//   return a + b;
// };

// const myadd: SumFunc = (a, b) => {
//   if (a > 10) {
//     return -1;
//   }
//   return b;
// };

// const multi: SumFunc = (a, b) => {
//   return 3;
// };
// // default params
// const addDefault = (a: number, b: number = 5): number => {
//   return a + b;
// };

// // optional params
// const addOptional = (a: number, b?: number): number => {
//   // type guard
//   // if(typeof b === undefined) b = 9
//   return a + (b || 0);
// };

// // never type
// const throwError = (message: string): never => {
//   throw new Error(message);
// };


function add(a:number, b:number):number;
function add(a:string, b:string):string;
function add(a:number | string, b: number | string): number | string {
  if (typeof a === 'string' && typeof b === 'string')
    return a + b + "";
  if (typeof a === 'number' && typeof b === 'number')
    return a + b;
  return -1
}

// const addRest = (a:number, ...rest: number[]): number => {
//   return rest
// }

const errorMessage = (msg: string):never => {
  throw new Error(msg)
}


const listener= (param: boolean = true) => {
  // while(param){ }
}


type One = string;
type Two = string | number;
type Three = 'hello';

let a:One = 'abc'
let b = a as Two;
console.log(b)
b = 9;

let c = a as Three


// const date = document.getElementById('year') as HTMLSpanElement;
// date.textContent = '2024';


// const thisYear: string = new Date().getFullYear().toString();

const year = document.getElementById('year') as HTMLSpanElement;
const thisYear: string = new Date().getFullYear().toString();
year ? year.textContent = thisYear : ''


class User {
  private name:string;
  private age: number;
  protected active:boolean;

  constructor(name:string,age:number,active: boolean){
    this.name = name;
    this.age = age;
    this.active = active;
  }

  public getAge(){
    return `My age is ${this.age}`
  }
  getActive(){
    return `Am I active? ${this.active}`
  }
}

// let user1 = new User('John',25,true)
// console.log(user1.age);

class Peeps {
  static count : number = 0;

  static getCount(): number{
    return Peeps.count;
  }

  public id: number;
  public name:string;

  constructor(name:string){
    this.name = name;
    this.id = ++Peeps.count
  }
}

const stud1 = new Peeps('John');
const stud2 = new Peeps('Marry');
const stud3 = new Peeps('Anne')

console.log(stud1.name)


type UserType = {
  name:string;
  age: number;
  active:boolean;
}

type Grade = {
  grade:number;
}

let user1 :UserType ={
  name: 'John',
  age: 35,
  active:true
}

let student1: UserType & Grade ={
  name: 'John',
  age: 35,
  active:true,
  grade:10
}


interface UserInterface {
  name:string;
  age: number;
  active:boolean;
}

class Userr implements UserInterface{
  _name:string;
  _age: number;
  _active:boolean;

  constructor(name:string,age:number, active:boolean) {
    this._name = name
    this._age = age
    this._active = active
  }

  get name(): string{
    return this._name
  }
  get age(): number{
    return this._age
  }
  get active(): boolean{
    return this._active
  }

  set name (name:string){
    this._name = name;
  }
}