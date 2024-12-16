import data from "../data.js";
// for (const d of data) {
//   console.log(`${d.date}| ${d.maxTemp}`);
// }

// using function
const loopfuction = () => {
  for (const d of data) {
    console.log(`${d.date}| ${d.maxTemp}`);
  }
};

export default loopfuction;
