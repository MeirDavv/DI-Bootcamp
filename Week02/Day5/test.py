

def display_board(players_input): #Display playing board. Inputs- player_input to draw the players input on the board
    print()
    print("TIC TAC TOE")
    board_size = len(players_input)
    cell_width = 3
    cell_length = 1
    outer_border_size = 1
    inner_border_size = 1
    total_width = cell_width * board_size + (inner_border_size*board_size - 1) + (outer_border_size * 2)
    total_len = cell_length * board_size + (inner_border_size*board_size - 1) + (outer_border_size * 2)
    
    for y in range(total_len):
        for x in range(total_width):
            row = (y - outer_border_size)//(cell_length+inner_border_size) #Formula: y = outer_border_size + (cell_length + inner_border_row) // row
            col = (x - outer_border_size)//(cell_width+inner_border_size)
            if x in [0,total_width-1] or y in [0,total_len-1]: #if outer border location
                print("*",end='')
            elif x % (outer_border_size+cell_width) == 0 : #if vertical inner border
                print('|', end='')
            elif y % (outer_border_size+cell_length) == 0 : #if horizontal inner border
                print('-', end='')
            elif x % (outer_border_size + cell_width//2) == 0  and players_input[row][col] is not None: #if player input location
                print('e', end='')
            else: #else - blank location
                print(' ', end='')

        print()


size = 3
players_input = [[None]*size]*size

display_board(players_input)