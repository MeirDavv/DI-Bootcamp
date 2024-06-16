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