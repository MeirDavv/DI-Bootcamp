import config 
import psycopg2

class MenuItem:
    def __init__(self, name:str, price:int) -> bool:
        self.name = name
        self.price = price
    
    def save(self) -> None:
        connection, cursor = config.create_connection()
        try:
            query = f"INSERT INTO {config.TABLE} ({config.NAME_FIELD}, {config.PRICE_FIELD}) VALUES (%s, %s);"
            cursor.execute(query,(self.name, self.price))
            connection.commit()
            if cursor.rowcount == 1:
                print("Item was added successfuly")
            else:
                print("Item was not added successfuly")
        
        except psycopg2.Error as e:
            print(f"An error occured: {e}")
            connection.rollback()

        finally:
            connection.close()
        

    def delete(self) -> None:
        connection, cursor = config.create_connection()

        try:
            query = f"DELETE FROM {config.TABLE} WHERE {config.NAME_FIELD} = %s;"
            cursor.execute(query, (self.name,))
            connection.commit()
            if cursor.rowcount == 0:
                print("No items were deleted. Item not found.")
            else:
                print("Item deleted successfully.")

        except psycopg2.Error as e:
            print(f"An error occured: {e}")

        finally:
            connection.close()

    def update(self, new_name :str = None, new_price :str = None) -> None:

        if new_name is None:
            new_name = self.name
        if new_price is None:
            new_price = self.price

        connection, cursor = config.create_connection()

        try:
            query = f"UPDATE {config.TABLE} SET {config.NAME_FIELD} = %s, {config.PRICE_FIELD} = %s WHERE {config.NAME_FIELD} = %s AND {config.PRICE_FIELD} = %s;"
            cursor.execute(query, (new_name, new_price, self.name, self.price))
            connection.commit()
            if cursor.rowcount == 0:
                print("No rows were updated. Item not found, or no change in data.")
            else:
                print("Item updated successfully.")
        
        except psycopg2.Error as e:
            print(f"An error occured: {e}")

        finally:
            connection.close()


