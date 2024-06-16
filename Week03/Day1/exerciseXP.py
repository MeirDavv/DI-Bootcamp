# 🌟 Exercise 1: Cats
# Instructions
# Using this class

# Instantiate three Cat objects using the code provided above.
# Outside of the class, create a function that finds the oldest cat and returns the cat.
# Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

def oldest_cat (*args : Cat) -> Cat:
    oldest = max (args, key= lambda cat: cat.age)
    print(f"The oldest cat is {oldest.name}, and is {oldest.age} years old.")
    return oldest

def main():
    cat1 = Cat('Mitzi', 3)
    cat2 = Cat('Shimi', 4)
    cat3 = Cat('Lili', 2)
    oldest = oldest_cat(cat1,cat2,cat3)

if __name__ == '__main__':
    main()


# 🌟 Exercise 2 : Dogs
# Instructions
# Create a class called Dog.
class Dog:
# In this class, create an __init__ method that takes two parameters : name and height. This function instantiates two attributes, which values are the parameters.
    def __init__(self, name : str, height : int | float) -> None:
        self.name = name
        self.height = height
# Create a method called bark that prints the following string “<dog_name> goes woof!”.
    def bark(self) -> None:
        print(f"{self.name} goes woof!")
# Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
    def jump(self) -> None:
        print(f"{self.name} jumps {self.height * 2} cm high!")
# Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.
# Print the details of his dog (ie. name and height) and call the methods bark and jump.
# Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
# Print the details of her dog (ie. name and height) and call the methods bark and jump.
# Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.

def main():
    davids_dog = Dog(name="Rex", height= 50)
    print(f"David's dog's name is {davids_dog.name}, it is {davids_dog.height} cm high.")
    davids_dog.bark()
    davids_dog.jump()

    sarahs_dog = Dog(name="Teacup", height=20)
    print(f"Sarah's dog's name is {sarahs_dog.name}, it is {sarahs_dog.height} cm high.")
    sarahs_dog.bark()
    sarahs_dog.jump()

    if sarahs_dog.height > davids_dog.height:
        print(f"{sarahs_dog.name} is bigger")
    elif sarahs_dog.height < davids_dog.height:
        print(f"{davids_dog.name} is bigger")
    else:
        print(f"Both dogs ({davids_dog.name}, {sarahs_dog.name}) are of same height!")

if __name__ == '__main__':
    main()


# 🌟 Exercise 3 : Who’s The Song Producer?
# Instructions
# Define a class called Song, it will show the lyrics of a song.
# Its __init__() method should have two arguments: self and lyrics (a list).
# Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.
# Create an object, for example:

# stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])


# Then, call the sing_me_a_song method. The output should be:

# There’s a lady who's sure
# all that glitters is gold
# and she’s buying a stairway to heaven

class Song:
    def __init__(self, lyrics : list) -> None:
        self.lyrics = lyrics
    
    def sing_me_a_song(self) -> None:
        for line in self.lyrics:
            print(line)

def main():
    stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
    stairway.sing_me_a_song()

if __name__ == '__main__':
    main()


# Exercise 4 : Afternoon At The Zoo
# Instructions
# Create a class called Zoo.
# In this class create a method __init__ that takes one parameter: zoo_name.
# It instantiates two attributes: animals (an empty list) and name (name of the zoo).
# Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn’t already in the list.
# Create a method called get_animals that prints all the animals of the zoo.
# Create a method called sell_animal that takes one parameter animal_sold. This method removes the animal from the list and of course the animal needs to exist in the list.
# Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.
# Example

# { 
#     1: "Ape",
#     2: ["Baboon", "Bear"],
#     3: ['Cat', 'Cougar'],
#     4: ['Eel', 'Emu']
# }


# Create a method called get_groups that prints the animal/animals inside each group.

# Create an object called ramat_gan_safari and call all the methods.
# Tip: The zookeeper is the one who will use this class.
# Example
# Which animal should we add to the zoo --> Giraffe
# x.add_animal(Giraffe)

class Zoo:
    def __init__(self,zoo_name : str) -> None:
        self.name = zoo_name
        self.animals = []
    
    def add_animal(self, new_animal: str) -> None:
        if new_animal not in self.animals:
            self.animals.append(new_animal)
    
    def get_animals(self) -> None:
        print("Here are all the animals:")
        for animal in self.animals:
            print(animal)

    def sell_animal(self, animal_sold : str) -> None:
        if (animal_sold in self.animals):
            self.animals.remove(animal_sold)

    def sort_animals(self) -> None:
        sorted_animals = sorted(self.animals)
        group_animals = {}
        for animal in sorted_animals:
            letter = animal[0]
            if letter in group_animals:
                group_animals[letter].append(animal)
            else:
                group_animals[letter] = [animal]

        group_animals = list(group_animals.values())
        self.animals = group_animals


    def get_groups(self) -> None:
        print("I will now print each group of animals in each line: ")
        for animal_group in self.animals:
            print (animal_group)


def main():
    zoo_name = input("Hey, welcome! What's the Zoo name?")
    ramat_gan_safari = Zoo(zoo_name=zoo_name)
    animal = input("Which animal should we add to the zoo ('s' to stop) --> ")
    while (animal != 's'):
        ramat_gan_safari.add_animal(animal)
        animal = input("Which animal should we add to the zoo ('s' to stop) --> ")


    ramat_gan_safari.get_animals()
    sell = input("Which animal would you like to sell? --> ")
    ramat_gan_safari.sell_animal(sell)
    ramat_gan_safari.get_animals()
    ramat_gan_safari.sort_animals()
    ramat_gan_safari.get_groups()
    

if __name__ == '__main__':
    main()