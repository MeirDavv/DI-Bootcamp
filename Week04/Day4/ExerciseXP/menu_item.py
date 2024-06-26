import config 

class MenuItem:
    def __init__(self, name:str, price:int) -> None:
        self.name = name
        self.price = price
    
    def save(self) -> None:
        connection, cursor = config.create_connection()

        query = f"INSERT INTO {config.TABLE} ({config.NAME_FIELD}, {config.PRICE_FIELD}) VALUES (%s, %s);"
        cursor.execute(query,(self.name, self.price))
        connection.commit()
        connection.close()

    def delete(self) -> None:
        connection, cursor = config.create_connection()

        query = f"DELETE FROM {config.TABLE} WHERE {config.NAME_FIELD} = %s AND {config.PRICE_FIELD} = %s;"
        cursor.execute(query, (self.name, self.price))
        connection.commit()
        connection.close()

    def update(self, new_name :str = None, new_price :str = None) -> None:

        if new_name is None:
            new_name = self.name
        if new_price is None:
            new_price = self.price

        connection, cursor = config.create_connection()

        query = f"UPDATE {config.TABLE} SET {config.NAME_FIELD} = %s, {config.PRICE_FIELD} = %s WHERE {config.NAME_FIELD} = %s AND {config.PRICE_FIELD} = %s;"
        cursor.execute(query, (new_name, new_price, self.name, self.price))
        connection.commit()
        connection.close()


