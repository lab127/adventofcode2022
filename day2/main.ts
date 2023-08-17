import * as fs from "fs";
import * as path from "path";

const inputFile = fs.readFileSync(
  path.resolve(__dirname, "./input.txt"),
  "utf-8"
);

// to array
const toArray = inputFile.split("\n");

const rock = /^[ax]|[ax]$/gi;
const paper = /^[by]|[by]$/gi;
const scissor = /^[cz]|[cz]$/gi;

const results = (arr: string[]) => {
  let gameResult = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
      .trim()
      .replace(rock, "rock")
      .replace(paper, "paper")
      .replace(scissor, "scissor");
    gameResult.push(element);
  }
  return gameResult;
};

const gameScore = {
  "rock rock": 3 + 1,
  "rock paper": 6 + 2,
  "rock scissor": 0 + 3,
  "paper rock": 0 + 1,
  "paper paper": 3 + 2,
  "paper scissor": 6 + 3,
  "scissor rock": 6 + 1,
  "scissor paper": 0 + 2,
  "scissor scissor": 3 + 3,
};

// key as string
const arr = results(toArray);
let newArr = [];
const objScoreKeys = Object.keys(gameScore);
let totalScore = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < objScoreKeys.length; j++) {
    if (objScoreKeys[j] === arr[i]) {
      // console.log(gameScore[objScoreKeys[j]]); // simply doesn't work
      const str = objScoreKeys[j] as string;
      const score = gameScore[str as keyof typeof gameScore];

      totalScore += score;
    }
  }
}

console.log("total:", totalScore);
