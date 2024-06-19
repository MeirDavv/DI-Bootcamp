# Exercise 1 : Upcoming Holiday
# Instructions
# Write a function that displays today’s date.
# The function should also display the amount of time left from now until the next upcoming holiday and print which holiday that is. (Example: the next holiday is in 30 days and 12:03:45 hours).
# Hint: Start by hardcoding the datetime and name of the upcoming holiday.

'''Done already '''

# Exercise 2 : How Old Are You On Jupiter?
# Instructions
# Given an age in seconds, calculate how old someone would be on:
# Earth: orbital period 365.25 Earth days, or 31557600 seconds
# Mercury: orbital period 0.2408467 Earth years
# Venus: orbital period 0.61519726 Earth years
# Mars: orbital period 1.8808158 Earth years
# Jupiter: orbital period 11.862615 Earth years
# Saturn: orbital period 29.447498 Earth years
# Uranus: orbital period 84.016846 Earth years
# Neptune: orbital period 164.79132 Earth years
# So if you are told someone is 1,000,000,000 seconds old, the function should output that they are 31.69 Earth-years old.

'''Done similar concept '''


# Exercise 3 : Regular Expression #1
# Instructions
# Hint: Use the RegEx (module)

# Use the regular expression module to extract numbers from a string.

# Example

# return_numbers('k5k3q2g5z6x9bn') 
# // Excepted output : 532569
import re

def return_numbers (string : str) -> str:
    numbers_lst = re.findall('[0-9]', string)
    numbers_str = ''.join(numbers_lst)
    return numbers_str

if __name__ == '__main__':
    print(return_numbers('k5k3q2g5z6x9bn'))


# Exercise 4 : Regular Expression #2
# Instructions
# Hint: Use the RegEx (module)

# Ask the user for their full name (example: “John Doe”), and check the validity of their answer:
# The name should contain only letters.
# The name should contain only one space.
# The first letter of each name should be upper cased.

import re

def name_checker(fullname : str) -> bool:
    # Check for invalid characters
    if re.search('[^a-zA-Z ]', fullname):
        return False
    
    # Check for exactly one space
    if not re.search(' {1}', fullname):
        return False
    
    if not re.match(r'^[A-Z][a-z]* [A-Z][a-z]*$', fullname):
        return False
    return True

if __name__ == '__main__':
    print(name_checker('John Doe'))
    print(name_checker('Joh&n Doe'))
    print(name_checker('John Doe '))
    print(name_checker('John DOe'))