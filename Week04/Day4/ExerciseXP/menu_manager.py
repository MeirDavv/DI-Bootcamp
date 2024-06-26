import config

class MenuManager:
    @classmethod
    def get_by_name(cls, search_by_value) -> tuple:
        connection, cursor = config.create_connection()

        search_by_field = config.NAME_FIELD
        query = f"SELECT * FROM {config.TABLE} WHERE {search_by_field} = %s LIMIT 1"
        cursor.execute(query,(search_by_value,))

        rows = (cursor.fetchall())
        connection.close()

        return rows
    
