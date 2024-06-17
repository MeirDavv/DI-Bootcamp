# Exercise 1: Bank Account
# Instructions
# Part I:

# Create a class called BankAccount that contains the following attributes and methods:
# balance - (an attribute)
# __init__ : initialize the attribute
# deposit : - (a method) accepts a positive int and adds to the balance, raise an Exception if the int is not positive.
# withdraw : - (a method) accepts a positive int and deducts from the balance, raise an Exception if not positive

class BankAccount:
    def __init__(self, balance : int) -> None:
        self.balance = balance

    def deposit(self, amount : int) -> None:
        if not amount > 0:
            raise Exception ("Amount must be a positive int")
        else:
            self.balance += amount

    def withdraw(self, amount : int) -> None:
        if not amount > 0:
            raise Exception ("Amount must be a positive int")
        else:
            self.balance -= amount


# Part II : Minimum balance account

# Create a MinimumBalanceAccount that inherits from BankAccount.

class MinimumBalanceAccount(BankAccount):

# Extend the __init__ method and accept a parameter called minimum_balance with a default value of 0.

    def __init__(self, balance : int, minimum_balance : int=0) -> None:
        super().__init__(balance)
        self.minimum_balance = minimum_balance

# Override the withdraw method so it only allows the user to withdraw money if the balance remains higher than the minimum_balance, raise an Exception if not.

    def withdraw(self, amount : int) -> None:
        if (self.balance - amount > self.minimum_balance):
            self.balance -= amount 
        else:
            raise Exception ("Can't withdraw! Minimum balance is not enough...")

# Part III: Expand the bank account class

# Add the following attributes to the BankAccount class:
# username
# password
# authenticated (False by default)

# Create a method called authenticate. This method should accept 2 strings : a username and a password. If the username and password match the attributes username and password the method should set the authenticated boolean to True.

# Edit withdraw and deposit to only work if authenticated is set to True, if someone tries an action without being authenticated raise an Exception

class BankAccount:
    def __init__(self, balance : int, username : str, password : str, authenticated : bool = False) -> None:
        self.balance = balance
        self.username = username
        self.password = password
        self.authenticated = authenticated

    def deposit(self, amount : int) -> None:
        if self.authenticated:
            if not amount > 0:
                raise Exception ("Amount must be a positive int.")
            else:
                self.balance += amount
        else:
            raise Exception("You must authenticate first!")

    def withdraw(self, amount : int) -> None:
        if self.authenticated:    
            if not amount > 0:
                raise Exception ("Amount must be a positive int.")
            else:
                self.balance -= amount
        else:
            raise Exception("You must authenticate first!")


    def authenticate (self, username : str, password : str) -> None:
        if self.username == username and self.password == password:
            self.authenticated = True

# Part IV: BONUS Create an ATM class

class ATM:

# __init__:
# Accepts the following parameters: account_list and try_limit.

# Validates that account_list contains a list of BankAccount or MinimumBalanceAccount instances.
# Hint: isinstance()

# Validates that try_limit is a positive number, if you get an invalid input raise an Exception, then move along and set try_limit to 2.
# Hint: Check out this tutorial

# Sets attribute current_tries = 0

# Call the method show_main_menu (see below)

    def __init__(account_list : list, try_limit : int) -> None:
        

# Methods:
# show_main_menu:
# This method will start a while loop to display a menu letting a user select:
# Log in : Will ask for the users username and password and call the log_in method with the username and password (see below).
# Exit.

# log_in:
# Accepts a username and a password.

# Checks the username and the password against all accounts in account_list.
# If there is a match (ie. use the authenticate method), call the method show_account_menu.
# If there is no match with any existing accounts, increment the current tries by 1. Continue asking the user for a username and a password, until the limit is reached (ie. try_limit attribute). Once reached display a message saying they reached max tries and shutdown the program.

# show_account_menu:
# Accepts an instance of BankAccount or MinimumBalanceAccount.
# The method will start a loop giving the user the option to deposit, withdraw or exit.
