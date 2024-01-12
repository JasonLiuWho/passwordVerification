// let myString = "hello, world";
// let myRegex = /Hello/;
// let result = myRegex.test(myString);

// console.log(result);

// let waldoIsHiding = "somewhere Waldo is hiding in this text.";
// let waldoRegex = /Waldo/;
// let outcome = waldoRegex.test(waldoIsHiding);

// console.log(outcome)

// let petString = "James has a pet cat."
// let petRegex = /dog|cat|bird|fish/;
// let answer = petRegex.test(petString);

// console.log(answer);

// let ourString = "freeCodeCamp";
// let fccRegex = /freecodecamp/i;
// let done = fccRegex.test(myRegex);

// console.log(done)

// let extractStr = "Extract the world 'coding' from this string.";
// let codingRegex = /coding/;
// let finished = extractStr.match(codingRegex);

// console.log(finished);

// // let testStr = "Repeat, Repeat, Repeat";
// // let ourRegex = /Repeat/g;

// let twinkleStar = "Twinkle, twinkle, twinkle";
// let starRegex = /twinkle/ig;
// let out = twinkleStar;

// console.log(out)

// let humStr = "I'll hum a song";
// let hugStr = "Bear hug";
// let huRegex = /hu./;
// humStr.match(huRegex);
// hugStr.match(huRegex);

// let exampleStr = "Let's have fun with regualr expressions!"
// let unRegex = /.un/;
// let leave = unRegex.test(exampleStr);

// console.log(leave)

// let bgRegex = /b[aiu]g/;

// let quoteSample = "Beware of bug in the above code; I have only prove it correct";
// let vowelRegex = /[aeiou]/ig;
// let skidaddle = quoteSample.match(vowelRegex);

// console.log(skidaddle);

// let quotezSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/ig;
// let bye = quotezSample.match(alphabetRegex);

// console.log(bye);

// let qSample = "Blueberry 3.141592653 are delicious.";
// let herRegex = /[2-6h-s]/ig;
// let good = qSample.match(herRegex);

// console.log(good);

// let wordSample = "3 blind mice.";
// let thierRegex = /[^0-9aeiou]/ig;
// let seeya = wordSample.match(herRegex);

// console.log(seeya);

// console.clear();
// let difficultSpelling = "Mississippi";
// let youRegex = /s+/ig;
// let adios = difficultSpelling.match(youRegex);

// console.log(adios);

// console.clear();

/**
 * Regex
 * 
 * [a-z] => matches lowercase letters
 * [A-Z] => matches uppercase letters
 * [^A-Z] => a non-uppercase character
 * [^a-z] => a non-lowercase character
 * [0-9] => matches any digits
 * [^0-9] => a non-numerical character
 * \d => equivalent to [0-9]
 * \D => equivalent to [^0-9]
 * . => matches any single character except line terminators
 * [A-Za-z] => matches any letter, lowercase or uppercase
 * \w => matches any alphanumeric character
 * \W => special character
 * \s => white space
 * \S => any character other than white space
 * ^ => matches the beginning of an input
 * $ => matches the end of an input
 */

// const regex = /\w/;

// console.log(regex);

// let myString = "?";

// // .match()

// if (myString.match(regex)) {
//     console.log("match");
// } else {
//     console.log("no match");
// }


/*Promise => object represents the eventual completion or failure of an asynchronous operation and its resulting value;

Promise has three states:
    pending: initial state
    fulfilled: the operation was completed successfully
    rejected: the operation failed
*/


const loginForm = document.getElementById("loginForm");

const verifyPassword =()=> {
    
    const userInput = document.getElementById("username");
    const username = userInput.value;
    
    const passwordInput = document.getElementById("password")
    const password = passwordInput.value

    const lowerTest = /[a-z]/
    const upperTest = /[A-Z]/
    const numTest = /\d/
    const specialTest = /\W/

    const display = document.getElementById("display")
    const reqList = document.createElement("ul")
    const reqItem = document.createElement("li")

    if (password.length < 8) {
        const reqItem = document.createElement("li")
        reqItem.innerText = "Password must be at least 8 characters"
        reqList.appendChild(reqItem)
    }

    if(!password.match(lowerTest)) {
        const reqItem = document.createElement("li")
        reqItem.innerText = "Must contain at least one lowercase letter"
        reqList.appendChild(reqItem)
    }

    if(!password.match(upperTest)) {
        const reqItem = document.createElement("li")
        reqItem.innerText = "Must contain at least one uppercase letter"
        reqList.appendChild(reqItem)
    }

    if(!password.match(numTest)) {
        const reqItem = document.createElement("li")
        reqItem.innerText = "Must contain at least one digit (0-9)"
        reqList.appendChild(reqItem)
    }

    if(!password.match(specialTest)) {
        const reqItem = document.createElement("li")
        reqItem.innerText = "Must contain at least one special character"
        reqList.appendChild(reqItem)
    }

    display.appendChild(reqList)

    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*\W).{8,}$/gm

    username.length == 0 ? alert("Please enter a username") : null

    if (password.match(regex)) {
        display.innerText = "Account created"
    } else {
        display.appendChild(reqList)
    }
}

const matchPasswords =()=> {
    const passwordInput = document.getElementById("password")
    const password = passwordInput.value

    const confirmPasswordInput = document.getElementById("confirmPassword")
    const confirmPassword = confirmPasswordInput.value;

    const matchDisplay = document.getElementById("matchDisplay")
    
    if(password != confirmPassword) {
        matchDisplay.innerText = "Passwords do not match"
    } else {
        verifyPassword()
    }
}

loginForm.addEventListener("submit", (e)=> {
    e.preventDefault();

    matchPasswords()
})



