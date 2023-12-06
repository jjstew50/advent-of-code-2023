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

function getWins(){
    var sum = 1;
    const inputArray = parseInput();
    console.log(inputArray)
    time = inputArray[0].replace(/\s/g, '').split(':')[1];
    distance = inputArray[1].replace(/\s/g, '').split(':')[1];
    console.log("DISTANCE: ", distance)
    console.log("TIME: ", time)
    // for (let i = 1; i < timeArr.length; i++){
        // console.log("TIME: ", timeArr[i])
        sum = sum * getPotentialDistances(time, distance).length;
    // }
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
    console.log(potentialDistances)
    return potentialDistances;
}


getWins();