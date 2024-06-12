# Challenge 1
# Ask a user for a word
# Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.

# Make sure the letters are the keys.
# Make sure the letters are strings.
# Make sure the indexes are stored in a list and those lists are values.
# Examples

# "dodo" ➞ { "d": [0, 2], "o": [1, 3] }

# "froggy" ➞ { "f":  [0], "r": [1], "o": [2], "g": [3, 4], "y": [5] }

# "grapes" ➞ { "g": [0], "r": [1], "a": [2], "p": [3]}

word = input("Please provide a word: ")

dict_letters = {}
for index, letter in enumerate(word):
    if letter in dict_letters:
        dict_letters[letter].append(index)
    else:
        dict_letters[letter] = [index]

print(dict_letters)


# Challenge 2
# Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
# Sort the list in alphabetical order.
# Return “Nothing” if you can’t afford anything from the store.
# Hint : make sure to convert the amount from dollars to numbers. Create a program that deletes the $ sign, and the comma (for thousands)

def turn_price_to_int(amount):
    amount = amount.replace('$','').replace(',','')
    amount = int(amount)
    return amount

def wallet_can_buy (items_purchase, wallet):
    wallet = turn_price_to_int(wallet)
    subtotal = 0
    cart = []
    for item,price in items_purchase.items():
        price = turn_price_to_int(price)
        if (subtotal + price < wallet):
            subtotal += price
            cart.append(item)
    if (not cart): #if cart is empty
        print("Nothing")
    else:
        cart = sorted(cart)
        print(cart)

#Tests below
#--Test 1
items_purchase = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"
}

wallet = "$300"

wallet_can_buy(items_purchase , wallet)

#--Test 2
items_purchase = {
  "Apple": "$4",
  "Honey": "$3",
  "Fan": "$14",
  "Bananas": "$4",
  "Pan": "$100",
  "Spoon": "$2"
}

wallet = "$100" 

wallet_can_buy(items_purchase , wallet)


#--Test 3
items_purchase = {
  "Phone": "$999",
  "Speakers": "$300",
  "Laptop": "$5,000",
  "PC": "$1200"
}

wallet = "$1" 

wallet_can_buy(items_purchase , wallet)