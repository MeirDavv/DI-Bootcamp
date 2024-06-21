from game import Game

def get_user_menu_choice() -> str:
    menu = ''' 
    \tMenu:
    \t(g) Play a new game
    \t(x) Exit and show results
    \t :  '''
    print(menu, end='')
    user_menu_choice = input()
    if user_menu_choice not in ['g','x']:
        print("Incorrect input. Should provide: '(g)','(x)' ")
    return user_menu_choice

def print_results(results_dict : dict[int]) -> None:
    message = f'''
    \t Game Results:
    \t   You won {results_dict['win']}
    \t   You lost {results_dict['loss']}
    \t   You drew {results_dict['draw']}

    \tThank you for playing!
    '''

    print(message)

def main():

    results = {
        'win' : 0,
        'loss' : 0,
        'draw' : 0,
    }

    while True: #Show menu repeatedly
        user_menu_choice = get_user_menu_choice()
        while user_menu_choice not in ['g','x']:
            user_menu_choice = get_user_menu_choice()

        if user_menu_choice == 'g':
            game = Game()
            current_result = game.play() 
            results[current_result] += 1

        if user_menu_choice == 'x':
            print_results(results)
            break




if __name__ =='__main__':
    main()
    
    