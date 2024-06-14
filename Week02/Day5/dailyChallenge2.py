'''
Needs a fix
'''













# Here is a python code that generate a list of 20000 random numbers, called list_of_numbers.
# Extend this code to guess how many couples of numbers in list_of_numbers sum to target_number.

import random

#Generate a list of 20000 random numbers
list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
target_number   = 3728

#Sort the list
sorted_numbers = sorted(list_of_numbers)

#Initialize count and pointers
count = 0
right = len(sorted_numbers) - 1
left = 0

#Use a two pointer technique to find a pair that sum to the target number
while(left < right):
    left_num = sorted_numbers[left]
    right_num = sorted_numbers[right]
    current_sum = left_num + right_num

    if(current_sum == target_number):
        count += 1
        left += 1
        right -= 1

    elif(current_sum > target_number):
        right -= 1

    else:
        left += 1

print(count)