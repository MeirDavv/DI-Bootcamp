import re
from anagram_checker import AnagramChecker

def welcome():
    print("Welcome to the anagram checker program!")
    print("In this program we'll let you pick a word and show you its anagrams")

def get_word() -> str:
    print("Let's get a word!")
    print( 
        '''
        RULES:
         - Only a single word is allowed.
         - Only alphabetic characters are allowed. 
         - Only real words will be processed for anagrams.
         '''
         )
    print("Note: to exit the program, type 'exit'")
    word = input("What's your word? Type here --> ")
    return word


def check_word_by_rules(word : str) -> bool:
    return is_single_word(word) and is_alphabetic(word)

def is_single_word(word : str) -> bool:
    words_list = word.split(' ')
    if len(words_list) != 1:
        print("Only a single word is allowed!")
        return False
    return True

def is_alphabetic(word : str) -> bool:
    word  = remove_whitespaces(word)
    if re.search('[^a-zA-Z]', word):
        print("Only alphabetic words are allowed!")
        return False
    return True

def remove_whitespaces(word : str) -> str:
    return word.replace(" ", "") #remove whitespaces

def get_anagram_information(word : str) -> tuple[str, str]:
    checker = AnagramChecker()
    is_valid = "" # default is empty 
    if not checker.is_valid_word(word):
        is_valid = " not"
    anagram_list = checker.get_anagrams(word.upper())
    if anagram_list: #list is not empty - contains anagrams
        anagrams = ', '.join(anagram_list)
    else:
        anagrams = 'None was found'

    return is_valid,anagrams



def display_anagram_information(word : str) -> None:
    
    is_valid, anagrams = get_anagram_information(word)

    spacer = '\n\n\n'
    line1 = f'YOUR WORD: "{word.upper()}"\n'
    line2 = f'this is{is_valid} a valid English word\n'
    line3 = f'Anagrams for your word: {anagrams}.\n'

    message = spacer + line1 + line2 + line3
    print(message)



def main():
    welcome()
    word = get_word()
    while (word != 'exit'):
        if(check_word_by_rules(word)):
            display_anagram_information(word)
        word = get_word()

if __name__ == '__main__':
    main()