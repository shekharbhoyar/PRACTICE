import data from "../data.js";
// for (const d of data) {
//   console.log(`${d.date}| ${d.maxTemp}`);
// }

// using function
// encapsulated for loop inside a function which make us able to export the iterated data
// const loopfuction = () => {
//   for (const d of data) {
//     console.log(`${d.date}| ${d.maxTemp}`);
//   }
// };

// export default loopfuction;

const results = [];

for (let i = 0; i < 5; i++) {
  results.push(i);
}

export default results;
