let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}


// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.

displayGroceries = () => groceries.fruits.forEach(fruit => console.log(fruit));

displayGroceries();