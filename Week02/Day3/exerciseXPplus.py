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
