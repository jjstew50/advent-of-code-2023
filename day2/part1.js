const fs = require('fs');
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

const red = 12
const green = 13
const blue = 14

const sumInput = () => {
    var totalCount = 0;
    const inputArray = parseInput();
    inputArray.forEach((line) => {
        gameOverall = line.split(':')
        let redCount = 0;
        let blueCount = 0;
        let greenCount = 0;
        let over = false;
        console.log("\nGAME OVERALL: ", gameOverall)

        gameOverall[1].split(";").forEach((game) => {
            console.log("GAME: ", game)
            let subsets = game.split(",")
            subsets.forEach((subset) => {
                if (String(subset).includes('red')){
                    redNum = Number(String(subset).split(" ")[1]);
                    console.log("RED NUM: ", redNum)
                    if (redNum > red){
                        over = true;
                        return;
                    }
                    redCount += redNum;
                }
                if (String(subset).includes('blue')){
                    blueNum = Number(String(subset).split(" ")[1]);
                    console.log("BLUE NUM: ", blueNum)
                    if (blueNum > blue){
                        over = true;
                        return;
                    }
                    blueCount += blueNum;
                }
                if (String(subset).includes('green')){
                    greenNum = Number(String(subset).split(" ")[1]);
                    console.log("GREEN NUM: ", greenNum)
                    if (greenNum > green){
                        over = true;
                        return;
                    }
                    greenCount += greenNum;
                }
            })
        })
        if (over == false){
            console.log("TOTAL COUNT INCREMENTED GAME: ", Number(gameOverall[0].split(" ")[1]))
            totalCount += Number(gameOverall[0].split(" ")[1]);
        }
    })
    console.log("TotalCount: ", totalCount)
    // console.log(inputArray)
}

sumInput(); 
    
