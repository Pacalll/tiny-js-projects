//CURRENCY APP

const apiKey = "xx";
const apiURL = "https://api.exchangeratesapi.io/v1/latest?access_key="+apiKey;
let currencyList = [];
let currencyRates = [];
const result = document.getElementsByClassName("resultoutput");

function getCurrencies_from_json(){
    fetch("currencies.json")
    .then(response => response.json())
    .then(data => {
        currencyList = data; 
        addCurreniestoHTML();
        getCurrencieValue_from_api();
    })
    .catch(error => console.error("Error with JSON file:", error));
};

async function getCurrencieValue_from_api(){
    try{
        const response = await fetch(apiURL);
        if(!response.ok){
            throw new Error("Error Bad status code from API !");
        }
        const data = await response.json();
        if (!data.rates){
            throw new Error("Error Invalid API response format!");
        }

        Object.entries(data.rates).forEach(([key, value]) => {
            currencyRates.push({ currency: key, rate: value });
        });
    }
    catch(error){
        console.error("Error while fetching data from API !", error);
        result[0].textContent = "Error fetching data from API. Please try again later.";
    } 
}

function addCurreniestoHTML() {
    if (!currencyList || currencyList.length === 0) {
        console.error("Error: Currency list is empty!");
        return;
    }
    const currencyFromSelect = document.getElementById("currencyfrom");
    const currencyToSelect = document.getElementById("currencyto");

    currencyList.forEach(currency => {
        const createOption = (selectElement) => {
            const option = document.createElement("option");
            option.textContent = `${currency.shortName} - ${currency.fullName}`;
            option.value = currency.shortName;
            selectElement.appendChild(option);
        };

        createOption(currencyFromSelect);
        createOption(currencyToSelect);
    });
};

function convert(){
    const currencyto = document.getElementById("currencyto").value;
    const currencyfrom = document.getElementById("currencyfrom").value;
    const amount = document.getElementById("amount").value;
    if((isNaN(amount) || ( amount.trim() === "") || amount < 0)){
        throw new Error("Error Input is not a valid number !");
    }else{
        const toRate = currencyRates.find(item => item.currency === currencyto);
        const fromRate = currencyRates.find(item => item.currency === currencyfrom);
        if(!fromRate || !toRate){
            result[0].textContent = "Error: Invalid currency selected!";
            throw new Error("Error one of the selected currencies is invalid !");
        }
        let amountInEur = amount / fromRate.rate;
        let resultCurr = amountInEur * toRate.rate;

        result[0].textContent = resultCurr.toFixed(10);
    }
};

getCurrencies_from_json();