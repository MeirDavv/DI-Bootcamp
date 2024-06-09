min_height = 145
user_height = input("What's your height, in cm?\n")
if("cm" in user_height):
    user_height = user_height.replace('cm','')

user_height = int(user_height)

if (user_height > min_height):
    print("You are tall enough to ride")
else:
    print("You are not tall enough to ride, you should grow some more to ride.")
