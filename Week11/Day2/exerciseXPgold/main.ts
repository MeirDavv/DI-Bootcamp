// Exercise 1

class Animal {
    speak():string{
        return "The animal speaks"
    }
}

class Dog extends Animal {
    public speak():string{
        return "The animal speaks"
    }
}

const dog :Dog = new Dog()
console.log(dog.speak());

// Exercise 3

function printInfo(value: number | string): void {
    if (typeof value === "number") {
        console.log(`The number is: ${value}`);
    } else if (typeof value === "string") {
        console.log(`The string is: ${value}`);
    }
}

// Exercise 4

function filterByProperty<T,K extends keyof T>(array:T[],property:K):T[]{
    return array.filter(item => item[property] !== undefined )
}

// Exercise 5

interface Store<K,V> {
    set(key:K,value:V): void;
    get(key:K):V | undefined;
}

class KeyValueStore<K,V> implements Store<K,V> {
    private store: Map<K,V>;

    constructor(){
        this.store = new Map<K,V>();
    }

    set(key:K,value:V):void{
        this.store.set(key,value)
    }

    get(key: K):V | undefined{
        return this.store.get(key);
    }
}

const store = new KeyValueStore<string,number>();

store.set('Apple',5);
store.set('Banana', 10);

console.log(store.get("apple"));
