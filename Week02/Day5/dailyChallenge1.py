# Challenge 1 : Sorting
# Instructions
# Write a program that accepts a comma separated sequence of words as input and prints the words in a comma-separated sequence after sorting them alphabetically.
# Use List Comprehension
# Example:

# Suppose the following input is supplied to the program: without,hello,bag,world
# Then, the output should be: bag,hello,without,world

def print_sorted (*args):
    words = [item for item in args]
    words = sorted(words)
    args = ','.join(words)
    print(args)



def main():
    print_sorted('without','hello','bag','world')

main()


# Challenge 2 : Longest Word
# Instructions
# Write a function that finds the longest word in a sentence. If two or more words are found, return the first longest word.
# Characters such as apostrophe, comma, period count as part of the word (e.g. O’Connor is 8 characters long).

def longest_word(sentence):
    words = sentence.split(" ")
    words_sorted_by_length = sorted(words,key=len, reverse=True)
    print(words_sorted_by_length[0])


def main():
    sentence = "Forgetfulness is by all means powerless!"
    longest_word(sentence)

main()