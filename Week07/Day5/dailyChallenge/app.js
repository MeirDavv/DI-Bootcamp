import express from 'express';

import path from 'path';
import { fileURLToPath } from 'url';

import {getRandomEmojis, shuffle} from './helper.js'


const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname + './public')));
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
