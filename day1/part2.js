//write a function that will parse through a txt file by each line and will ignore the letters but add the numbers together
//the function will return the sum of all the numbers in the file

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'input.txt');

const numbersSpelled =['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
const wordPattern = numbersSpelled.join('|');
const regexPattern = new RegExp(`(${wordPattern}|\\d+)`, 'g');

const numberMapping ={
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five":5,
    "six":6,
    "seven":7,
    "eight":8,
    "nine":9,
    // "zero":0
}


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
        const match = line.match(regexPattern) || [];
        if (match) {
            console.log(match);
            const firstDigit = match[0];
            const lastDigit = match[match.length - 1];
            // console.log("FIRST DIGIT: ", checkNumber(firstDigit, true))
            // console.log("LAST DIGIT: ", checkNumber(lastDigit, false))

            const number = String(checkNumber(firstDigit, true)) + String(checkNumber(lastDigit, false));
            console.log("NUMBER: ",number);
            sum += Number(number);
          } else {
            console.log("No digit found in the string.");
          }
    })
    return sum;
}

function checkNumber(num, first){
    // console.log("CHECKING NUMBER: ", num)
    // console.log("CHECKING NUMBER TYPE: ", Number(num))
    // console.log("CHECKING NUMBER TYPE: ", Number(num) !== NaN)
    var check = checkType(num);
    // console.log("CHECKING NUMBER TYPE: ", check)
    if (check){
        if (first){
            return String(num).substring(0,1);
        } else {
            return String(num).substring(num.length-1,num.length)
        }
    }
    return numberMapping[num];
}

function checkType(value) {
    // console.log("CHECKING TYPE: ", value)
    // console.log("CHECKING TYPE 1: ", !isNaN(Number(value)))
    if (!isNaN(value) && typeof value !== 'object') {
      return true;
    } else if (typeof value === 'string' && !isNaN(Number(value))) {
      return true;
    } else if (typeof value === 'string') {
      return false;
    } else {
      return undefined;
    }
  }

console.log(sumInput());
