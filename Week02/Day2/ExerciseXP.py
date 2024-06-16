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
my_fav_numbers.update((3,7))
last_number = 7
my_fav_numbers.remove(last_number)
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
basket.insert(0, "Apples")
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

start=1.5
jump=0.5
lst2 = [start + jump*i for i in range(8)]
for i in range(len(lst2)):
    if(lst2[i].is_integer()):
        lst2[i] = int(lst2[i])
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

#Exercise9
'''
1. A movie theater charges different ticket prices depending on a person’s age.
if a person is under the age of 3, the ticket is free.
if they are between 3 and 12, the ticket is $10.
if they are over the age of 12, the ticket is $15.

2. Ask a family the age of each person who wants a ticket.

3. Store the total cost of all the family’s tickets and print it out.

4. A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
At the end, print the final list.
'''

'''Answer 1-3:'''
amount = int(input("Hi there. How many tickets would you like? "))
print("Let's go over each family member please.")
total_cost = 0
below_3_cost = 0
between_3_and_12_cost = 10
above_12_cost = 15
currency_sign = '$'
ages = []
for i in range(amount):
    age = int(input("What's your age? "))
    while (age <= 0):
        print("Invalid! Try again. ")
        age = int(input("What's your age? "))
    ages.append(age)

for age in ages:
    if (age < 3):
        total_cost += below_3_cost
    elif (age<=12):
        total_cost += between_3_and_12_cost
    else:
        total_cost += above_12_cost
print(f"The total cost is: {total_cost}{currency_sign}. ")

'''Answer 4:'''
lst_names = ['David', 'Josh', 'Dan', 'Moses', 'Yossi']
lst_names_copy = lst_names[:]
min_age = 16
max_age = 21

ages = []
for name in lst_names:
    age = int(input(f"Hey {name}, what's your age?"))
    ages.append(age)

for age in ages:
    if(age > min_age and age < max_age):
        lst_names_copy.remove(name)
    
print(lst_names_copy)

#Exercise10
'''
Using the list below :

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
We need to prepare the orders of the clients:
Create an empty list called finished_sandwiches.
One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
After all the sandwiches have been made, print a message listing each sandwich that was made, such as:
I made your tuna sandwich
I made your avocado sandwich
I made your egg sandwich
I made your chicken sandwich
'''


sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
run_out_of = 'Pastrami sandwich'
lst_length = len(sandwich_orders)
index = 0



while (run_out_of in sandwich_orders):
    sandwich_orders.remove(run_out_of)

print(sandwich_orders)

finished_sandwiches = []
finished_sandwiches.extend(sandwich_orders)

for order in finished_sandwiches:
    print(f"I made your {order.lower()}")




