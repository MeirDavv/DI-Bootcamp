import psycopg2

DBNAME = 'dailyChallenge-day4'
USER = 'postgres'
PASSWORD = 'cluster'
HOST = 'localhost'
PORT = '5432'

TABLE = 'country_info'
NAME_FIELD = 'name'
CAPITAL_FIELD = 'capital'
FLAG_FIELD = 'flag'
SUBREGION_FIELD = 'subregion'
POPULATION_FIELD = 'population'



def create_connection() -> tuple:
    connection = psycopg2.connect(
        dbname = DBNAME, user = USER, password = PASSWORD, host = HOST, port = PORT
    )
    cursor = connection.cursor()
    return connection, cursor

def create_table():
    connection, cursor = create_connection()

    query = f'''CREATE TABLE {TABLE} (
    id SERIAL PRIMARY KEY,
    {NAME_FIELD} VARCHAR(200),
    {CAPITAL_FIELD} VARCHAR(200),
    {FLAG_FIELD} VARCHAR(10),
    {SUBREGION_FIELD} VARCHAR(200),
    {POPULATION_FIELD} INT
    );
    '''

    try:
        cursor.execute(query)
        connection.commit()
    except Exception as e:
        print(f"Error: {e}")
    finally:
        connection.close()

if __name__ == '__main__': #run once, in order to create the table.
    create_table()