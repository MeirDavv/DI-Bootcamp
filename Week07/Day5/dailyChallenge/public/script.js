document.addEventListener('DOMContentLoaded', () => {
    const emojiSign = document.getElementById('emojiSign');
    const emojiOptions = document.getElementById('emojiOptions');
    const guessForm = document.getElementById('guessForm');
    const result = document.getElementById('result');
    const totalScore = document.getElementById('totalScore');

    function fetchNewGame(){
        fetch('/get-emoji')
        .then(response => response.json())
        .then(data => {
            emojiSign.textContent = data.correctEmojiSign;
            emojiOptions.innerHTML = data.selectOptions.map(option => `<option value = "${option}">${option}</option>`).join('');
        });
    }

    guessForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        const selectedOption = emojiOptions.value;
        const correctEmojiSign = emojiSign.textContent;

        fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({selectedOption, correctEmojiSign})
        })
        .then(response => response.json())
        .then(data => {
            result.textContent = data.message
            totalScore.textContent = data.totalScore
        })
        fetchNewGame();
    });

    //fetch initial game data
    fetchNewGame();
});