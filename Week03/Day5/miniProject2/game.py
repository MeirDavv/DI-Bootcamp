import random

class Game:

    def __init__(self):
        self.choices = {
            'r' : 'Rock',
            'p' : "Paper",
            's' : "Scissors"
            }

    def get_user_item(self) -> str:
        user_item = input("Select (r)ock, (p)aper, (s)cissors: ")
        while (user_item not in self.choices.keys()):
            user_item = input("Select (r)ock, (p)aper, (s)cissors: ")

        return user_item
    
    def get_computer_item(self) -> str:
        computer_item = random.choice(list(self.choices.keys()))
        return computer_item
    
    def get_game_result(self,user_item : str, computer_item : str) -> str:
        if user_item == computer_item:
            return "draw"
        
        elif (user_item,computer_item) in [('r','s'),('p','r'),('s','p')]: #win cases 
            return "win"
        
        else:
            return "loss"
        
    @staticmethod
    def translate_to_past(word :str) -> str:
        dictionary = {
            'win' : 'won',
            'draw' : 'drew',
            'loss' : 'lost'
        }
        return dictionary[word]
        
    def play(self) -> str:
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)
        message = f"You selected {self.choices[user_item]}. The computer selected {self.choices[computer_item]}. You {Game.translate_to_past(result)}."
        print(message)
        return result
