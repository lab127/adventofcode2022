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
  total += count;
}

// masih salah
console.log(total);
