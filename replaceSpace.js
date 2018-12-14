const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputString = "this is not empty";

function askQuestion(compressString) {
  rl.question("Give me a string", input => {
    console.log(`the string you gave is ${input}`);
    inputString = input;

    rl.close();
    compressString();
  });
}

//returns the first white space value
function compressString() {
  let string = inputString.trim().split(/\s+/);
  inputString = string[0];
  for (let i = 1; i < string.length; i++) {
    inputString = inputString.concat("%20", string[i]);
  }
  console.log(inputString);
}

askQuestion(compressString);
