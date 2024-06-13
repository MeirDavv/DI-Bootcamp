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

kwargs_dict = {
    'size' : 'medium',
    'printed_message' : 'I love myself'
}

make_shirt(kwargs_dict)


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


# 🌟 Exercise 7 : Temperature Advice
# Instructions
# Create a function called get_random_temp().
# This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
# Test your function to make sure it generates expected results.

def get_random_temp():
    min = -10
    max = 40
    generated = random.randint(min, max)
    return generated

print(get_random_temp())

# Create a function called main().
# Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
# Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”

# Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
# below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
# between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
# between 16 and 23
# between 24 and 32
# between 32 and 40

def main():
    generated_temp = get_random_temp()
    print(f"The temperature right now is {generated_temp} degrees Celcius")

    if(generated_temp < 0):
        print("Brrr, that's freezing today")
    elif(generated_temp < 16):
        print("Quite Chilly! Don't forget your coat")
    elif(generated_temp < 24):
        print("A bit cold out there!")
    elif(generated_temp < 32):
        print("pretty warm outside. A shirt is enough")
    elif(generated_temp < 40):
        print("It's really  HOT outside!")

# Change the get_random_temp() function:
# Add a parameter to the function, named ‘season’.
# Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits based on the season, eg. if season is ‘winter’, temperatures should only fall between -10 and 16.

def get_random_temp(season):
    seasons_dict = {
        'winter' : (-10,16),
        'autumn' : (16,24),
        'spring' : (24,32),
        'summer' : (32,40)
     }
    min,max = seasons_dict[season]
    generated = random.randint(min, max)
    return generated

# Now that we’ve changed get_random_temp(), let’s change the main() function:
# Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly. Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
# Use the season as an argument when calling get_random_temp().

def main():
    season = input("Please type a season (Choose: 'winter', 'summer', 'spring', 'autumn'): ")
    generated_temp = get_random_temp(season)
    print(f"The temperature right now is {generated_temp} degrees Celcius")

    if(generated_temp < 0):
        print("Brrr, that's freezing today")
    elif(generated_temp < 16):
        print("Quite Chilly! Don't forget your coat")
    elif(generated_temp < 24):
        print("A bit cold out there!")
    elif(generated_temp < 32):
        print("pretty warm outside. A shirt is enough")
    elif(generated_temp < 40):
        print("It's really  HOT outside!")

main()
# Bonus: Give the temperature as a floating-point number instead of an integer.

def get_random_temp(season):
    seasons_dict = {
        'winter' : (-10,16),
        'autumn' : (16,24),
        'spring' : (24,32),
        'summer' : (32,40)
     }
    min,max = seasons_dict[season]
    generated = round(random.uniform(min, max),1)
    print(generated)
    return generated

main()

# Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December). Determine the season according to the month.

def get_season():
    month = int(input("Please provide a number 1-12 which represents a month"))
    if month in [3,4,5]:
        return "spring"
    elif month in [6,7,8]:
        return "summer"
    elif month in [9,10,11]:
        return "autumn"
    return "winter"

def main():
    season = get_season()
    print(f"The season is {season}")
    generated_temp = get_random_temp(season)
    print(f"The temperature right now is {generated_temp} degrees Celcius")

    if(generated_temp < 0):
        print("Brrr, that's freezing today")
    elif(generated_temp < 16):
        print("Quite Chilly! Don't forget your coat")
    elif(generated_temp < 24):
        print("A bit cold out there!")
    elif(generated_temp < 32):
        print("pretty warm outside. A shirt is enough")
    elif(generated_temp < 40):
        print("It's really  HOT outside!")

main()

# 🌟 Exercise 8 : Star Wars Quiz
# Instructions
# This project allows users to take a quiz to test their Star Wars knowledge.
# The number of correct/incorrect answers are tracked and the user receives different messages depending on how well they did on the quiz.

# Here is an array of dictionaries, containing those questions and answers

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]


# Create a function that asks the questions to the user, and check his answers. Track the number of correct, incorrect answers. Create a list of wrong_answers
# Create a function that informs the user of his number of correct/incorrect answers.
# Bonus : display to the user the questions he answered wrong, his answer, and the correct answer.
# If he had more then 3 wrong answers, ask him to play again.


def quiz (data):
    print("Welcome to the quiz! Let's start with the questions: ")
    correct_count = 0
    incorrect_count = 0
    wrong_answers = []
    for item in data:
        user_answer = input(item["question"] + ": ")

        if (user_answer == item["answer"]):
            correct_count += 1
        else:
            incorrect_count += 1
            wrong_answers.append({"question" : item["question"], "answer": user_answer})

    print_results(correct_count, incorrect_count, data, wrong_answers)


def print_results(correct_count, incorrect_count, data, wrong_answers):
    print(f"You got {correct_count} correct answers. And {incorrect_count} incorrect answers.")
    print("Let's go over the incorrect ones")
    index = 0
    for item in data:
        if(item["question"] == wrong_answers[index]["question"]):
            print(f"For question- {item["question"]}")
            print(f"Your answer was- {wrong_answers[index]["answer"]}")
            print(f"While the correct one is- {item["answer"]}")
            print("--")

            index+=1
        
        if(index > 3):
            print("More than 3 answers were wrong. Play again! ")

quiz(data)

