import random

# Exercise 1 : What Are You Learning ?
# Instructions
# Write a function called display_message() that prints one sentence telling everyone what you are learning in this course.
# Call the function, and make sure the message displays correctly.

def display_message():
    print("I'm learning in the DI-bootcamp")

display_message()


# 🌟 Exercise 2: What’s Your Favorite Book ?
# Instructions
# Write a function called favorite_book() that accepts one parameter called title.


def favorite_book(title):
    print(f"One is my favorite books is {title}")
# The function should print a message, such as "One of my favorite books is <title>".
# For example: “One of my favorite books is Alice in Wonderland”
# Call the function, make sure to include a book title as an argument when calling the function.
favorite_book("Power of habit")


# 🌟 Exercise 3 : Some Geography
# Instructions
# Write a function called describe_city() that accepts the name of a city and its country as parameters.
# The function should print a simple sentence, such as "<city> is in <country>".
# For example “Reykjavik is in Iceland”
# Give the country parameter a default value.

def describe_city(city, country ='Israel'):
    print(f"{city} is in {country}.")

# Call your function.

describe_city('Tel Aviv')


# Exercise 4 : Random
# Instructions
# Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100. Use the random module.
# Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.

def same_as_random(number, min=1, max=100):
    print("Hi! Thanks for your number! We will compare it to a random generated one and let you know whether you succeeded")
    generated = random.randint(min,max)
    if(int(number) == generated):
        print("Success")
    else:
        print(f"Failed! Our number is {generated}, yours is {number}.")

number = int(input("Please provide a number: "))
same_as_random(number)


# 🌟 Exercise 5 : Let’s Create Some Personalized Shirts !
# Instructions
# Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
# The function should print a sentence summarizing the size of the shirt and the message printed on it, such as "The size of the shirt is <size> and the text is <text>"
# Call the function make_shirt().

def make_shirt(size, printed_message):
    print(f"The size of the shirt is {size}, and the printed message is {printed_message}")

# Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.

def make_shirt(size='large', printed_message='I love python'):
    print(f"The size of the shirt is {size}, and the printed message is {printed_message}")

# Call the function, in order to make a large shirt with the default message

make_shirt()

# Make medium shirt with the default message

make_shirt (size = 'medium')

# Make a shirt of any size with a different message.

make_shirt ('small', 'I love coding')

# Bonus: Call the function make_shirt() using keyword arguments.

args_list = ['large', 'I love everything']
make_shirt(*args_list)

args_dict = {
    'size' : 'medium',
    'printed_message' : 'I love myself'
}

make_shirt(**args_dict)


# 🌟 Exercise 6 : Magicians …
# Instructions
# Using this list of magician’s names

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# Create a function called show_magicians(), which prints the name of each magician in the list.

def show_magicians(magician_names):
    for name in magician_names:
        print(name)

# Write a function called make_great() that modifies the original list of magicians by adding the phrase "the Great" to each magician’s name.

def make_great(magician_names):
    for i in range(len(magician_names)):
        magician_names[i] = magician_names[i] + " the Great"

# Call the function make_great().

make_great(magician_names)

# Call the function show_magicians() to see that the list has actually been modified.

show_magicians(magician_names)