# Instructions :
# The goal of the exercise is to create a class that will help you analyze a specific text. A text can be just a simple string, like “Today, is a happy day” or it can be an external text file.



# Part I
# First, we will analyze a simple string, like “A good book would sometimes cost as much as a good house.”

# Create a class called Text that takes a string as an argument and store the text in a attribute.
# Hint: You need to manually copy-paste the text, straight into the code

class Text:
    def __init__(self, text : str) -> None:
        self.text = text
        

# Implement the following methods:
# a method to return the frequency of a word in the text (assume words are separated by whitespace) return None or a meaningful message.

    def frequency_of_word (self, word : str) -> str:
        words = self.text.split(' ')
        count = words.count(word)
        if count == 0:
            return f'There are none of the word {word} in the text '
        else:
            return f'The frequency of the word {word} is: {count} '

# a method that returns the most common word in the text.

    def most_common_word(self) -> str:
        words = self.text.split(' ')
        common_word = max(words,key= words.count)
        return common_word

# a method that returns a list of all the unique words in the text.

    def unique_words(self) -> list:
        words = self.text.split(' ')
        unique_words = [word for word in words if words.count(word) == 1]
        return unique_words



# Part II
# Then, we will analyze a text coming from an external text file. Download the_stranger.txt file.

# Implement a classmethod that returns a Text instance but with a text file:

#     >>> Text.from_file('the_stranger.txt')
# Hint: You need to open and read the text from the text file.


# Now, use the provided the_stranger.txt file and try using the class you created above.
    

    @classmethod
    def from_file(cls, filename : str) -> 'Text':
        import os
        dir_path = os.path.dirname(os.path.realpath(__file__))
        file_path = dir_path + '/' + filename
        with open (file_path, mode='r') as file:
            content = file.read()

        return cls(content)


##tests:

def main():
    example = "A good book would sometimes cost as much as a good house."
    text1 = Text(example)

    print(text1.frequency_of_word('good'))

    print(text1.most_common_word())

    print(text1.unique_words())

    text2 = Text.from_file('the_stranger.txt')
    print(text2.text)

if __name__ == '__main__':
    main()

# Bonus:
# Create a class called TextModification that inherits from Text.

import string
import nltk
from nltk.corpus import stopwords
import re

class TextModification(Text):

# Implement the following methods:
# a method that returns the text without any punctuation.

    def without_punctuation(self) -> str:
        punctuation = string.punctuation
        translation_table = str.maketrans('','',punctuation)
        return self.text.translate(translation_table)

    def without_stop_words(self) -> str:
        nltk.download('stopwords')
        stop_words = set(stopwords.words('english'))
        words = self.text.split()
        filtered_words = [word for word in words if word.lower() not in stop_words]
        return ' '.join(filtered_words)
        

    def without_special_chars(self) -> str:
        pattern = r'[^a-zA-Z0-9\s]'
        return re.sub(pattern,'',self.text)


# a method that returns the text without any english stop-words (check out what this is !!).
# a method that returns the text without any special characters.
# Note: Instead of creating a child class, you could also implements those methods as static methods in the Text class.

# Note: Feel free to implement/create any attribute, method or function needed to make this work, be creative :)

def main():
    text3 = TextModification("Hi, my name is: Meir. And as you can see %$^r4 I'm great!")
    
    print(text3.without_punctuation())

    print(text3.without_stop_words())

    print(text3.without_special_chars())

if __name__ == '__main__':
    main()