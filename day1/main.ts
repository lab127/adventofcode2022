import * as fs from "fs";
import * as path from "path";
// use * as path insteah path

const inputFile = fs.readFileSync(
  path.resolve(__dirname, "./input.txt"),
  "utf-8"
);

// inputFile to array
const inputArr = inputFile.split("\n\n").map((s: string) => {
  return s
    .split("\n") // to array
    .map((i) => +i) // to int
    .reduce((t, n) => t + n); // sum
});

// part 1 get max calories
const maxCalory = (calories: number[]) => {
  let max = 0;
  for (let i = 0; i < calories.length; i++) {
    if (calories[i] > max) {
      max = calories[i];
    }
  }
  return max;
};

console.log("part 1:", maxCalory(inputArr));

let maxThree = inputArr
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((t, n) => t + n);

console.log("part 2:", maxThree);
