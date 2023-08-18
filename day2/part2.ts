import * as fs from "fs";
import * as path from "path";

// PART 2
const inputFile = fs.readFileSync(
  path.resolve(__dirname, "./input.txt"),
  "utf-8"
);

let rps = ["BX", "CX", "AX", "AY", "BY", "CY", "CZ", "AZ", "BZ"];
// to array
const toArray = inputFile.split("\n");

let score = 0;
for (let i = 0; i < toArray.length; i++) {
  const arrVal = toArray[i].replace(" ", "");
  const rspVal = rps.indexOf(arrVal);
  if (rspVal > 2 && rspVal <= 5) score += 3;
  if (rspVal > 5) score += 6;
  score += (rspVal % 3) + 1;
}

console.log(score);

// PART 2
// X = lose => 0
// Y = Draw => 3
// Z = Win => 6

// A Y = rock draw => rock rock = 4
// B X = paper lose => paper rock = 1
// C Z = scissor win => scissor rock = 7
