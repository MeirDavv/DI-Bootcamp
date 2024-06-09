month = int(input("Please input a month (1-12)"))
#Spring is 3 4 5
#Summer is 6 7 8
#Autumn is 9 10 11
#Winter is 12 1 2

if(month<=5 and month>=3):
    season = "Spring"
elif(month<=8 and month >=6):
    season = "Summer"
elif (month<=11 and month>=9):
    season = "Autumn"
else:
    season = "Winter"

if(season):
    print(season)