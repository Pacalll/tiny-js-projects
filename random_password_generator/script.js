// Random Password Generator

function generatePassword(){
    const passwordLength = document.getElementById('length').value;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;
    const output = document.getElementById('result');
    
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "1234567890";
    const symbolChars = "!@#$%^&*()_+{}:<>?~`-=][;'/.,";

    if(passwordLength<=0){
        output.textContent = "Password length must be at least 1 !";
        return -1;
    }

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(allowedChars.length === 0){
        output.textContent = "At least 1 set of character neeeds to be selected";
        return -1;
    }

    for(let x =0; x< passwordLength; x++){
        const randomIndex = Math.floor(Math.random()* allowedChars.length);
        password += allowedChars[randomIndex];
    }
    output.textContent = password;
    return 0;
}
