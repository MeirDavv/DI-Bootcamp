# Exercise 1 : What’s Your Name ?
# Instructions
# Write a function called get_full_name() that takes three arguments: 1: first_name, 2: middle_name 3: last_name.
# middle_name should be optional, if it’s omitted by the user, the name returned should only contain the first and the last name.

def get_full_name(**kwargs):
    lst_of_names = list(kwargs.values())
    lst_of_names = map(lambda s: s.capitalize(), lst_of_names)
    full_name = (" ").join(lst_of_names)
    return full_name

print(get_full_name(first_name="john", middle_name="hooker", last_name="lee")) 

print(get_full_name(first_name="bruce", last_name="lee"))


# Exercise 2 : From English To Morse
# Instructions
# Write a function that converts English text to morse code and another one that does the opposite.
# Hint: Check the internet for a translation table, every letter is separated with a space and every word is separated with a slash /.


def get_table():
    table = { 
    'A':'.-',
    'B':'-...',
    'C':'-.-.',
    'D':'-..',
    'E':'.',
    'F':'..-.',
    'G':'--.',
    'H':'....',
    'I':'..',
    'J':'.---',
    'K':'-.-',
    'L':'.-..',
    'M':'--',
    'N':'-.',
    'O':'---',
    'P':'.--.',
    'Q':'--.-',
    'R':'.-.',
    'S':'...',
    'T':'-',
    'U':'..-',
    'V':'...-',
    'W':'.--',
    'X':'-..-',
    'Y':'-.--',
    'Z':'--..'
    }
    return table

def eng_to_morse(sentence):
    table = get_table()
    output =""
    for letter in sentence:
        if letter == ' ':
            output += '/ '
        else:
            output += table[letter] + ' '

    return output

def morse_to_eng(sentence):
    table = get_table()
    table = {v:k for k,v in table.items()}
    output=""
    list_of_letters = sentence.split(' ')
    list_of_letters.pop() #remove last item since it's an empty string
    for morse_letter in list_of_letters:
        if morse_letter == '/':
            output += ' '
        else:
            output += table[morse_letter]

    return output

def main():
    sentence = "I LOVE PIZZA".upper()
    morse = eng_to_morse(sentence)
    reverse_morse = morse_to_eng(morse)

    print(f"Morse: {morse}")
    print(f"Reversed Morse: {reverse_morse}")

main()


# Exercise 3 : Box Of Stars
# Instructions
# Write a function named box_printer that takes any amount of strings (not in a list) and prints them, one per line, in a rectangular frame.
# For example calling box_printer("Hello", "World", "in", "reallylongword", "a", "frame") will result as:
# ******************
# * Hello          *
# * World          *
# * in             *
# * reallylongword *
# * a              *
# * frame          *
# ******************

def box_printer (*args):
    longest_word = max(args, key=len) 
    len_longest_word = len(longest_word)
    total_len = len_longest_word + 4 #2 stars on each side of the words, and 2 more spaces = 4 additional characters that add to the length
    ch = '*'
    start = 2 # '* ' is printed before the word in each line - which means 2 characters
    print(ch*total_len)
    for word in args:
        till_end = total_len - start - len(word) - 1 #the amount of spaces till end of line 
        print(f'{ch} {word}'+ ' '*till_end + ch)
    print(ch*total_len)

box_printer("Hello", "World", "in", "reallylongword", "a", "frame")


# Exercise 4 : What Is The Purpose Of This Code?
# Analyse this code before executing it. What is the purpose of this code?
# def insertion_sort(alist):
#    for index in range(1,len(alist)):

#      currentvalue = alist[index]
#      position = index

#      while position>0 and alist[position-1]>currentvalue:
#          alist[position]=alist[position-1]
#          position = position-1

#      alist[position]=currentvalue

# alist = [54,26,93,17,77,31,44,55,20]
# insertion_sort(alist)
# print(alist)

'''
Analyzation:
The code above sorts the list,
The way it sorts the list is to iterate over each item and look at the items before it, if the item before it is bigger than the current one it replaces between their values and the checks the items before them both and make sure all the sequence before them are sorted too. it does that till the end and when it reaches the end of the list we get a fully sorted list in an ascending way.
'''