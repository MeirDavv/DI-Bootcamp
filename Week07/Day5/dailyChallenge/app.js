import express from 'express';

import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, './public')));
app.use(express.json());


const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '✨', name: 'Sparkles' },
    { emoji: '🙏', name: 'Folded Hands' },
    { emoji: '👍', name: 'Thumbs Up' },
    { emoji: '💕', name: 'Two Hearts' },
    { emoji: '📍', name: 'Location' },
];

let totalScore = 0;

function getRandomEmojis(){
    const uniqueEmojies = [...emojis];
    const selectOptions = [];

    for (let i=0; i<=3; i++){
        const randomIndex = Math.floor(Math.random() * uniqueEmojies.length);
        selectOptions.push(uniqueEmojies[randomIndex].name);
        uniqueEmojies.splice(randomIndex,1)
    }

    return selectOptions;
}

function shuffle(array){
    let currentIndex = array.length;

    while (currentIndex!=0){
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex --;

        [array[currentIndex],array[randomIndex]] = [array[randomIndex],array[currentIndex]];
    }
}

app.get('/get-emoji', (req,res) => {
    const selectOptions = getRandomEmojis();
    const correctEmojiName = selectOptions[0];
    const correctEmojiSign = emojis.find((obj)=>obj.name === correctEmojiName).emoji;
    
    shuffle(selectOptions);
    
    res.json({correctEmojiSign, selectOptions})
});

app.post('/submit', (req,res)=>{
    const {selectedOption, correctEmojiSign} = req.body;
    const correctEmojiName = emojis.find(e => e.emoji == correctEmojiSign).name;

    let message = "";

    if(selectedOption === correctEmojiName){
        message = 'Correct!';
        totalScore += 1;
    }
    else{
        message = 'Incorrect!';
    }

    res.json({message, totalScore});
})

app.listen(5003, ()=> console.log('Server is running on port 5003'));
