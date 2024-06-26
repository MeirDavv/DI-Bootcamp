import psycopg2

#connect with the database

DBNAME = 'Hollywood'
USER = 'postgres'
PASSWORD = 'cluster'
HOST = 'localhost'
PORT = '5432'

connection = psycopg2.connect(dbname=DBNAME, user=USER, password=PASSWORD, host=HOST, port=PORT)

cursor = connection.cursor()

table = 'actors'
query = f"select * from {table};"

cursor.execute(query)

rows = cursor.fetchall()

print(rows)

for row in rows: 
    print (row)