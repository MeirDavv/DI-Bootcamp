'''
Question: Keep asking the user to input the longest sentence they can without the character “A”.
Each time a user successfully sets a new longest sentence, print a congratulations message.
'''
message = "Type the longest message without the letter 'A' in it\n"
max_length = 0

while True:
    user_sentence = input(message)
    current_length = len(user_sentence)
    if ('a' in user_sentence or 'A' in user_sentence):
        print("Your sentence containes the letter 'a' or 'A', try again!")
    elif(current_length > max_length):
        max_length = current_length
        print('Congratulations! This is the longest message so far.')
