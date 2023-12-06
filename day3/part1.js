const { checkPrime } = require('crypto');
const fs = require('fs');
const { get } = require('http');
const path = require('path');

// const filePath = path.join(__dirname, 'practice_input.txt');
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

const symbolRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
const symbolRegex1 = /[!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/;


function getNumbersTouchingSymbol(matrix, symbol) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result = [];
  
    // Helper function to check if coordinates are within the matrix bounds
    const isValid = (row, col) => row >= 0 && row < rows && col >= 0 && col < cols;

    function getFullNumber(row, col, matrix, num){
        const myTuple = [num, row, col, 1];
        number = checkLeft(row, col, matrix, num, myTuple)
        number = checkRight(row, col, matrix, number, myTuple)
        myTuple[0] = number;
        return number, myTuple;
    }

    function checkLeft(row, col, matrix, num, myTuple){
        if (!symbolRegex.test(matrix[row][col-1]) && isValid(row, col-1)){
            num = String(matrix[row][col-1]) + String(num);
            myTuple[2] = col-1;
            myTuple[3] += 1;
            return checkLeft(row, col-1, matrix, num, myTuple)
        }
        return num;
    }

    function checkRight(row, col, matrix, num, myTuple){
        if (!symbolRegex.test(matrix[row][col+1]) && isValid(row, col+1)){
            num = num + matrix[row][col+1];
            myTuple[3] += 1;
            return checkRight(row, col+1, matrix, num, myTuple)
        }
        return num;
      }
  
    // Iterate through each cell in the matrix
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        // Check if the current cell contains the specified symbol
        if (symbolRegex1.test(matrix[i][j])) {
          // Check all eight directions for contiguous sequences of digits
          const directions = [
            [-1, 0],   // Up
            [1, 0],    // Down
            [0, -1],   // Left
            [0, 1],    // Right
            [-1, -1],  // Diagonal Up-Left
            [-1, 1],   // Diagonal Up-Right
            [1, -1],   // Diagonal Down-Left
            [1, 1],    // Diagonal Down-Right
          ];

          var numList = new Set();
  
          directions.forEach(([rowDiff, colDiff]) => {
            let nextRow = i;
            let nextCol = j;
            if (isValid(nextRow+rowDiff, nextCol+colDiff)){
                const nextValue = matrix[nextRow+rowDiff][nextCol+colDiff];
                if(!isNaN(Number(nextValue))){
                    var num, tuple = getFullNumber(nextRow+rowDiff, nextCol+colDiff, matrix, nextValue)
                    numList.add(tuple);
                }
            }
            else{
                console.log("INVALID")
            }
            console.log(numList)
            result.push(...numList);
          });
        }
      }
    }

    console.log(new Set(result))
    const uniqueArrays = Array.from(new Set(result.map(JSON.stringify)), JSON.parse);
    var sum = 0;
    uniqueArrays.forEach((array) => {
        sum += Number(array[0]);
    })
  
    return sum;
  }

  var matrix = parseInput();
  
  const result = getNumbersTouchingSymbol(matrix, '*');
  console.log(result);
  