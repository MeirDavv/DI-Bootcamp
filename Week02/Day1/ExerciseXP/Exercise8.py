'''
Write code that asks the user for their name and determines whether or not you have the same name, print out a funny message based on the outcome.
'''
my_name = "Meir"
user_name = input("What's your name?")

if(my_name.lower() == user_name.lower()):
    print("We have the same name! How funny!! (not funny)")
else:
    print("Nice to meet ya buddy!")