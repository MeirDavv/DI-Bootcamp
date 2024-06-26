import psycopg2

DBNAME = 'restaurant'
USER = 'postgres'
PASSWORD = 'cluster'
HOST = 'localhost'
PORT = '5432'

TABLE = 'Menu_Items'
NAME_FIELD = 'item_name'
PRICE_FIELD = 'item_price'

class MenuItem:
    def __init__(self, name:str, price:int) -> None:
        self.name = name
        self.price = price

    def create_connection(self) -> tuple:
        connection = psycopg2.connect(
            dbname = DBNAME, user = USER, password = PASSWORD, host = HOST, port = PORT
        )
        cursor = connection.cursor()
        return connection, cursor
    
    def save(self) -> None:
        connection, cursor = self.create_connection()

        query = f"INSERT INTO {TABLE} ({NAME_FIELD}, {PRICE_FIELD}) VALUES (%s, %s);"
        cursor.execute(query,(self.name, self.price))
        connection.commit()
        connection.close()

    def delete(self) -> None:
        connection, cursor = self.create_connection()

        query = f"DELETE FROM {TABLE} WHERE {NAME_FIELD} = %s AND {PRICE_FIELD} = %s;"
        cursor.execute(query, (self.name, self.price))
        connection.commit()
        connection.close()

    def update(self, new_name :str = None, new_price :str = None) -> None:

        if new_name is None:
            new_name = self.name
        if new_price is None:
            new_price = self.price

        connection, cursor = self.create_connection()

        query = f"UPDATE {TABLE} SET {NAME_FIELD} = %s, {PRICE_FIELD} = %s WHERE {NAME_FIELD} = %s AND {PRICE_FIELD} = %s;"
        cursor.execute(query, (new_name, new_price, self.name, self.price))
        connection.commit()
        connection.close()


def main():
    item = MenuItem('Burger', 35)
    item.save()
    item.delete()
    item = MenuItem('Burger', 35)
    item.save()
    item.update('Veggie Burger', 37)


if __name__ == '__main__':
    main()
