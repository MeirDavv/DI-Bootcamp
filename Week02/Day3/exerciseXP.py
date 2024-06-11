# #🌟 Exercise 1 : Convert Lists Into Dictionaries

# # Convert the two following lists, into dictionaries.
# # Hint: Use the zip method
# # keys = ['Ten', 'Twenty', 'Thirty']
# # values = [10, 20, 30]
# # Expected output:
# # {'Ten': 10, 'Twenty': 20, 'Thirty': 30}


# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]

# dictionary = dict(zip(keys,values))
# print(dictionary)

# #🌟 Exercise 2 : Cinemax #2

# # A movie theater charges different ticket prices depending on a person’s age.
# # if a person is under the age of 3, the ticket is free.
# # if they are between 3 and 12, the ticket is $10.
# # if they are over the age of 12, the ticket is $15.

# # Given the following object:

# # family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}


# # How much does each family member have to pay ?

# # Print out the family’s total cost for the movies.
# # Bonus: Ask the user to input the names and ages instead of using the provided family variable (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).


# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}


# def tickets_price(family):
#     total_cost = 0

#     for name,age in family.items():
#         age = int(age)
#         if(age < 3):
#             price = 0
#         elif(age <= 12):
#             price = 10
#         else:
#             price = 15
#         print(F"Ticket cost for {name} is: {price}$" )
#         total_cost += price

#     print(f"The total cost is {total_cost}$")

# tickets_price(family)

# #Bonus: 

# family = {}
# name = input ("Please provide a family member's name:  ('q' to stop): ")
# while(name!='q'):
#     age = int(input("What's his/her age? "))
#     family[name] = age
#     name = input ("Please provide a family member's name:  ('q' to stop): ")
# tickets_price(family)


# #🌟 Exercise 3: Zara
# # Here is some information about a brand.
# # name: Zara 
# # creation_date: 1975 
# # creator_name: Amancio Ortega Gaona 
# # type_of_clothes: men, women, children, home 
# # international_competitors: Gap, H&M, Benetton 
# # number_stores: 7000 
# # major_color: 
# #     France: blue, 
# #     Spain: red, 
# #     US: pink, green


# # 2. Create a dictionary called brand which value is the information from part one (turn the info into keys and values).
# # The values type_of_clothes and international_competitors should be a list. The value of major_color should be a dictionary.

# keys = ['name', 'creation_date', 'creation_name', 'type_of_clothes', 'international_competitors', 'number_stores', 'major_color']
# values = ['Zara', 1975, 'Amancio Ortega Gaona', ['men', 'women', 'children', 'home'], ['Gap', 'H&M', 'Benetton'], 7000, {'France':'blue', 'Spain':'Red', 'US': ['pink', 'green']}]
# brand = dict(zip(keys,values))
# print(brand)

# # 3. Change the number of stores to 2.

# brand['number_stores'] = 2

# # 4. Print a sentence that explains who Zaras clients are.

# print(f"Zara clients are from {', '.join(list(brand['major_color'].keys()))} and they buy {", ".join(brand['type_of_clothes'])} products.")

# # 5. Add a key called country_creation with a value of Spain.

# brand['country_creation'] = 'Spain'

# # 6. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.

# if 'international_competitors' in brand.keys():
#     brand['international_competitors'].append('Desigual')

# # 7. Delete the information about the date of creation.

# del(brand['creation_date'])

# # 8. Print the last international competitor.

# print(brand['international_competitors'][-1])

# # 9. Print the major clothes colors in the US.

# print(" ".join(brand['major_color']['US']))

# # 10. Print the amount of key value pairs (ie. length of the dictionary).

# print(len(brand))

# # 11. Print the keys of the dictionary.

# print(f"Dictionary keys: {', '.join(brand.keys())}")

# # 12. Create another dictionary called more_on_zara with the following details:

# # creation_date: 1975 
# # number_stores: 10 000

# more_on_zara = {
#     'creation_date' : 1975, 
#     'number_stores': 10000}

# # 13. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.

# brand.update(more_on_zara)

# # 14. Print the value of the key number_stores. What just happened ?

# print(brand['number_stores'])

# #What happened is that after we concatenated another dictionary to the original one, it override the value of 'number_stores' with new value


# 🌟Exercise 4 : Disney Characters

# Use this list :

users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
# Analyse these results :

# #1/

# >>> print(disney_users_A)
# {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}

# #2/

# >>> print(disney_users_B)
# {0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}

# #3/ 

# >>> print(disney_users_C)
# {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}


# Use a for loop to recreate the 1st result. Tip : don’t hardcode the numbers.

dict_1 = {}

for i,key in enumerate(users):
    dict_1[key] = i

# Use a for loop to recreate the 2nd result. Tip : don’t hardcode the numbers.

dict_2 = {}

for i,key in enumerate(users):
    dict_2[i] = key

print(dict_2)

# Use a method to recreate the 3rd result. Hint: The 3rd result is sorted alphabetically.

sorted_users = sorted(users)
dict_3 = {}

for i,key in enumerate(sorted_users):
    dict_3[key] = i


# Only recreate the 1st result for:
# The characters, which names contain the letter “i”.

dict_4 = {}

for i,key in enumerate(users):
    if ('i' in key):
        dict_4[key] = i

print(dict_4)
# The characters, which names start with the letter “m” or “p”.

dict_5 = {}

for i,key in enumerate(users):
    if (key[0].lower() == 'm' or key[0].lower() == 'p'):
        dict_5[key] = i

print(dict_5)