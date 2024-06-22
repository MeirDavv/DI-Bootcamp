import json
import os

class MenuManager:
    def __init__(self) -> None:
        self.menu = MenuManager.read_json()

    @staticmethod
    def read_json() -> str:
        file_path = MenuManager.get_file_path()
        with open (file_path, mode='r') as file:
            file_str = file.read()
            file_json = json.loads(file_str)
        
        return file_json
    
    @staticmethod
    def get_file_path() -> str:
        dir_path = os.path.dirname(os.path.realpath(__file__))
        file_name = '/restaurant_menu.json'
        return dir_path + file_name

    
    def add_item(self,name : str ,price : int) -> None:
        item = {}
        item['name'] = name
        item['price'] = price
        self.menu['items'].append(item)  

    def remove_item(self, name : str) -> bool:
        for item in self.menu['items']:
            if item['name'] == name:
                self.menu['items'].remove(item)
                return True
            
        return False
    
    def save_to_file(self) -> None:
        file_path = MenuManager.get_file_path()
        with open (file_path, mode = 'w') as file:
            json.dump(self.menu, file)
