from menu_manager import MenuManager
import sys

def load_manager() -> 'MenuManager':
    menu_manager = MenuManager()
    return menu_manager

def show_user_menu() -> None:
    menu_message = '''
    \t MENU
    (a) Add an item
    (d) Delete and item
    (v) View the menu
    (x) Exit
     : '''
    
    menu_selection = input(menu_message)
    
    if menu_selection == 'a':
        add_item_to_menu()
    elif menu_selection == 'd':
        remove_item_from_menu()
    elif menu_selection == 'v':
        show_restaurant_menu()
    elif menu_selection == 'x':
        exit_program()
    else:
        print('Invalid input! Try again...')
        show_user_menu()

def validate_int(num : str) -> int:
    try:
        num = int(num)
    except ValueError:
        print("Input should be a number! please try again!")
        num = input(" : ")
        return validate_int(num)
    return num

def add_item_to_menu(menu_manager : 'MenuManager') -> None:
    name = input("Please provide the name of the item you want to add: ")
    price = input("Please provide the price of the item: ")
    price = validate_int(price)
    menu_manager.add_item(name, price)
    print("Object was added successfully.")

def remove_item_from_menu (menu_manager : 'MenuManager') -> None:
    name = input("Please provide the name of the item you want to remove: ")
    is_removed = menu_manager.add_item(name)
    if is_removed:
        print("Item was removed succesfully")
    else:
        print("There's an error - can't remove the item since it's not in the menu.")

def show_restaurant_menu(menu_manager : 'MenuManager') -> None:
    menu_json = menu_manager.menu
    print(menu_json)

def exit_program(menu_manager : 'MenuManager') -> None:
    menu_manager.save_to_file()
    print("Menu was successfuly saved.")
    sys.exit()


if __name__ == '__main__':
    main()


def main() -> None:
    