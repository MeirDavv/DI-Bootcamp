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

if __name__ == '__main__':
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

if __name__ == '__main__':    
    dog1 = Dog('Jacky', 12, 20)
    dog2 = Dog('Tommy', 14, 20)
    dog3 = Dog('Bobby', 20, 20)

    print(dog1.bark())
    print(dog2.run_speed())
    print(dog2.fight(dog3))


# 🌟 Exercise 3 : Dogs Domesticated
# Instructions
# Create a new python file and import your Dog class from the previous exercise.
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
'''
Done in exerciseXP-pt2.py
'''

# Exercise 4 : Family
# Instructions
# Create a class called Family and implement the following attributes:

# members: list of dictionaries
# last_name : (string)

# Implement the following methods:

# born: adds a child to the members list (use **kwargs), don’t forget to print a message congratulating the family.
# is_18: takes the name of a family member as a parameter and returns True if they are over 18 and False if not.
# family_presentation: a method that prints the family’s last name and all the members’ details.

# Create an instance of the Family class, with the last name of your choice, and the below members. Then call all the methods you created in Point 2.

#     [
#         {'name':'Michael','age':35,'gender':'Male','is_child':False},
#         {'name':'Sarah','age':32,'gender':'Female','is_child':False}
#     ]

class Family:
    def __init__(self, members : list[dict], last_name : str) -> None:
        self.members = members
        self.last_name = last_name

    def born(self, **member : dict) -> None:
        self.members.append(member)
        print("Congratulations for the newborn baby! :))")

    def is_18 (self, name : str) -> bool:
        for member in self.members:
            if member['name'] == name:
                if member['age'] > 18:
                    return True
                return False

        return ("Not exist!")
            
    def family_presentation(self):
        print(f"Welcome to {self.last_name} family!")
        for member in self.members:
            print (member)
            

if __name__ == '__main__':
    members = [
        {'name':'Michael','age':35,'gender':'Male','is_child':False},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False}
    ]
    last_name = "Cohen"
    family = Family(members,last_name)
    newborn = {'name':'Lia','age':0,'gender':'Female','is_child':True}
    family.born(**newborn)
    print(family.is_18('Moni'))
    print(family.is_18('Michael'))
    family.family_presentation()


# Exercise 5 : TheIncredibles Family
# Instructions
# Create a class called TheIncredibles. This class should inherit from the Family class:
# This is no random family they are an incredible family, therefore the members attributes, will be a list of dictionaries containing the additional keys : power and incredible_name. (See Point 4)

class TheIncredibles(Family):

# Add a method called use_power, this method should print the power of a member only if they are over 18 years old. If not raise an exception (look up exceptions) which stated they are not over 18 years old.

    def use_power(self, member_name):
        for member in self.members:
            if(member['name'] == member_name):
                break
        
        age = member['age']
        if age > 18:
            power = member['power']
            print(f"Power of member {member_name} is {power}")

        else:
            raise Exception(f"{member_name} is not over 18 years old!")


# Add a method called incredible_presentation which :

# Print a sentence like “*Here is our powerful family **”
# Prints the family’s last name and all the members’ details (ie. use the super() function, to call the family_presentation method)

    def incredible_presentation(self):
        print("Here is our powerful family")
        super().family_presentation()


# Create an instance of the Incredibles class, with the “Incredibles” last name, and the below members.

if __name__ == '__main__':
    last_name = 'Incredibles'
    members = [
        {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
    ]
    incredible_family = TheIncredibles(members, last_name)


# Call the incredible_presentation method.

    incredible_family.incredible_presentation()

# Use the born method inherited from the Family class to add Baby Jack with the following power: “Unknown Power”.

    incredible_newborn = {'name':'Jack','age':0,'gender':'Male','is_child':True,'power': 'Unknown Power'}
    incredible_family.born(**incredible_newborn)

# Call the incredible_presentation method again.

    incredible_family.incredible_presentation()
