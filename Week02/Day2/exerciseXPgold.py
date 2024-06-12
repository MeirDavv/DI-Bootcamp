import random

# # Exercise 1: Concatenate Lists
# # Instructions
# # Write code that concatenates two lists together without using the + sign.

# list_a = [1,2,3]
# list_b = [4,5]

# list_c = list_a

# for item in list_b:
#     list_c.append (item)

# print(list_c)

# # Exercise 2: Range Of Numbers
# # Instructions
# # Create a loop that goes from 1500 to 2500 and prints all multiples of 5 and 7.

# for i in range(1500, 2501):
#     if(i%5 == 0 or i%7 == 0):
#         print(i)

# # Exercise 3: Check The Index
# # Instructions
# # Using this variable

# names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

# # Ask a user for their name, if their name is in the names list print out the index of the first occurence of the name.

# user_name = input("What's your name? ")
# if user_name in names:
#     print (names.index(user_name))
# # Example: if input is 'Cortana' we should be printing the index 1


# # Exercise 4: Greatest Number
# # Instructions
# # Ask the user for 3 numbers and print the greatest number.
# #     Test Data
# #     Input the 1st number: 25
# #     Input the 2nd number: 78
# #     Input the 3rd number: 87

# #     The greatest number is: 87

# numbers = []
# print("Please provide us 3 numbers below:")
# for i in range(3):
#     number = int(input("Please provide number {i}. "))
#     numbers.append(number)

# print(f"The greatest number is {max(numbers)}.")


# # Exercise 5: The Alphabet
# # Instructions
# # Create a string of all the letters in the alphabet
# all_letters = 'abcdefghijklmnopqrstuvwxyz'
# vowel = 'aeiou'
# for letter in all_letters:
#     print(letter,end=' ')
#     if letter in vowel:
#         print("is a vowel")
#     else:
#         print("is a consonant")
# # Loop over each letter and print a message that contains the letter and whether its a vowel or a consonant.


# # Exercise 6: Words And Letters
# # Instructions
# # Ask a user for 7 words, store them in a list named words.

# words = []
# for i in range(7):
#     word = input("Please enter a word: ")
#     words.append(word)

# # Ask the user for a single character, store it in a variable called letter.

# letter = input("Please provide a single character: ")
# # Loop through the words list and print the index of the first appearence of the letter variable in each word of the list.

# for word in words:
#     if letter in word:
#         print(f"in word {word}, the letter {letter} appears in index {word.index(letter)} ")
#     else:
#         print("The letter doesn't exist in that word. ")
# # If the letter doesn’t exist in one of the words, print a friendly message with the word and the letter.


# # Exercise 7: Min, Max, Sum
# # Instructions
# # Create a list of numbers from one to one million and then use min() and max() to make sure your list actually starts at one and ends at one million. Use the sum() function to see how quickly Python can add a million numbers.

# numbers = list(range(1,1000001))
# print(min(numbers))
# print(max(numbers))
# print(sum(numbers))


# # Exercise 8 : List And Tuple
# # Instructions
# # Write a program which accepts a sequence of comma-separated numbers. Generate a list and a tuple which contain every number.
# # Suppose the following input is supplied to the program: 34,67,55,33,12,98

# # Then, the output should be:

# # ['34', '67', '55', '33', '12', '98']
# # ('34', '67', '55', '33', '12', '98')

# numbers = input("Please provide a sequence of numbers seperated by ',' ")
# lst = numbers.split(',')
# tup = tuple(lst)
# print(lst, tup)


# Exercise 9 : Random Number
# Instructions
# Ask the user to input a number from 1 to 9 (including).
number = int(input("Please input a number between 1 and 9"))
# Get a random number between 1 and 9. Hint: random module.
rand = random.randint(1,9)
# If the user guesses the correct number print a message that says Winner.
if (number == rand):
    print("Winner!")
# If the user guesses the wrong number print a message that says better luck next time.
else:
    print("Better luck next time!")

