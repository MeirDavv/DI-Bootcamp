# Instructions : Old MacDonald’s Farm
# Take a look at the following code and output:
# File: market.py

# macdonald = Farm("McDonald")
# macdonald.add_animal('cow',5)
# macdonald.add_animal('sheep')
# macdonald.add_animal('sheep')
# macdonald.add_animal('goat', 12)
# print(macdonald.get_info())
# Output

# McDonald's farm

# cow : 5
# sheep : 2
# goat : 12

#     E-I-E-I-0!


# Create the code that is needed to receive the result provided above. Below are a few questions to assist you with your code:

# Create a class called Farm. How should it be implemented?
# Does the Farm class need an __init__ method? If so, what parameters should it take?
# How many methods does the Farm class need?
# Do you notice anything interesting about the way we are calling the add_animal method? What parameters should this function have? How many…?
# Test your code and make sure you get the same results as the example above.
# Bonus: nicely line the text in columns as seen in the example above. Use string formatting.

class Farm:
    def __init__(self, farm_name: str) -> None:
        self.farm_name = farm_name
        self.animals = {}

    def add_animal(self, animal_name : str, amount : int = 1) -> None:
        if animal_name in self.animals:
            self.animals[animal_name] += amount
        else:
            self.animals[animal_name] = amount

    def get_info(self) -> str:
        info = f"{self.farm_name}'s farm\n"
        info += '\n'
        for key,val in self.animals.items():
            info += f"{key} : {val}\n"
        info += '\n'
        info += "E-I-E-I-O!"
        return info
    
    def get_animal_types(self) -> list:
        return sorted(self.animals.keys())
    
    def get_short_info(self) -> str:
        info = f"{self.farm_name}'s farm has"
        animal_types = self.get_animal_types()
        for animal in animal_types:
            index = animal_types.index(animal) #index of animal in the animal_types list
            if index == len(animal_types) - 1: #last animal
                info += f" and {animal}s."
            elif index == 0: #first animal
                info += f" {animal}s"
            else: #animals in the middle
                info += f", {animal}s"

        return info
            



def main():
    macdonald = Farm("McDonald")
    macdonald.add_animal('cow',5)
    macdonald.add_animal('sheep')
    macdonald.add_animal('sheep')
    macdonald.add_animal('goat', 12)
    print(macdonald.get_info())

    print(macdonald.get_animal_types())

    print(macdonald.get_short_info())

if __name__ == '__main__':
    main()