import * as fs from "fs";
import * as path from "path";

const inputFile = fs.readFileSync(
  path.resolve(__dirname, "./input.txt"),
  "utf-8"
);

const rucksacks = inputFile.split("\n");

const itemInBothCompartments = (rucksack: string) => {
  const compartmentLength = rucksack.length / 2;
  const compartments = rucksack.split("");
  const compartment1 = compartments.slice(0, compartmentLength);
  const compartment2 = compartments.slice(compartmentLength, rucksack.length);

  const itemInCompartments = compartment1.filter((element) =>
    compartment2.includes(element)
  );

  if (itemInCompartments.length !== 1) return [itemInCompartments[0]];

  return itemInCompartments;
};

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

let total = 0;
for (let i = 0; i < rucksacks.length; i++) {
  const rucksack = rucksacks[i];
  let count = alphabet.indexOf(itemInBothCompartments(rucksack)[0]);
  total += count + 1;
}

console.log(total);

// versi 2 loop memang lebih joss
let sumTotal = 0;
for (let i = 0; i < rucksacks.length; i++) {
  let comp1 = rucksacks[i].slice(0, rucksacks[i].length / 2);
  let comp2 = rucksacks[i].slice(rucksacks[i].length / 2, rucksacks[i].length);
  for (let j = 0; j < comp1.length; j++) {
    if (comp1.includes(comp2[j])) {
      sumTotal += alphabet.indexOf(comp2[j]) + 1;
      break;
    }
  }
}

console.log("sumTotal ", sumTotal);
