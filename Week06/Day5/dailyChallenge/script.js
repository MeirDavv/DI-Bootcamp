document.addEventListener("DOMContentLoaded",()=>{
    const form = document.querySelector("form");
    const body = document.querySelector("body");

    form.addEventListener("submit", function(e){
        e.preventDefault();
        const words =[];
        const data = new FormData(form);
        for (const [,value] of data){
            words.push(value);
        }
        anagramChecker(words);
    });

    function anagramChecker(words){
        const transformedWords = transformWord(words);
        let output ="";
        if(transformedWords[0] === transformedWords[1])
            output = `${words[0]} is an anagram of ${words[1]}`;
        else
            output = `${words[0]} is not an anagram of ${words[1]}`;

        let pElement = document.createElement("p");
        pElement.innerText = output;
        body.appendChild(pElement);
    }

    function transformWord(words){
        const transformedWords =[];
        for (const word of words){
            //Trim, lowercase, sort, and join the word
            let transformedWord = word.replace(/\s+/g, '').toLowerCase().split("").sort().join("");
            transformedWords.push(transformedWord);
        }
        return transformedWords;
    }
})
