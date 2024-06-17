# 🌟 Exercise 1 : Pets
# Instructions
# Using this code:

class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'


# Create another cat breed named Siamese which inherits from the Cat class.

class Siamese (Cat):
    pass

# Create a list called all_cats, which holds three cat instances : one Bengal, one Chartreux and one Siamese.

cat1 = Bengal('Mitzi', 3)
cat2 = Chartreux('Jazz', 4)
cat3 = Siamese('Caty', 5)

all_cats = [cat1, cat2 , cat3]

# Those three cats are Sara’s pets. Create a variable called sara_pets which value is an instance of the Pet class, and pass the variable all_cats to the new instance.

sara_pets = Pets(all_cats)

# Take all the cats for a walk, use the walk method.

sara_pets.walk()


# 🌟 Exercise 2 : Dogs
# Instructions
# Create a class called Dog with the following attributes name, age, weight.
# Implement the following methods in the Dog class:
# bark: returns a string which states: “<dog_name> is barking”.
# run_speed: returns the dogs running speed (weight/age*10).
# fight : takes a parameter which value is another Dog instance, called other_dog. This method returns a string stating which dog won the fight. The winner should be the dog with the higher run_speed x weight.

# Create 3 dogs and run them through your class.


class Dog:
    def __init__ (self, name : str, age : int | float, weight : int | float) -> None:
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self) -> str:
        return f'{self.name} is barking'
    
    def run_speed(self) -> float:
        return (self.weight / self.age * 10)
    
    def fight (self, other_dog: 'Dog') -> str:
        dog1_strength = self.run_speed() * self.weight
        dog2_strength = other_dog.run_speed() * other_dog.weight

        winner = ''

        if(dog1_strength > dog2_strength):
            winner = f"{self.name} won! "
        elif(dog1_strength < dog2_strength):
            winner = f"{other_dog.name} won! "
        else:
            winner = "Draw! Nobody won."

        return winner
    
dog1 = Dog('Jacky', 12, 20)
dog2 = Dog('Tommy', 14, 20)
dog3 = Dog('Bobby', 20, 20)

print(dog1.bark())
print(dog2.run_speed())
print(dog2.fight(dog3))


# 🌟 Exercise 3 : Dogs Domesticated
# Instructions
# Create a new python file and import your Dog class from the previous exercise.
'''Done in exerciseXP-pt2.py'''
# In the new python file, create a class named PetDog that inherits from Dog.
# Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.
# Add the following methods:
# train: prints the output of bark and switches the trained boolean to True

# play: takes a parameter which value is a few names of other Dog instances (use *args). The method should print the following string: “dog_names all play together”.

# do_a_trick: If the dog is trained the method should print one of the following sentences at random:
# “dog_name does a barrel roll”.
# “dog_name stands on his back legs”.
# “dog_name shakes your hand”.
# “dog_name plays dead”.