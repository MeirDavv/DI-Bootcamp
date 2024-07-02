// 🌟 Exercise 1 : Find The Numbers Divisible By 23
// Instructions
// Create a function call displayNumbersDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 
// 368 391 414 437 460 483
// Sum : 5313

function displayNumbersDivisible(){
    let output = "";
    let sum = 0;
    let divisor = 23;
    for (let i =0; i<=500; i++){
        if (i%divisor == 0){
            sum += i;
            output += i + " ";
        }
    }
    console.log("Outcome: ", output);
    console.log("Sum: ", sum);
}

displayNumbersDivisible()

// Bonus: Add a parameter divisor to the function.

// displayNumbersDivisible(divisor)

// Example:
// displayNumbersDivisible(3) : Console.log all the numbers divisible by 3, 
// and their sum
// displayNumbersDivisible(45) : Console.log all the numbers divisible by 45, 
// and their sum

function displayNumbersDivisible2(divisor){
    let output = "";
    let sum = 0;
    for (let i =0; i<=500; i++){
        if (i%divisor == 0){
            sum += i;
            output += i + " ";
        }
    }
    console.log("Outcome: ", output);
    console.log("Sum: ", sum);
}

displayNumbersDivisible2(3)

// 🌟 Exercise 2 : Shopping List
// Instructions
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
// Add the stock and prices objects to your js file.

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

shoppingList = ["banana", "orange", "apple"];

// Create a function called myBill() that takes no parameters.

// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.

// Call the myBill() function.

// Bonus: If the item is in stock, decrease the item’s stock by 1

function myBill(){
    totalBill = 0;
    for (let index in shoppingList){
        let item = shoppingList[index];
        if (item in stock && stock[item] > 0){
            let price = prices[item];
            totalBill += price;
            stock[item] -= 1;
        }
    }
    console.log(totalBill);
}

myBill();

// Exercise 3 : What’s In My Wallet ?
// Instructions
// Note: Read the illustration (point 4), while reading the instructions

// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.

// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01


// 4. To illustrate:

// After you created the function, invoke it like this:

// changeEnough(4.25, [25, 20, 5, 0])
// The value 4.25 represents the item’s price
// The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)


// Examples

// changeEnough(14.11, [2,100,0,0]) => returns false
// changeEnough(0.75, [0,0,20,5]) => returns true

function changeEnough(itemPrice, amountOfChange){
    valueOfChange = [0.25,0.1,0.05,0.01];
    totalChange = 0;
    for (let index in amountOfChange){
        totalChange += amountOfChange[index]*valueOfChange[index];
    }
    if (totalChange >= itemPrice){
        return true;
    }
    return false;
}

result = changeEnough(4.25, [25, 20, 5, 0]);
console.log(result);

resul2 = changeEnough(14.11, [2,100,0,0]);
console.log(resul2);

result3 = changeEnough(0.75, [0,0,20,5]);
console.log(result3);

// 🌟 Exercise 4 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.

function hotelCost(){
    let numberOfNights;
    while (true){
        numberOfNights = prompt("How many nights would you like to stay in the hotel?");
        if(!(numberOfNights === null || numberOfNights == "" || isNaN(numberOfNights)))
            break;
    }
    let costPerNight = 140;
    let totalCost = costPerNight * Number(numberOfNights)
    return totalCost
}



// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$

function planeRideCost(){
    let rideCost;
    destinationPrices = {
        London : 183,
        Paris : 220
    };
    while (true){
        destination = prompt("What's your destination? ")
        if (destination !== null && destination !="" && typeof destination === 'string' )
            break;
    }
    if (destination in destinationPrices){
        rideCost = destinationPrices[destination];
    }
    else{
        rideCost = 300;
    }
    return rideCost; 
}




// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

function rentalCarCost(){
    let numberOfDays;
    while (true){
        numberOfDays = prompt("How many days would you like to rent a car?");
        if(!(numberOfDays === null || numberOfDays == "" || isNaN(numberOfDays)))
            break;
    }
    let costPerDay = 40;
    let totalCost = costPerDay * Number(numberOfDays)
    if (numberOfDays > 10){
        totalCost *= 0.95
    }
    return totalCost
}



// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

function totalVacationCost(){
    let carCost = rentalCarCost();
    let hotel = hotelCost();
    let FlightCost = planeRideCost();

    console.log(`The car cost: $${carCost}, the hotel cost: $${hotel}, the plane tickets cost: $${FlightCost}`);
}

totalVacationCost();

// Call the function totalVacationCost()

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.


// 🌟 Exercise 5 : Users
// Instructions
// Create a new structured HTML file and a new Javascript file

//Continue on exerciseXP-pt2.js