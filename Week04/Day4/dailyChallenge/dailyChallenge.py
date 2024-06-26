import requests
import json
import psycopg2
import random
import config

def get_api_data() -> list[dict]:
    url = 'https://restcountries.com/v3.1/all'
    response = requests.get(url)
    data = response.json()
    return data

def insert_by_amount_to_database(data:list[dict], amount: int) -> None:
    for i in range(amount):
        country_details = random.choice(data)
        name = country_details['name']['common']
        capital = country_details['capital'][0]
        flag = country_details['flag']
        subregion = country_details['subregion']
        population = country_details['population']

        insert_into_database(name,capital,flag,subregion,population)

def insert_into_database(name:str ,capital:str,flag:str, subregion:str, population:int) -> None:
    connection, cursor = config.create_connection()
    query = f'''INSERT INTO {config.TABLE} 
    ({config.NAME_FIELD}, {config.CAPITAL_FIELD}, {config.FLAG_FIELD},{config.SUBREGION_FIELD},{config.POPULATION_FIELD})
    VALUES (%s,%s,%s,%s,%s)'''

    try:
        cursor.execute(query,(name,capital,flag,subregion,population))
        connection.commit()
        print(f"Added {name} country successfuly!")
    except Exception as e:
        print(f"Error: {e}")
    finally:
        connection.close()


        


def main():
    data = get_api_data()
    insert_by_amount_to_database(data, 10)

if __name__ == '__main__':
    main()