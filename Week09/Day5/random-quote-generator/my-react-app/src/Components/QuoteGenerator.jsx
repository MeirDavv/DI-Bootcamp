import React,{useState} from "react";
import quotes from "./QuotesDatabase";

function randomIndex(array){
    return Math.floor(Math.random() * array.length);
}

const colors = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#8E44AD", "#E74C3C", "#2ECC71", "#3498DB", "#9B59B6", "#1ABC9C"];

function randomColor() {
    return colors[randomIndex(colors)];
}

const QuoteGenerator = () => {
    const [indexQuote, setIndexQuote] = useState(randomIndex(quotes))
    const [color, setColor] = useState(randomColor());

    const handleClick = () => {
        let newIndex = randomIndex(quotes);
        // Ensure a different quote is selected
        while (newIndex === indexQuote) {
            newIndex = randomIndex(quotes);
        }
        setIndexQuote(newIndex);
        setColor(randomColor());
    };

    const {quote, author} = quotes[indexQuote];

    return(
    <div style={{backgroundColor: color, height: "100vh", width: "100vw" }}>
        <div style={{backgroundColor:'white', padding: "50px", width: "800px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <h1 style={{color:color}}>"{quote}"</h1>
            <h4 style={{color:color, alignSelf: 'flex-end'}}>{author}</h4>
            <button onClick={handleClick} style={{ backgroundColor: color, color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }}>New Quote</button>
        </div>
    </div>

)
}

export default QuoteGenerator;