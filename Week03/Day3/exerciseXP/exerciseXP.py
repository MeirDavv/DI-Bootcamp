from typing import Union,Self
# 🌟 Exercise 1: Currencies
# Instructions
class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    #Your code starts HERE
    def __str__(self)-> str:
        end_of_word =''
        if self.amount > 1:
            end_of_word = 's'
        return f"{self.amount} {self.currency}{end_of_word}"
    
    def __int__(self) -> int:
        return self.amount
    
    def __repr__(self) -> str:
        return self.__str__()
    
    def __add__(self, other_obj : Union['Currency', int]) -> int:
        if (isinstance(other_obj, Currency)):
            if (self.currency != other_obj.currency):
                raise TypeError(f"Cannot add between Currency type {self.currency} and {other_obj.currency}")
            else:
                return self.amount + other_obj.amount
        else:
        #In case it's int or float or any other type, do the standard addition.    
            return self.amount + other_obj
        
    def __iadd__(self, other_obj : Union['Currency', int] ) -> Self:
        if (isinstance(other_obj, Currency)):
            if (self.currency != other_obj.currency):
                raise TypeError(f"Cannot add between Currency type {self.currency} and {other_obj.currency}")
            else:
                self.amount += other_obj.amount
        else:
        #In case it's int or float or any other type, do the standard addition.    
            self.amount += other_obj
        
        return self



# Using the code above, implement the relevant methods and dunder methods which will output the results below.
# Hint : When adding 2 currencies which don’t share the same label you should raise an error.
if __name__ == '__main__':
    c1 = Currency('dollar', 5)
    c2 = Currency('dollar', 10)
    c3 = Currency('shekel', 1)
    c4 = Currency('shekel', 10)

    # >>> str(c1)
    # '5 dollars'
    print(str(c1))

    # >>> int(c1)
    # 5
    print(int(c1))

    # >>> repr(c1)
    # '5 dollars'
    print(repr(c1))

    # >>> c1 + 5
    # 10
    print(c1 + 5)

    # >>> c1 + c2
    # 15
    print(c1 + c2)

    # >>> c1 
    # 5 dollars
    print(c1)

    # >>> c1 += 5
    # >>> c1
    # 10 dollars
    c1 += 5
    print(c1)

    # >>> c1 += c2
    # >>> c1
    # 20 dollars
    c1 += c2
    print(c1)

    # >>> c1 + c3
    # TypeError: Cannot add between Currency type <dollar> and <shekel>
    print (c1 + c3)


    # 🌟 Exercise 2: Import
    # Instructions
    # In a file named func.py create a function that adds 2 number, and prints the result
    # In a file namedexercise_one.py import and the function
    # Hint: You can use the the following syntaxes:

    # import module_name 

    # OR 

    # from module_name import function_name 

    # OR 

    # from module_name import function_name as fn 

    # OR

    # import module_name as mn


# 🌟 Exercise 3: String Module
# Instructions
# Generate random String of length 5

import string
import random

def random_str(length : int) -> str:
    letters = string.ascii_letters
    return ''.join([random.choice(letters) for i in range(length)])

if __name__ == '__main__':
    generated = random_str(5)
    print(generated)


# Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
# Hint: use the string module


# 🌟 Exercise 4 : Current Date
# Instructions
# Create a function that displays the current date.

from datetime import date

def current_date():
    today = date.today()
    print(today)

if __name__ == '__main__':
    current_date()

# Hint : Use the datetime module.

# Exercise 5 : Amount Of Time Left Until January 1st
# Instructions
# Create a function that displays the amount of time left from now until January 1st.

import datetime

def till_Jan_1() -> None:
    now = datetime.datetime.now()

    year = now.year + 1
    month = 1
    day = 1
    till = datetime.datetime(year,month,day)

    delta = till - now

    total_seconds = delta.seconds
    hours, remainder = divmod(total_seconds , 3600)
    minutes, seconds = divmod(remainder , 60 )
    hours_part = f"{int(hours):02}:{int(minutes):02}:{int(seconds):02}"

    print(f"The 1st of January is in {delta.days} days and {hours_part} hours")

if __name__ == '__main__':
    till_Jan_1()

# (Example: the 1st of January is in 10 days and 10:34:01hours).


# Exercise 6 : Birthday And Minutes
# Instructions
# Create a function that accepts a birthdate as an argument (in the format of your choice), then displays a message stating how many minutes the user lived in his life.

import datetime

def minutes_lived(birthdate : str) -> None:
    #birthdate format: DD/MM/YYYY
    now = datetime.datetime.now()
    birthdate_dt = datetime.datetime.strptime(birthdate, '%d/%m/%Y')

    delta = now - birthdate_dt

    minutes = int(delta.total_seconds()) // 60

    print(f"You have lived {minutes} minutes so far")

if __name__ == '__main__':
    minutes_lived('01/01/2001')


# Exercise 7 : Faker Module
# Instructions
# Install the faker module, and take a look at the documentation and learn how to properly implement faker in your code.
# Create an empty list called users. Tip: It should be a list of dictionaries.
# Create a function that adds new dictionaries to the users list. Each user has the following keys: name, adress, langage_code. Use faker to populate them with fake data.

from faker import Faker

def fake_user (users : list[dict], amount : int) -> None:
    fake = Faker()
    for i in range(amount):
        name = fake.name()
        address = fake.address()
        language_code = fake.locale()
        user = {'name' : name, 'address' : address, 'language_code' : language_code}
        users.append(user)
    

if __name__ == '__main__':

    users = [{}]
    amount = 4
    fake_user(users, amount)
    print(users)

