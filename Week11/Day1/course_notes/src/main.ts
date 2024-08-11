let username = 'John';

username = "Daniel";

let num : number = 7;

let str : string = 'abc'

let myunion: number | string;
myunion = 12
myunion = '12'

let reg: RegExp;

// (string | number | boolean)

// [string,number,boolean]

enum Grade {
    U,
    D,
    C,
    B,
    A
}

let statuscode : "loading"| "success" | "failed";

statuscode= "failed"

type StringOrNumber = string | number

type Student ={
    name: string,
    age: number,
    isGood: StringOrNumber  
}