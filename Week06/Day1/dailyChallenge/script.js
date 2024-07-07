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

cloneGroceries = () => {
    user = client;
    client = 'Betty'
    console.log(user);
    // No. the modification will not appear on the user variable since copy was by value
    

    shopping = groceries;
    groceries.totalPrice = "35$"
    console.log(shopping);
    // Yes. The modification will appear since it was passed by reference.

    groceries.other.paid = false;
    console.log(shopping);
    // Yes. The modification will appear since it was passed by reference.

}

cloneGroceries();