import psycopg2

DBNAME = 'restaurant'
USER = 'postgres'
PASSWORD = 'cluster'
HOST = 'localhost'
PORT = '5432'

TABLE = 'Menu_Items'
NAME_FIELD = 'item_name'
PRICE_FIELD = 'item_price'

def create_connection() -> tuple:
    connection = psycopg2.connect(
        dbname = DBNAME, user = USER, password = PASSWORD, host = HOST, port = PORT
    )
    cursor = connection.cursor()
    return connection, cursor