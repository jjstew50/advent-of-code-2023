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
    return inputArray;
}

function getWins(){
    var sum = 1;
    const inputArray = parseInput();
    timeArr = inputArray[0].replace(/\s+/g, ' ').trim().split(' ');
    distanceArr = inputArray[1].replace(/\s+/g, ' ').trim().split(' ');
    for (let i = 1; i < timeArr.length; i++){
        sum = sum * getPotentialDistances(timeArr[i], distanceArr[i]).length;
    }
    console.log("SUM: ", sum)
}

function getPotentialDistances(time, record){
    const potentialDistances = [];
    for (let i = 0; i < time; i++){
        speed = time - i;
        if (speed*i > record){
            potentialDistances.push(speed*i);
        }
    }
    return potentialDistances;
}


getWins();