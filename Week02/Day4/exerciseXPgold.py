# Exercise 1 : When Will I Retire ?
# Instructions
# The point of the exercise is to check if a person can retire depending on their age and their gender.
# Note : Let’s say retirement age is 67 for men, and 62 for women (born after April, 1947).

# Create a function get_age(year, month, day)
# Hard-code the current year and month in your code (there are better ways of doing this, but for now it will be enough.)
# After calculating the age of a person, the function should return the age (the age is an integer).

def get_age(year, month, day):
    year_current = 2024
    month_current = 6
    day_current = 13

    age = year_current - year
    if (month_current < month or (month_current == month and day_current < day)): #If he didn't have birthday yet this year
        age -= 1 
    
    return age


# Create a function can_retire(gender, date_of_birth).
# It should call the get_age function (with what arguments?) in order to receive an age.
# Now it has all the information it needs in order to determine if the person with the given gender and date of birth is able to retire or not.
# Calculate. You may need to do a little more hard-coding here.
# Return True if the person can retire, and False if he/she can’t.

def can_retire(gender, date_of_birth):
    date_int = map(int, date_of_birth.split('/'))
    year, month, day = tuple(date_int)
    age = get_age(year, month, day)

    if((gender == 'm' and age >= 67) or (gender  == 'f' and age >=62)):
        return True
    
    return False

def main():
    gender = input ("What's your gender please? 'm' for male /'f' for female ")
    date_of_birth = input ("What's your birth date? please provide a date in format YYYY/MM/DD: ")
    retire = can_retire(gender, date_of_birth)
    if retire:
        print("Congratulations! You can retire :) ")

    else:
        print("Keep working, you can't retire.(Dont worry, working is the best thing ever) ")

main()
# Some Hints

# Ask for the user’s gender as “m” or “f”.
# Ask for the user’s date of birth in the form of “yyyy/mm/dd”, eg. “1993/09/21”.
# Call can_retire to get a definite value for whether the person can or can’t retire.
# Display a message informing the user whether they can retire or not.
# As always, test your code to ensure it works.
