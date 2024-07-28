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

module.exports = {getRandomEmojis, shuffle};