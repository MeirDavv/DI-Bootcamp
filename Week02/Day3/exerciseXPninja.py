# Exercise 1 : Cars
# Instructions
# Copy the following string into your code: "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet".

cars = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

# Convert it into a list using Python (don’t do it by hand!).

cars_list = cars.split(', ')

# Print out a message saying how many manufacturers/companies are in the list.

print(f"There are {len(cars_list)} companies in the list")

# Print the list of manufacturers in reverse/descending order (Z-A).

print(sorted(cars_list, reverse=True))

# Using loops or list comprehension:
# Find out how many manufacturers’ names have the letter ‘o’ in them.

with_letter_o = len([company for company in cars_list if 'o' in company])

# Find out how many manufacturers’ names do not have the letter ‘i’ in them.

without_letter_i = len([company for company in cars_list if 'i' not in company])

print(with_letter_o, without_letter_i)

# Bonus: There are a few duplicates in this list:["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]

# Remove these programmatically. (Hint: you can use set to help you).

cars_dups = ["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
cars_set = set(cars_dups)

# Print out the companies without duplicates, in a comma-separated string with no line-breaks (eg. “Acura, Alfa Romeo, Aston Martin, …”), also print out a message saying how many companies are now in the list.

print("The cars are: " + ", ".join(list(cars_set)) + f" There are {len(cars_set)} in the list")

# Bonus: Print out the list of manufacturers in ascending order (A-Z), but reverse the letters of each manufacturer’s name.

ordered_cars_list = sorted(list(cars_set))
ordered_cars_list = [car[::-1] for car in ordered_cars_list]

print(ordered_cars_list)