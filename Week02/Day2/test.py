topping = input("Would you like a topping? type 'quit' if not ")
pizza_cost = 10
topping_cost = 2.5
total_cost = pizza_cost
all_toppings = ""
while (topping!= 'quit'):
    total_cost += topping_cost
    all_toppings += topping + " "
    print(f"Added {topping} topping to the pizza")
    print(f"The total cost is: {total_cost}")
    print(f"All the toppings are: {all_toppings}")
    topping = input("Would you like another topping? type 'quit' if not ")