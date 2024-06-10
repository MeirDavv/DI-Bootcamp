#Exercise1
'''
Question:
Create a set called my_fav_numbers with all your favorites numbers.
Add two new numbers to the set.
Remove the last number.
Create a set called friend_fav_numbers with your friend’s favorites numbers.
Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.
'''

my_fav_numbers = set()
my_fav_numbers.add(3)
my_fav_numbers.add(7)
my_fav_numbers.remove(7)
friend_fav_numbers = {6,9}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)


#Exercise2
'''
Question:
Given a tuple which value is integers, is it possible to add more integers to the tuple?
'''

'''
Answer:
No. Tuples are immutable
'''


#Exercise3
'''
Question:
Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];

Remove “Banana” from the list.
Remove “Blueberries” from the list.
Add “Kiwi” to the end of the list.
Add “Apples” to the beginning of the list.
Count how many apples are in the basket.
Empty the basket.
Print(basket)
'''

basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.append("Apples")
count = basket.count("Apples")
print(count)
basket.clear()
print(basket)


#Exercise4
'''
Question:
1. Recap – What is a float? What is the difference between an integer and a float?
2. Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).
3. Can you think of another way to generate a sequence of floats?
'''

'''
Answer:
1. A float is a number with a floating point, it's a number that contains a fraction in its decimal view.
The difference between a float and an integer- is that an integer contains only whole numbers wheareas float contain all real numbers including decimal fractions.
2. Below
3. Below
'''

lst = []
start = 1.5
while (start<=5):
    if(start.is_integer()):
        start = int(start)
    lst.append(start)
    start+=0.5
print(lst)

lst2 = []
start = 3
end = 10
for i in range(start,end + 1):
    item = i/2
    if(item.is_integer()):
        item = int(item)
    lst2.append(item)
print(lst2)


#Exercise5
'''
Use a for loop to print all numbers from 1 to 20, inclusive.
Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.
'''

for i in range(1,21):
    print (i)

for i in range(1,21,2):
    print (i)


#Exercise6
'''
Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.
'''

name = "Meir"
while True:
    user_name = input("Type a name: ")
    if (user_name.lower() == name.lower()):
        break


#Exercise7
'''
Ask the user to input their favorite fruit(s) (one or several fruits).
Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
Store the favorite fruit(s) in a list (convert the string of words into a list of words).
Now that we have a list of fruits, ask the user to input a name of any fruit.
If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.
'''

fruits = input("Write your favorite fruits, seperate each by a 'space': ")
lst = fruits.split()
print(lst)
fruit = input ("Write me a name of a random fruit: ")
if(fruit in lst):
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy")


#Exercise8
'''
Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
As they enter each topping, print a message saying you’ll add that topping to their pizza.
Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).
'''

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

