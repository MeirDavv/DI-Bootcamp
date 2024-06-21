# Instructions
# Part 1 : Quizz :
# Answer the following questions

# What is a class?
'''
A class is a structure that allows us to create objects with the same properties and methods
'''
# What is an instance?
'''
An instance is an object that was initialized from a class
'''
# What is encapsulation?
'''
Encapsulation is a wrapping of objects and methods inside a block which allows whats inside the block to stay private and not accessible by whats outside of it'''
# What is abstraction?
'''
Abstraction is used to hide properties or parts in the program to make it more efficient and less complex.BY abstraction the user can understand what the program does but not how it does it
'''
# What is inheritance?
'''
Inheritence is the action which lets 1 class inherit properties and methods from another class
'''
# What is multiple inheritance?
'''
Multiple inheritence is when a class has 2 or more parents. So in that case the first parent is the main one which the child goes and ask for methods and properties from but in case a certain method or property doesnt exist in that parent class, it goes to the next parent
'''
# What is polymorphism?
'''
Polymorphism is when we have multiple classes with the same method name/ if these classes are seperate than each method works as expected without any interruption. If there is inheritence, the method in the childclass overrides the method from the parent class of the same method name, IF the method is applied on the child class element.'''
# What is method resolution order or MRO?
'''
Method Resolution Order is the order in which methods are being searched for and executed in the classes hierarchy. The order is from bottom to top and from left to right
'''



# Part 2: Create A Deck Of Cards Class.
# The Deck of cards class should NOT inherit from a Card class.

# The requirements are as follows:

# The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
# The Deck class :
# should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
# should have a method called deal which deals a single card from the deck. After a card is dealt, it should be removed from the deck.

import random


class Card:
    def __init__(self, suit : str, value : str) -> None:
        self.suit = suit
        self.value = value

    def __str__(self) -> None:
        return(f'card suit = {self.suit}, card value = {self.value}')

class Deck:
    def __init__(self) -> None:
        self.suit_list = ['Hearts','Diamonds','Clubs','Spades']
        self.value_list = ['A','1','2','3','4','5','6','7','8','9','10','J','Q','K']
        self.cards = []
        self.create_deck()

    def create_deck(self) -> None:
        for suit in self.suit_list:
            for value in self.value_list:
                card = Card(suit,value)
                self.cards.append(card)
    
    def check_deck(self) -> bool:
        #### check deck of cards contain the 52 cards
        cards_combinations = [(suit,value) for suit in self.suit_list for value in self.value_list]
        for card in self.cards:
            if (card.suit,card.value) in cards_combinations:
                cards_combinations.remove((card.suit,card.value))
            
        return not cards_combinations #if list is empty = all cards were found

    def shuffle(self):
        if not self.check_deck():
            self.create_deck() #In casedeck doesnt include the 52 cards
        random.shuffle(self.cards)

    def deal(self) -> 'Card':
        deal_card = self.cards.pop()
        return deal_card
    

#tests:
deck = Deck()
deck.shuffle()
card = deck.deal()
print(card)