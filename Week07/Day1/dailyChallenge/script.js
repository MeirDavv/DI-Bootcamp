function makeAllCaps(array) {
    return new Promise ((resolve,reject)=> {
        for (let item of array){
            if (typeof item !== 'string' )
                reject("Not all items in the array, are strings!")
        }
        const array2 = array.map((item) => item.toUpperCase());
        resolve(array2);
    });
}

function sortWords(array){
    return new Promise ((resolve,reject)=> {
        if (array.length <= 4)
            reject("Array is not big enough");
        else
            resolve(array.sort())
    });
}


//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error));

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error));

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error));


    //   2nd Daily Challenge

const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
    }`

    //   Create three functions. The two first functions should return a promise..

    //   The first function is named toJs():
    //   this function converts the morse json string provided above to a morse javascript object.
    //   if the morse javascript object is empty, throw an error (use reject)
    //   else return the morse javascript object (use resolve)
function toJs(){
    return new Promise((resolve,reject) =>{
        let obj = JSON.parse(morse)
        if (Object.keys(obj).length === 0 ) // If Object is empty
            reject("Object is empty")
        else
            resolve(obj);
    });
}

    //   The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
      
    //   This function asks the user for a word or a sentence.
    //   if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
    //   else return an array with the morse translation of the user’s word.
    //   if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
    //   if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object
let userInput = prompt("Please provide a word or sentence: ").toLowerCase();

function toMorse(morseJs){
    return new Promise((resolve,reject)=>{
        const array = [];
        for (const letter of userInput){
            if (!(letter in morseJs))
                reject("Error! the input includes an invalid character");
            else
                array.push(morseJs[letter])
        resolve(array);
        }
    });
} 
      
    //   The third function called joinWords(morseTranslation), takes one argument: the morse translation array
      
    //   this function joins the morse translation by using line break and display it on the page (ie. On the DOM)
    
function joinWords(morseTranslation){
    const body = document.getElementsByTagName("body")[0];
    const pElement = document.createElement("p");
    pElement.innerText = `"${userInput}" in morse is: \n` + morseTranslation.join("\n");
    body.appendChild(pElement);
}

    //   Chain the three functions.
    //   Example:
    //   "Hello" gives you
    //   ....
    //   .
    //   .-..
    //   .-..
    //   ---
      
toJs()
.then(morseJs => toMorse(morseJs))
.then(morseArray => joinWords(morseArray))
.catch(err => console.error(err))