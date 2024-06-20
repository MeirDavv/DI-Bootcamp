import os

class AnagramChecker:
    def __init__(self) -> None:
        dir_path = os.path.dirname(os.path.realpath(__file__))
        file_name = 'sowpods.txt'
        file_path = dir_path + '/' + file_name
        with open (file_path, mode ='r') as file:
            self.wordslist = file.read().split('\n')

    def is_valid_word(self, word: str) -> bool:
        return word.upper() in self.wordslist
        
    def get_anagrams(self, word: str) -> list[str]:
        anagrams =[]
        for word_in_list in self.wordslist:
            if self.is_anagram(word_in_list,word):
                anagrams.append(word_in_list.lower())

        return anagrams
    

    def is_anagram(self, word1, word2)->bool:
        return sorted(word1) == sorted(word2) and word1 != word2
    
        
