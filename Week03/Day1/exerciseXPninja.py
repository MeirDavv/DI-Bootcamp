# Exercise 1 : Call History
# Instructions
# Create a class called Phone. This class takes a parameter called phone_number. When instantiating an object create an attribute called call_history which value is an empty list.

# Add a method called call that takes both self and other_phone (i.e another Phone object) as parameters. The method should print a string stating who called who, and add this string to the phone’s call_history.

# Add a method called show_call_history. This method should print the call_history.

# Add another attribute called messages to your __init__() method which value is an empty list.

# Create a method called send_message which is similar to the call method. Each message should be saved as a dictionary with the following keys:
# to : the number of another Phone object
# from : your phone number (also a Phone object)
# content

# Create the following methods: show_outgoing_messages(self), show_incoming_messages(self), show_messages_from(self)

# Test your code !!!

class Phone:
    def __init__(self, phone_number: str) -> None:
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []

    def call (self, other_phone: "Phone") -> None:
        print(f"{self.phone_number} called {other_phone.phone_number}")
        self.call_history.append(other_phone.phone_number)
        other_phone.call_history.append(self.phone_number)

    def show_call_history(self) -> None:
        print(f"The call history of {self.phone_number}:")
        for phone in self.call_history[::-1]: #Shows last phone calls first, like a standard phone's phone history
            print(phone)

    def send_message(self, other_phone: "Phone", message: str) -> None:
        msg = {}
        msg['to'] = other_phone.phone_number
        msg['from'] = self.phone_number
        msg['content'] = message
        self.messages.append(msg)
        other_phone.messages.append(msg)

    def show_outgoing_messages(self) -> None:
        outgoing_messages = [message['content'] for message in self.messages if message['from'] == self.phone_number]
        print(f"Outgoing messages: {outgoing_messages}")
    
    def show_incoming_messages(self) -> None:
        incoming_messages = [message['content'] for message in self.messages if message['to'] == self.phone_number]
        print(f"Incoming messages: {incoming_messages}")

    def show_messages_from(self, other: "Phone") -> None:
        outgoing_messages = [message['content'] for message in self.messages if message['from'] == other.phone_number and message['to'] == self.phone_number]
        print(f"Outgoing messages: {outgoing_messages}")

def main():
    phone1 = Phone("054-1234567")
    phone2 = Phone("058-1234567")

    phone1.call(phone2)
    phone1.call(phone2)
    phone2.call(phone1)
    phone1.call(phone2)

    phone1.show_call_history()

    phone1.send_message(phone2, "hello")
    phone2.send_message(phone1, "hi!")
    phone1.send_message(phone2, "whats app")
    phone2.send_message(phone1, "all good!")
    phone2.send_message(phone1, "how you doing?")
    phone1.send_message(phone2, "fine")
    phone1.send_message(phone2, "thanks")
    phone2.send_message(phone1, "cya")

    phone1.show_outgoing_messages()
    phone1.show_incoming_messages()
    phone1.show_messages_from(phone1)
    phone1.show_messages_from(phone2)
    

if __name__ == '__main__':
    main()