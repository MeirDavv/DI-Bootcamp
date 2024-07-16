document.addEventListener("DOMContentLoaded", () => {
    const apiKey = '3d770f1aaeeeb87db536b10b'
    const errorDiv = document.getElementById("errorDiv");
    const fromCurrencySelectElement = document.getElementById("fromCurrency");
    const toCurrencySelectElement = document.getElementById("toCurrency");
    const formElement = document.querySelector("form");
    const convertedAmount = document.getElementById("convertedAmount");
    const amount = document.getElementById("amount");
    errorDiv.style.display = 'None';
    
    showCurrencies();

    formElement.addEventListener("submit", async (e) => {

        e.preventDefault();

        const from = fromCurrencySelectElement.value;
        const to = toCurrencySelectElement.value;

        const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}`
        
        try{
            const response = await fetch(url);
            const data = await response.json();
            const conversionRate = data.conversion_rate;

            errorDiv.style.display = 'none';
            convertedAmount.innerText = conversionRate * amount.value;
        }
        catch(err){
            errorDiv.style.display = 'block';
            console.error(err);
        }
    });
    
    
    async function showCurrencies(){
        
        url = `https://v6.exchangerate-api.com/v6/${apiKey}/codes`
        const response = await fetch(url);
        const data = await response.json();
        const currencies = data.supported_codes;

        for(const currency of currencies){
            const currencyName = currency[0] + '-' + currency[1];
            const optionElement = document.createElement('option');
            optionElement.setAttribute("value", currency[0]);
            optionElement.innerText = currencyName;
            fromCurrencySelectElement.appendChild(optionElement.cloneNode(true));
            toCurrencySelectElement.appendChild(optionElement.cloneNode(true));
        }
    }

});