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

// store the data in a variable then export it
// const results = [];

// for (let i = 0; i < 5; i++) {
//   results.push(i);
// }

// export default results;

// use a high order function

const hofarray = Array.from({ length: 5 }, (_, i) => i);

export default hofarray;
