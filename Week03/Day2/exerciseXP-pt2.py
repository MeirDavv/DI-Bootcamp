from exerciseXP import Dog
import random

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

class PetDog(Dog):
    def __init__(self, name : str, age : int | float, weight : int | float, trained : bool = False) -> None:
        super().__init__(name,age,weight)
        self.trained = trained

    def train(self):
        self.bark()
        self.trained = True

    def play(self, *names : str):
        output = self.name
        for name in names:
            output += f', {name}'
        output += ' all play together'
        print(output)

    def do_a_trick(self):
        tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
        trick = random.choice(tricks)
        print (f"{self.name} {trick}")
