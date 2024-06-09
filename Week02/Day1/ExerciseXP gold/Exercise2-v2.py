month_to_season = {
    (3,4,5) : 'Spring',
    (6,7,8) : 'Summer',
    (9,10,11) : 'Autumn',
    (12,1,2) : 'Winter'
}
month = int(input("Please input a month (1-12)"))

season = None

for months, season_name in month_to_season.items():
    if (month in months):
        season = season_name
        break

if(season):
    print(season)
else:
    print("Invalid month")