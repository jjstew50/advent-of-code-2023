//write a function that will parse through a txt file by each line and will ignore the letters but add the numbers together
//the function will return the sum of all the numbers in the file

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'input.txt');

const readInput = () => {
    return fs.readFileSync(filePath, { encoding: 'utf-8' });
    }

const parseInput = () => {
    const input = readInput();
    const inputArray = input.split('\n');
    console.log(inputArray)
    return inputArray;
}

const sumInput = () => {
    const inputArray = parseInput();
    let sum = 0;
    inputArray.forEach((line) => {
        const match = line.match(/\d+/g) || [];
        if (match) {
            console.log(match);
            const firstDigit = match[0];
            const lastDigit = match[match.length - 1];
            console.log("FIRST DIGIT: ", String(firstDigit).substring(0,1))
            const number = String(firstDigit).substring(0,1) + String(lastDigit).substring(lastDigit.length-1,lastDigit.length);
            console.log(number);
            sum += Number(number);
          } else {
            console.log("No digit found in the string.");
          }
    })
    return sum;
}

console.log(sumInput());
