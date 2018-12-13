const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const charType = 64;
var givenString = "This is a test";

var unique = true;
var chars = new Array(charType);

for (var i = 0; i < charType; i++) {
  chars[i] = true;
}

function askQuestion(callback, runTest) {
  rl.question("Give me a string...", answer => {
    console.log(`Thank you for your string: ${answer}`);
    givenString = answer;

    rl.close();
    callback();
    runTest();
  });
}

function runTest() {
  if (givenString.length > 128) unique = false;
  for (var i = 0; i < givenString.length && unique; i++) {
    if (chars[givenString.charAt(i).charCodeAt(0) - 65] === true) {
      chars[givenString.charAt(i).charCodeAt(0) - 65] = false;
    } else unique = false;
  }
  console.log(`the string is unique is ${unique}`);
}

function printString() {
  console.log(`the string is ${givenString}`);
}

askQuestion(printString, runTest);
