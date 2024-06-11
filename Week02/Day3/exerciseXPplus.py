# 🌟 Exercise 1 : Student Grade Summary
# Instructions
# You are given a dictionary containing student names as keys and lists of their grades as values. Your task is to create a summary report that calculates the average grade for each student, assigns a letter grade, and determines the class average.



# Initial Data:


student_grades = {
    "Alice": [88, 92, 100],
    "Bob": [75, 78, 80],
    "Charlie": [92, 90, 85],
    "Dana": [83, 88, 92],
    "Eli": [78, 80, 72]
}


# Requirements:
# Calculate the average grade for each student and store the results in a new dictionary called student_averages.

student_averages = {}

for name,grades in student_grades.items():
    summary = sum(grades)
    count = len(grades)
    avg = summary // count
    student_averages[name] = avg

print(student_averages)

# Assign each student a letter grade (A, B, C, D, F) based on their average grade according to the following scale, and store the results in a dictionary called student_letter_grades:
# A: 90 and above
# B: 80 to 89
# C: 70 to 79
# D: 60 to 69
# F: Below 60

student_letter_grades = {}
for name, avg_grade in student_averages.items():
    if (avg_grade >= 90):
        avg_letter = 'A'
    elif (avg_grade >= 80):
        avg_letter = 'B'
    elif (avg_grade >= 70):
        avg_letter = 'C'
    elif (avg_grade >= 60):
        avg_letter = 'D'
    else:
        avg_letter = 'F'

    student_letter_grades[name] = avg_letter

# Calculate the class average (the average of all students’ averages) and print it.

grades = list(student_averages.values())
class_avg = sum(grades) // len(grades)

# Print the name of each student, their average grade, and their letter grade.

for student,avg in student_averages.items():
    print(f"Name of student {student}. Average grade: {avg}. Letter grade: {student_letter_grades[student]}.")


# Hints:
# Use loops to iterate through the student_grades dictionary.
# You may use sum() and len() functions to help calculate averages.
# Initialize empty dictionaries for student_averages and student_letter_grades before filling them with data.



# 🌟 Exercise 2 : Advanced Data Manipulation And Analysis
# Instructions
# In this exercise, you will analyze data from a hypothetical online retail company to gain insights into sales trends and customer behavior. The data is represented as a list of dictionaries, where each dictionary contains information about a single purchase.



sales_data = [
    {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03"},
    {"customer_id": 2, "product": "Laptop", "price": 1200, "quantity": 1, "date": "2023-04-04"},
    {"customer_id": 1, "product": "Laptop", "price": 1000, "quantity": 1, "date": "2023-04-05"},
    {"customer_id": 2, "product": "Smartphone", "price": 500, "quantity": 2, "date": "2023-04-06"},
    {"customer_id": 3, "product": "Headphones", "price": 150, "quantity": 4, "date": "2023-04-07"},
    {"customer_id": 3, "product": "Smartphone", "price": 550, "quantity": 1, "date": "2023-04-08"},
    {"customer_id": 1, "product": "Headphones", "price": 100, "quantity": 2, "date": "2023-04-09"},
]


# Tasks:
# Total Sales Calculation: Calculate the total sales for each product category (i.e., the total revenue generated from each type of product). Use a loop to iterate through the data and a dictionary to store the total sales for each product.

total_sales = {}

for sale in sales_data:
    product_name = sale['product']
    revenue = sale['price'] * sale['quantity']
    if(product_name in total_sales.keys()):
        total_sales[product_name] += revenue
    else:
        total_sales[product_name] = revenue

# Customer Spending Profile: Determine the total amount spent by each customer. Use a dictionary to maintain the sum of amounts each customer has spent.

customer_spending_profile = {}

for sale in sales_data:
    customer_id = sale['customer_id']
    revenue = sale['price'] * sale['quantity']
    if(customer_id in customer_spending_profile.keys()):
        customer_spending_profile[customer_id] += revenue
    else:
        customer_spending_profile[customer_id] = revenue

print(customer_spending_profile)

# Sales Data Enhancement:

# Add a new field to each transaction called “total_price” that represents the total price for that transaction (quantity * price).
# Use a loop to modify the sales_data list with this new information.

for sale in sales_data:
    sale['total_price'] = sale['price'] * sale['quantity']

# High-Value Transactions:

# Using list comprehension, create a list of all transactions where the total price is greater than $500.
# Sort this list by the total price in descending order.

transactions_greater_than_500 = [sale for sale in sales_data if sale['total_price'] > 500]
print(transactions_greater_than_500)
transactions_greater_than_500 = sorted(transactions_greater_than_500, key=lambda d: d['total_price'], reverse=True)
print(transactions_greater_than_500)

# Customer Loyalty Identification:

# Identify any customer who has made more than one purchase, suggesting potential loyalty.
# Use a dictionary to count purchases per customer, then use a loop or comprehension to identify customers meeting the loyalty criterion.

purchases_per_customer = {}

for sale in sales_data:
    customer_id = sale['customer_id']
    if(customer_id in purchases_per_customer.keys()):
        purchases_per_customer[customer_id] += 1
    else:
        purchases_per_customer[customer_id] = 1

print(purchases_per_customer)

loyal_customers = [customer_id for customer_id,purchases in purchases_per_customer.items() if purchases > 1]
print(loyal_customers)

# Bonus: Insights and Analysis:

# Calculate the average transaction value for each product category.

average_transaction_value = {}
for product in total_sales.keys():
    total_quantity = sum ([transaction['quantity'] for transaction in sales_data if transaction['product'] == product])
    average_transaction_value[product] = total_sales[product] / total_quantity

# Identify the most popular product based on the quantity sold.

product_quanitities = {product : int(total_sales[product]/average_transaction_value[product]) for product in total_sales.keys()}
most_popular_product = max(product_quanitities, key=product_quanitities.get)
print(most_popular_product)
# Provide insights into how these analyses could inform the company’s marketing strategies.

