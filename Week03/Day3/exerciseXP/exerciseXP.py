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
    
    def __add__(self, other_obj : 'Currency') -> int:
        if (isinstance(other_obj, Currency)):
            if (self.currency != other_obj.currency):
                raise Exception(f"Cannot add between Currency type {self.currency} and {other_obj.currency}")
            else:
                return self.amount + other_obj.amount
        else:
        #In case it's int or float or any other type, do the standard addition.    
            return self.amount + other_obj
        
    def __iadd__(self, other_obj : 'Currency' ) -> 'Currency':
        if (isinstance(other_obj, Currency)):
            if (self.currency != other_obj.currency):
                raise Exception(f"TypeError: Cannot add between Currency type {self.currency} and {other_obj.currency}")
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