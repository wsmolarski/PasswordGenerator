document.addEventListener("DOMContentLoaded", function() {

    const passwordBox = document.getElementById("password");
    const length = 16;

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const symbol = "!@#$%^&*()_+~|}{[]></-=";

    const allChars = upperCase + lowerCase + number + symbol;

    function createPassword() {
        let password = "";
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += number[Math.floor(Math.random() * number.length)];
        password += symbol[Math.floor(Math.random() * symbol.length)];

        while(length > password.length) {
            password += allChars[Math.floor(Math.random() * allChars.length)];
        }
        passwordBox.value = password;
    }
       
    const generateButton = document.getElementById("generateBtn");
    generateButton.addEventListener("click", createPassword);

    const copyButton = document.getElementById("copyBtn");
    copyButton.addEventListener("click", function() {
        if (passwordBox.value) {
            navigator.clipboard.writeText(passwordBox.value).then(() => {
                alert("Password copied to clipboard!");
            })
        }else {
            alert("Generate a password first!");
        }
    });
});