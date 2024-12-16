import hofarray from "./Array methods/reverse.js";
import loopfuction from "./Array methods/reverse.js";
import results from "./Array methods/reverse.js";
import data from "./data.js";
// loopfuction();
// console.log(results);
// console.log(hofarray);

// for (const d of data.reverse()) {
//   console.log(`${d.date}| ${d.maxTemp}`);
// }

const isPalendrome = (word) => {
  let array = [];
  let revArray = [];
  for (const w of word) {
    array.push(w);
    revArray.push(w);
  }
  return array.toString() === revArray.reverse().toString();
};

console.log(isPalendrome("civic") ? "Is a palendrom" : "not a palendrome");
