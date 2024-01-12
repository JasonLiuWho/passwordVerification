// const regex = / /;
// let string = "";
// let regex = / /;
// string.match(regex);


let string = "     Hello, World:   ";
let myRegex = /^\s+|\s+$/g;
let testResult = myRegex.test(string);
let matchResult = string.match(myRegex);

console.log(testResult);
console.log(matchResult);