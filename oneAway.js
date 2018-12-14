const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(compareStrings) {
  rl.question("Give me two strings \n first string: ", input1 => {
    rl.question(" second string ", input2 => {
      console.log(`Your first string is ${input1}`);
      console.log(`Your second string is ${input2}`);

      rl.close;
      compareStrings(input1, input2);
      process.exit();
    });
  });
}

function compareStrings(input1, input2) {
  const diff = input1.length - input2.length;
  let steps = 0;
  if (diff === 0) {
    for (let i = 0; i < input1.length && steps < 2; i++) {
      if (input1.charAt(i) != input2.charAt(i)) {
        steps++;
      }
    }
  }

  if (diff === 1 || diff === -1) {
    for (
      let i = 0, j = 0;
      i < input1.length && j < input2.length && steps < 2;
      i++, j++
    ) {
      if (input1.charAt(i) != input2.charAt(j)) {
        if (
          input1.length > input2.length &&
          input1.charAt(i + 1) == input.charAt(j)
        ) {
          steps++;
          i++;
        } else if (
          input1.length < input2.length &&
          input1.charAt(i) == input.charAt(j + 1)
        ) {
          steps++;
          j++;
        } else {
          steps = 2;
        }
      }
    }
    if (steps === 0) steps++;
  } else steps = 2;

  if (steps < 2) console.log(`The two steps are ${steps} away from each other`);
  else console.log("The two steps are more than 2 away");
}

askQuestion(compareStrings);
