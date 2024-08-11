function greet():string
function greet(name:string):string
function greet(name?:string):string{
    if(name){
        return ("Welcome " + name + "! nice to see you again!");
    }
    return("Welcome user!")
}