start = 'X' #Who starts the turn - 'X' or 'O'
size = 3 #Size of board
players_input = [[None for _ in range(size)] for _ in range(size)] #global_variable #2-Dimensional list of size (size)

def welcome(): #Display welcome message
    print("Welcome to TIC TAC TOE!")

def display_board(): #Display playing board. Inputs- player_input to draw the players input on the board
    print()
    print("TIC TAC TOE")
    board_size = size
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
                print(players_input[row][col], end='')
            else: #else - blank location
                print(' ', end='')

        print()    

def player_input(): #Receive player input, and add it to players_input which is a 2 dimensional list
    global start
    print()
    print(f"{start}'s turn...")
    print()
    row = int(input(f"Enter row: "))
    col = int(input(f"Enter column: "))
    if players_input[row-1][col-1] is None: #If the turn is legit
        players_input[row-1][col-1] = start
        if start == 'X':
            start = 'O'
        else:
            start = 'X'
    else:
        print("There's already a character there! Try again...")

def check_horizontal():
    row = 0 
    col = 0
    while (col + 3 <= size):
        while(row < size):
            if(players_input[row][col] == players_input[row][col+1] == players_input[row][col+2] and players_input[row][col] is not None):
                print(f"Player {players_input[row][col]} is the winner! ")
                return True
            row += 1
        col += 1
        row=1
    return False

def check_vertical():
    row = 0 
    col = 0
    while (row + 3 <= size):
        while(col < size):
            if(players_input[row][col] == players_input[row+1][col] == players_input[row+2][col] and players_input[row][col] is not None):
                print(f"Player {players_input[row][col]} is the winner! ")
                return True
            col += 1
        row += 1
        col=1
    return False

def check_diagonal(): #Checking from the middle of the diagonal, checking 2 diagonals: 1-45deg 2-315deg
    row = 1
    col = 1
    while(row + 2 <= size): 
        while(col +2 <= size):
            if((players_input[row][col] == players_input[row-1][col-1] == players_input[row+1][col+1] 
               or players_input[row][col] == players_input[row+1][col-1] == players_input[row-1][col+1])
               and players_input[row][col] is not None):
                print(f"Player {players_input[row][col]} is the winner! ")
                return True
            col += 1
        row += 1
        col=1
   


def check_win():
    return check_horizontal() or check_vertical() or check_diagonal()


def check_full_board(): 
    for y in players_input:
        for x in y:
            if x is None:
                return False
            
    print("Draw! Nobody won...")  
    return True


def check_win_or_draw():
    return check_win() or ((not check_win) and check_full_board()) #if won or didnt win and the board is full

def play():
    welcome()
    while True:
        display_board()
        flag = check_win_or_draw()
        if flag:
            break
        player_input()

play()