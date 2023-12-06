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
    time = inputArray[0].replace(/\s/g, '').split(':')[1];
    distance = inputArray[1].replace(/\s/g, '').split(':')[1];
    sum = sum * getPotentialDistances(time, distance).length;
    console.log("SUM: ", sum)
}

function getPotentialDistances(time, record){
    const potentialDistances = [];
    for (let i = 0; i < time; i++){
        speed = time - i;
        // console.log("VALUES: ", speed, time, i)
        if (speed*i > record){
            potentialDistances.push(speed*i);
        }
    }
    return potentialDistances;
}


getWins();