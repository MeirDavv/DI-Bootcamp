import random

# from functools import reduce
# def change_lst(lst):
#     lst[0] = 10

# lst = [1,2,3]
# change_lst(lst.copy())
# print(lst)

# def check_arguments(*args):
#     print(f"These are the arguments {args[0]}")
# check_arguments(1, 2, 'hey')


# fruit = ["Apple", "Banana", "Pear", "Apricot", "Orange"]
# filtered_object = filter(lambda s : s[0]=='A', fruit)

# numbers = [1,2,3,4]
# reduced_object = reduce(lambda a,b : a+b , numbers)



people = ["Rick", "Morty", "Beth", "Jerry", "Snowball"]

filtered_people = list(filter(lambda s : len(s)<=4, people))
say_hello = list(map(lambda name : (f"Hello {name}!"), filtered_people))

print(say_hello)

generated = round(random.uniform(163, 243),1)
print(generated)


