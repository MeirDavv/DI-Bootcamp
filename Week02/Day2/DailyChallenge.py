#Challenge 1
'''
Ask the user for a number and a length.
Create a program that prints a list of multiples of the number until the list length reaches length.
Examples

number: 7 - length 5 ➞ [7, 14, 21, 28, 35]

number: 12 - length 10 ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

number: 17 - length 6 ➞ [17, 34, 51, 68, 85, 102]
'''

number = int(input("Enter a number please: "))
length = int(input("Enter a length please: "))
lst = []
for i in range(1, length+1):
    lst.append(number * i)
print(lst)


#Challenge2
'''
Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.
Examples

user's word : "ppoeemm" ➞ "poem"

user's word : "wiiiinnnnd" ➞ "wind"

user's word : "ttiiitllleeee" ➞ "title"

user's word : "cccccaaarrrbbonnnnn" ➞ "carbon"
Notes
Final strings won’t include words with double letters (e.g. “passing”, “lottery”).
'''

user_word = input("Please provide a word: ")

if (len(user_word) < 1):
    print("That's an empty word!")

prev_char = user_word[0]
new_word = prev_char

for letter in user_word:
    if (letter !=prev_char):
        prev_char = letter
        new_word += letter

print(new_word)