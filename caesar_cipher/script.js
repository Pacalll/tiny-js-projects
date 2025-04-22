//Caesar Cipher PROGRAM

const charset = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0","1","2","3","4","5","6","7","8","9",
    " ","!","?",".",",",":",";","(",")","[","]","{","}","@","#","$","%","&","*","-","+","=","<",">","/","|","\\",
    " ","ä","ö","ü","Ä","Ö","Ü","ß","\"","'"
];  
const inputElement = document.getElementById("input");
const outputElement = document.getElementById("output");
const charsetContainer = document.getElementById("charset");
const keyElement = document.getElementById("key");

function transform(encrypt){
    const key = Number((document.getElementById("key").value));
    const shift = encrypt? key : -key;
    const inputText = [...inputElement.value];
    const invalidChar = inputText.find(symbol => charset.indexOf(symbol) ===-1);
    if(invalidChar){
        inputElement.value = "Fehler: Ungültiges Zeichen '" + invalidChar + "' im Text!";
        inputElement.classList.add("error");
        setTimeout(() => {
            inputElement.value = ""; 
            inputElement.classList.remove("error")
        }, 2000);
        
        return;
    }

    inputText.forEach((symbol, index) =>{
        inputText[index] = charset[(charset.indexOf(symbol) + shift) % charset.length];
    });
    outputElement.value = inputText.join("");
}

document.addEventListener("DOMContentLoaded", function() {
    for (const char of charset){
        const span = document.createElement("span");
        span.textContent = char + " ";
        charsetContainer.appendChild(span);        
    };
    for(let x=1; x<=charset.length;x++){
        const keyoption = document.createElement("option");
        keyoption.value = x;
        keyoption.textContent = "Key: " + x;
        keyElement.appendChild(keyoption);
    }
});