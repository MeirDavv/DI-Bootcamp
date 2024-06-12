# In cryptography, a Caesar cipher is one of the simplest and most widely known encryption techniques.
# It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet.

# For example, with a left shift of 3 –> D would be replaced by A,
# –> E would become B, and so on.

# The method is named after Julius Caesar, who used it in his private correspondence.

# Create a python program that encrypts and decrypts messages with ceasar cypher.
# The user enters the program, and then the program asks him if he wants to encrypt or decrypt, and then execute encryption/decryption on a given message and a given shift.

def encryption(sentence, shift):

    min_ascii_lower = ord('a')
    max_ascii_lower = ord('z')
    min_ascii_upper = ord('A')
    max_ascii_upper = ord('Z')

    encrypted_sentence = ""
    for letter in sentence:
        letter_ascii = ord(letter)
        if (letter_ascii >= min_ascii_lower and letter_ascii <= max_ascii_lower): #If it's a-z
            if (letter_ascii - shift < min_ascii_lower): #encryption is exceeding 'a'
                encrypted_letter = max_ascii_lower + 1 - shift + (letter_ascii - min_ascii_lower)
            elif (letter_ascii - shift > max_ascii_lower): #encryption is exceeding 'z'
                encrypted_letter = min_ascii_lower - 1 - shift - (max_ascii_lower - letter_ascii)
            else:
                encrypted_letter = letter_ascii - shift

        elif (letter_ascii >= min_ascii_upper and letter_ascii <= max_ascii_upper): # If it's A-Z
            if (letter_ascii - shift < min_ascii_upper): #encryption is exceeding 'A'
                encrypted_letter = max_ascii_upper + 1 - shift + (letter_ascii - min_ascii_upper)
            elif (letter_ascii - shift > max_ascii_upper): #encryption is exceeding 'Z'
                encrypted_letter = min_ascii_upper - 1 - shift - (max_ascii_upper - letter_ascii)
            else:
                encrypted_letter = letter_ascii - shift

        else:
            encrypted_letter = letter_ascii

        encrypted_sentence += chr(encrypted_letter)

    return encrypted_sentence


def decryption(sentence, shift):
    return encryption(sentence, shift*-1)


def get_data():
    print("Welcome to the Caesar cipher program")
    sentence = input("Please provide a sentence: ")
    while True:
        encrypt = input("Should we encrypt or decrypt? 'e' for encrypt, 'd' for decryption: ")
        if encrypt == 'e' or encrypt == 'd':
            break
        else:
            print('Try again.')

    while True:
        shift = input("How much to shift? please provide a number: ")
        try:
            shift = int(shift)
        except:
            print('Try again.')
        else:
            break

    return sentence, encrypt, shift

sentence, encrypt, shift = get_data()
if(encrypt == 'e'):
    print(f"Encrypted sentence: {encryption(sentence,shift)}" )
else:
    print(f"Decrypted sentence: {decryption(sentence,shift)}" )

    


print("Thank you!")