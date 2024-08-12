// Exercise 1

class Person {
    private firstName: string;
    private lastName: string;
    public age: number;
    protected address: string;

    constructor(firstName:string, lastName:string, age:number, address: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }

    public getFullName(){
        return this.firstName + " " + this.lastName;
    }
}

//Exercise 2
interface Vehicle {
    make:string;
    model: string;
    start():string;
}

interface Car extends Vehicle {
    numberOfDoors: number;
}

class Sedan implements Car{
    numberOfDoors: number;
    make: string;
    model: string;

    constructor(numberOfDoors:number,make:string,model:string){
        this.numberOfDoors = numberOfDoors;
        this.make = make;
        this.model = model;

    }

    start(): string {
        return "engine was started";
    }

}

// Exercise3

interface T{
    name: string;
}

interface U{
    age: number;
}

const combineObjects = (t:T,u:U ):T&U=>{
    let combined: (T&U);
    combined = {...t,...u}
    return combined

}

const t:T = {
    name:"Meir"
};

const u:U = {
    age:23
}

const ut = combineObjects(t,u)

console.log(ut);

// Exercise 4
class Stack<T> {
    private stack:T[] = [];

    push(item:T):void{
        this.stack.push()
    }

    pop():T | undefined{
        return this.stack.pop(); 
    }

    isEmpty():boolean{
        return (this.stack.length === 0)
    }
}

const numberStack = new Stack<number>();
numberStack.push(10);
console.log(numberStack.pop());
console.log(numberStack.isEmpty());

// exercise5

function filterArray<T>(array: T[], predicate:(element:T)=>boolean):T[]{
    return array.filter(item => predicate(item))
}