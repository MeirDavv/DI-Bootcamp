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
