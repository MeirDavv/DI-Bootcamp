year = 2001;

function checkYear(year){
    msg = year > 2000 ? "You are in the 21st century" : "You live in the middle age"
    return msg
}


const calculator = (num1, num2, operator) => {
    (operator === '+') ? num1 + num2 :
    (operator === '-') ? num1 - num2 :
    (operator === '*') ? num1 * num2 :
    (operator === '/') ? (num2!=0 ? num1 / num2 : "division by zero") :
    'Invalid operator'
}

function currying(f){
    return function (a) {
        return function(b){
            return f(a,b)
        }
    }
}


let user = {
    name : "John",
    last : "Doe",
    address : {
        city : "Tel Aviv"
    }
}

let user1 = {...user}
user1.last = 'Davidov'
console.log (user, user1);

user1.address = {...user.address}
user1.address.city = "Holon"
console.log (user, user1);