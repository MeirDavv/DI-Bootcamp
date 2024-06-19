# 🌟 Exercise 1 – Random Sentence Generator
# Instructions
# Description: In this exercise we will create a random sentence generator. We will do this by asking the user how long the sentence should be and then printing the generated sentence.

# Hint : The generated sentences do not have to make sense.

# Download this word list

# Save it in your development directory.

# Create a function called get_words_from_file. This function should read the file’s content and return the words as a collection. What is the correct data type to store the words?

import os

def get_words_from_file() -> list[str]:
    file_location = '/sowpods.txt'
    dir_path = os.path.dirname(os.path.realpath(__file__))
    file_path = dir_path  + file_location
    with open (file_path, mode='r') as file:
        content = file.read()
        lines = content.split('\n')

    return lines

# test:
# print(get_words_from_file())

# Create another function called get_random_sentence which takes a single parameter called length. The length parameter will be used to determine how many words the sentence should have. The function should:
# use the words list to get your random words.
# the amount of words should be the value of the length parameter.

# Take the random words and create a sentence (using a python method), the sentence should be lower case.

import random

def get_random_sentence(length : int) -> str:
    lines = get_words_from_file()
    sentence =''
    for i in range(length):
        word = random.choice(lines)
        sentence +=  ' ' + word

    return sentence.lower()

# test:
# print(get_random_sentence(3))

# Create a function called main which will:

# Print a message explaining what the program does.

# Ask the user how long they want the sentence to be. Acceptable values are: an integer between 2 and 20. Validate your data and test your validation!
# If the user inputs incorrect data, print an error message and end the program.
# If the user inputs correct data, run your code.

def main():
    program_explanation = '''
The program opens a txt file which contains words
Then it converts them into a list of words 
and finally it generates a sentence with given amount of words, that are picked randomly from the list
'''
    print(program_explanation)
    length = input("How long you want the generated sentence to be? (Acceptable values are: an integer between 2 and 20) ")
    try:
        length = int(length)
    except ValueError:
        raise ValueError("Int must be provided")
    if length < 2 or length > 20:
        raise ValueError("Number must be between 2 and 20!")
    else:
        print(get_random_sentence(int(length)))

if __name__ == '__main__':
    main()


# 🌟 Exercise 2: Working With JSON
# Instructions
import json
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""


# Access the nested “salary” key from the JSON-string above.

data = json.loads(sampleJson)
salary = data['company']['employee']['payable']['salary']
print(salary)

# Add a key called “birth_date” to the JSON-string at the same level as the “name” key.

data['company']['employee']['birth_date'] = '01/01/2001'
print(data)

# Save the dictionary as JSON to a file.

with open ('sampleJson.json', mode='w') as file:
    json.dump(data, file)