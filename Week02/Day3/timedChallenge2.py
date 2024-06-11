# Perfect Number
# A perfect number is a positive integer that is equal to the sum of its divisors.
# However, the number itself is not included in the sum.

# Ask the user for a number and print whether or not it is a perfect number. If yes, print True else False.
# Hint: Google perfect numbers
# Example

# Input -- Enter the number:6
# Output -- True

# Input -- Enter the number:10
# Output --  False

x = int(input('Enter the Number:')) 

#write down your logic here 

divisors = []
for divisor in range (1, x):
    if (x%divisor == 0):
        divisors.append(divisor)

summary = sum(divisors)

if(summary == x):
    print (True)
else:
    print (False)
    