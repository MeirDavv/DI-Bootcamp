document.addEventListener("DOMContentLoaded", () => {
    errorDiv = document.getElementById("errorDiv");
    errorDiv.style.display = 'None';
    try{
        const currencies = await getCurrencies();
        showCurrencies(currencies);

        FormData.addEventListener("submit", async () => {

        });
    }
    catch(error){
        errorDiv.style.display = 'Block';
    }
    

});