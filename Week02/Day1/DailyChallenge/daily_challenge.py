'''
Using the input function, ask the user for a string. The string must be 10 characters long.
If it’s less than 10 characters, print a message which states “string not long enough”.
If it’s more than 10 characters, print a message which states “string too long”.
If it’s 10 characters, print a message which states “perfect string” and continue the exercise.

Then, print the first and last characters of the given text.

Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed. For example:
The user enters "HelloWorld"
Then, you have to construct the string character by character
H
He
Hel
... etc
HelloWorld


4. Bonus: Swap some characters around then print the newly jumbled string (hint: look into the shuffle method). For example:

Hlrolelwod
'''

import random


#exercise1
size_requirement = 10
message_for_input = 'Please provide a string, it must be 10 characters long: '
string = input(message_for_input)
while (len(string) != size_requirement):
    size = len(string)
    if (size < size_requirement):
        print("String not long enough")
    if (size > size_requirement):
        print("String too long")
    string = input(message_for_input)

print('perfect string')

#exercise2
print(f"first character: {string[0]}")
print(f"last character: {string[-1]}")

#exercise3
string_length = len(string)
for i in range(1,string_length+1):
    print (string[:i])

#exercise4
lst = list(string)
random.shuffle(lst)
shuffled_string = ''.join(lst)
print(f"Shuffled string: {shuffled_string}")
