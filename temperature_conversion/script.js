//Temperature Conversion Programm

const textBox = document.getElementById("textBox");
const celsiustofahrenheit = document.getElementById("celsiustofahrenheit");
const celsiustokelvin = document.getElementById("celsiustokelvin");
const kelvintofahrenheit = document.getElementById("kelvintofahrenheit");
const kelvintocelsius = document.getElementById("kelvintocelsius");
const fahrenheittocelsius = document.getElementById("fahrenheittocelsius");
const fahrenheittokelvin = document.getElementById("fahrenheittokelvin");
const result = document.getElementById("result");
let temp;

function convert(){
    if(celsiustofahrenheit.checked){
        temp = Number(textBox.value) * 9 / 5 +32;
        result.textContent = temp.toFixed(1) + `℉`;
    }else if(celsiustokelvin.checked){
        temp = Number(textBox.value) + 273.15;
        result.textContent = temp.toFixed(1) + ` K`;
    }else if(kelvintofahrenheit.checked){
        temp = Number((textBox.value) - 273.15) * 1.8 + 32;
        result.textContent = temp.toFixed(1) + ` ℉`;
    }else if(kelvintocelsius.checked){
        temp = Number(textBox.value) - 273.15;
        result.textContent = temp.toFixed(1) + ` ℃`;
    }else if(fahrenheittocelsius.checked){
        temp = Number(textBox.value -32) * 5/9;
        result.textContent = temp.toFixed(1) + ` ℃`;
    }else if(fahrenheittokelvin.checked){
            temp = Number((textBox.value -32) /1.8) + 273.15;
            result.textContent = temp.toFixed(1) + ` K`;
    }else{
        result.textContent = "Select a unit"
    }

}