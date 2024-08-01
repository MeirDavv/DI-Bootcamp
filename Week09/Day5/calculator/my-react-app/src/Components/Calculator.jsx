import React,{useState, useRef} from "react";

export default function Calculator(){

    const [calculation, setCalculation] = useState(0);
    const num1Ref = useRef(null);
    const num2Ref = useRef(null);
    const operatorRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const num1 = parseFloat(num1Ref.current.value);
        const num2 = parseFloat(num2Ref.current.value);
        const operator = operatorRef.current.value;

        let result = 0;
        switch(operator){
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num1 / num2;
                break;
            default:
                break;

        }
        setCalculation(result);


    }
        return (
            <>
                <h4>Calculating Two Numbers</h4>
                <form onSubmit={handleSubmit}>
                    <input ref={num1Ref} type="number" />
                    <select ref={operatorRef} >
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                    </select>
                    <input ref={num2Ref} type="number" />
                    <input type="submit" value="Calculate" />
                </form>
                <h1>{calculation}</h1>

            </>
    )
}