# Instructions
# Given a “Matrix” string:

#     7ii
#     Tsx
#     h%?
#     i #
#     sM 
#     $a 
#     #t%
#     ^r!


# The matrix is a grid of strings (alphanumeric characters and spaces) with a hidden message in it.
# A grid means that you could potentially break it into rows and columns, like here:

# Matrix: A matrix is a two-dimensional array. It is a grid of numbers arranged in rows and columns.
# To reproduce the grid, the matrix should be a 2D list, not a string



# To decrypt the matrix, Neo reads each column from top to bottom, starting from the leftmost column, selecting only the alpha characters and connecting them. Then he replaces every group of symbols between two alpha characters by a space.

# Using his technique, try to decode this matrix.

matrix = [['7','i','i'],
          ['T','s','x'],
          ['h','%','?'],
          ['i',' ','#'],
          ['s','M',' '],
          ['$','a',' '],
          ['#','t','%'],
          ['^','r','!']
]

length = len(matrix)
width = len(matrix[0])

alpha_ch = 'abcdefghijklmnopqrstuvwxyz'

sentence = ''

found_alpha = False #To make sure we put just 1 space between 2 alpha numbers, we check if we already found an alpha
for i in range (width):
    for j in range (length):
        ch = matrix[j][i]
        if(ch.lower() in alpha_ch):
            sentence += ch
            found_alpha = True
        elif(found_alpha == True):
            sentence += ' '
            found_alpha = False
        else:
            continue
            
print(sentence)