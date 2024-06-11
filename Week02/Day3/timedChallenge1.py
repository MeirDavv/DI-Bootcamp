# Reverse The Sentence
# Write a program to reverse the sentence wordwise.

# Input:
# You have entered a wrong domain
# Output:
# domain wrong a entered have You

def raw_input():
    return input("Please provide a sentence and we will reverse it: ")

REverseinp= raw_input()


#write down your logic here 
REverseinp = REverseinp.split(' ')
REverseinp = [word for word in reversed(REverseinp)]
REverseinp = ' '.join(REverseinp)
# 


print(REverseinp) 