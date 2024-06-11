# # Exercise 1: Birthday Look-Up
# # Instructions
# # Create a variable called birthdays. Its value should be a dictionary.
# birthdays = {}
# # Initialize this variable with birthdays of 5 people of your choice. For each entry in the dictionary, the key should be the person’s name, and the value should be their birthday. Tip : Use the format “YYYY/MM/DD”.
# birthdays['Meir'] = '2001/04/03'
# birthdays['Tammy'] = '1998/06/19'
# birthdays['Roni'] = '1991/04/12'
# birthdays['Rachel'] = '1989/04/12'
# birthdays['Dad'] = '1961/08/29'
# # Print a welcome message for the user. Then tell them: “You can look up the birthdays of the people in the list!”“
# print(f"Welcome! You can look up the birthdays of the people in the list! ")
# print(' '.join(list(birthdays.keys())))
# # Ask the user to give you a person’s name and store the answer in a variable.
# name = input("Please provide a person's name and I will show you his birthday ")
# # Get the birthday of the name provided by the user.
# birthday = birthdays[name]
# # Print out the birthday with a nicely-formatted message.
# print(f"{name}'s birthday is on: {birthday}")


# # Exercise 2: Birthdays Advanced
# # Instructions
# # Before asking the user to input a person’s name print out all of the names in the dictionary.

# print(f"Welcome! You can look up the birthdays of the people in the list! ")
# print(' '.join(list(birthdays.keys())))
# name = input("Please provide a person's name and I will show you his birthday ")

# # If the person that the user types is not found in the dictionary, print an error message (“Sorry, we don’t have the birthday information for <person’s name>”)

# if (name not in birthdays.keys()):
#     print(f"Sorry, we don’t have the birthday information for {name}")
# else:
#     print(f"{name}'s birthday is on: {birthday}")


# # Exercise 3: Add Your Own Birthday
# # Instructions
# # Add this new code: before asking the user to input a person’s name to look up, ask the user to add a new birthday:

# # Ask the user for a person’s name – store it in a variable.
# # Ask the user for this person’s birthday (in the format “YYYY/MM/DD”) - store it in a variable.
# # Now add this new data into your dictionary.
# # Make sure that if the user types any name that exists in the dictionary – including the name that he entered himself – the corresponding birthday is found and displayed.

# name = input("Please provide a person's name: ")
# if name in birthdays.keys():
#     print(f"Name {name} already exists! His birthday is {birthdays[name]}")

# birthday = input("Please provide the new birthday in the format YYYY/MM/DD: ")
# birthdays[name] = birthday
# print(f"Name {name}'s birthday is {birthday}")


# Exercise 4: Fruit Shop
# Instructions
items = {
    "banana": 4,
    "apple": 2,
    "orange": 1.5,
    "pear": 3
}
# Using the dictionary above, each key-value pair represents an item and its price - print all the items and their prices in a sentence.
for fruit, price in items.items():
    print(f"{fruit}'s price is {price}. ", end='')
    
print()
# Using the dictionary below, each value are dictionaries containing both the price and the amount of items in stock -
# write some code to calculate how much it would cost to buy everything in stock.
items = {
    "banana": {"price": 4 , "stock":10},
    "apple": {"price": 2, "stock":5},
    "orange": {"price": 1.5 , "stock":24},
    "pear": {"price": 3 , "stock":1}
}

for fruit, data in items.items():
    print(f"To buy all {fruit}'s stock, it will cost: {data['price']*data['stock']}")