from menu_item import MenuItem
from menu_manager import MenuManager

def main():
    item = MenuItem('Burger', 35)
    item.save()
    item.delete()
    item = MenuItem('Burger', 35)
    item.save()
    item.update('Veggie Burger', 37)

    item2 = MenuManager.get_by_name('Beef Stew')
    print(item2)



if __name__ == '__main__':
    main()
