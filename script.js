const pswdBox = document.getElementById("password");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const specialChar = "@#$%^&*{}|-="
const number = "0123456789";

const length = 12;

const allChar = upperCase + lowerCase + specialChar + number;


function generatePswd(){
    let password = "";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += specialChar[Math.floor(Math.random()*specialChar.length)];
    password += number[Math.floor(Math.random()*number.length)];

    while(length>password.length){
        password += allChar[Math.floor(Math.random()*allChar.length)];
    }
    pswdBox.value = password;
}

function copyText(){
    pswdBox.select();
    document.execCommand("copy");
}

const imgElement = document.querySelector(".display img");

imgElement.addEventListener("click", ()=>{
    copyText();
});

