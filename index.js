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

// const isPalendrome = (word) => {
//   let array = [];
//   let revArray = [];
//   for (const w of word) {
//     array.push(w);
//     revArray.push(w);
//   }
//   return array.toString() === revArray.reverse().toString();
// };

// console.log(isPalendrome("civic") ? "Is a palendrom" : "not a palendrome");

// let str = "tenet";
// // let isPalendrome = str.split(", ").reverse().toString() === str;
// let isPalendrome = str.split("").reverse().join("") === str;
// console.log(isPalendrome ? "true" : "false");

// let user = `id,firstName,lastName,email,gender
// 1,changu,gote,cg@hmail,male
// 2,mangu,gote,mg@hmail,male`;

// const csvToArray = (csv) => {
//   let output = [];
//   // for (const row of csv.split("\n")) {
//   //   output.push(row.split(","));
//   // }
//   csv.split("\n").forEach((row)=>output.push(row.split(",")));
//   return output;
// };
// console.log(csvToArray(user));

let user = `id,firstName,lastName,email,gender
1,changu,gote,cg@hmail,male
2,mangu,gote,mg@hmail,male`;

// const csvToArray = (csv) => {
//   let output = [];
//   // for (const elm of csv.split("\n")) {
//   //   output.push(elm);
//   // }
//   let array = csv.split("\n");
//   array.forEach((row) => {
//     let ar = row.split(",");
//     output.push(ar);

//     return output;
//   });
// };
// console.log(csvToArray(user));

// const csveToArray = (csv) => {
//   let output = [];
//   // csv.split("\n").forEach((row) => {
//   //   output.push(row.split(","));
//   return csv.split("\n").map((row) => row.split(","));
//   // return output;
// };
// console.log(csveToArray(user));

// const csvToArray = (csv) => {
//   let output = [];

//   csv.split("\n").forEach((row) => output.push(row.split(",")));
//   return output;
// };
// // console.log(csvToArray(user));

// const convertToObj = (arr) => {
//   let output = [];
//   arr.forEach((ele, index) => {
//     if (index !== 0) {
//       let obj = {};
//       ele.forEach((ele, index) => {
//         obj[arr[0][index]] = ele;
//       });
//       output.push(obj);
//     }
//   });
//   return output;
// };
// // console.log(convertToObj(csvToArray(user)));

// // let doctors = [
// //   { id: 1, name: "Dhumketu", age: 55, speciality: "mechdoc" },
// //   { id: 2, name: "jhataka", age: 50, speciality: "scidoc" },
// // ];

// const findSpecial = (speciality) => {
//   return (
//     doctors.find((ele) => ele.speciality === speciality)?.name || "not found"
//   );
// };

// // console.log(findSpecial("mechdoc"));

// let arrr = [1, 2, 3, 4, 4, 5];

// const find = () => {
//   return arrr.includes();
// };
// // console.log(find(3));

// let doctors = [
//   { id: 1, name: "Dhumketu", age: 55, speciality: "mechdoc" },
//   { id: 2, name: "jhataka", age: 50, speciality: "scidoc" },
// ];

// const findsome = (name) => {
//   let findcity = doctors.find((ele) => ele.name === name);
//   return findcity ? [findcity.age, findcity.speciality] : null;
// };
// let [age, speciality] = findsome("Dhumketu");

// // console.log(age, speciality);

// // const Tasks= function (title){
// //   this.title =title??"My-Tasks";
// //   this.taskList=[]
// //   this.showTasks=function(){
// //     console.log(`--------${this.title}--------`)
// //     this.taskList.forEach((item,index)=>console.log(`${index}.${item}`))
// //   }
// // }

// // 21/12/24 session

// let arr = [6, 5, 3, 1, 8, 7, 2, 4];
// function bubbleSort(arr) {
//   let len = arr.length;
//   let swapped;
//   do {
//     swapped = false;
//     for (let i = 0; i < len - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let temp = arr[i + 1];
//         arr[i + 1] = arr[i];
//         arr[i] = temp;
//         swapped = true;
//       }
//     }
//     len--;
//   } while (swapped);
//   return arr;
// }
// bubbleSort(arr);
// console.log(arr);

// // let cart = [
// //     ['bread', 'butter'],
// //     [ "Jeans", "Tshirt"],
// //     ['charger']
// // ]
// // console.log(cart)
// // cart[3] = "mayo";
// // console.log(cart)
// let arr = [1, -2, 3, -4, 5, -6, 7, -8]
// let neg = [];
// let pos = [];
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] < 0) {
//         neg.push(arr[i])
//     }else {
//         pos.push(arr[i])
//     }
// }
// let res = [...neg, ...pos]
// // console.log(res)
// let arr1 = [1, 3, 5, 7];
// let arr2 = [2, 4, 6, 8];
// let pt1 = 0;
// let pt2 = 0;
// let res = [];
// while (pt1 < arr1.length && pt2 < arr2.length) {
//   if (arr1[pt1] < arr2[pt2]) {
//     res.push(arr1[pt1]);
//     pt1++;
//   } else {
//     res.push(arr2[pt2]);
//     pt2++;
//   }
// }
// while (pt1 < arr1.length) {
//   res.push(arr1[pt1]);
//   pt1++;
// }
// while (pt2 < arr2.length) {
//   res.push(arr2[pt2]);
//   pt2++;
// }
// console.log(res);

// let a = [1, 2, 3, 7];
// let b = [2, 3, 4, 5, 6, 1];
// let setB = new Set(b); //O(m)
// //O(n)
// let counter = 0;
// for (let i = 0; i < a.length; i++) {
//   // O(n)
//   if (setB.has(a[i])) {
//     counter++;
//   }
// }
// if (counter == a.length) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// //O(n+m)

// function findNextGreaterElem(nums) {
//   let stack = new Stack();
//   let res = new Array(nums.length).fill(-1);
//   console.log(res);
//   for (let i = nums.length - 1; i >= 0; i--) {
//     while (!stack.isEmpty() && stack.top() <= nums[i]) {
//       stack.pop();
//     }
//     if (!stack.isEmpty()) {
//       res[i] = stack.top();
//     }
//     stack.push(nums[i]);
//   }
//   console.log(res);
// }
// function isBalanced(str) {
//   let stack = new Stack();
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "(") {
//       stack.push("(");
//     } else if (str[i] === ")") {
//       if (stack.isEmpty() || stack.pop() !== "(") {
//         return 0;
//       }
//     }
//   }
//   return stack.isEmpty() ? 1 : 0;
// }

// function evaluateRPNExpression(str) {
//   let stack = new Stack();
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "+" || str[i] === "-" || str[i] === "*" || str[i] === "/") {
//       let b = stack.pop();
//       let a = stack.pop();
//       let res = eval(a + str[i] + b);
//       stack.push(res);
//     } else {
//       stack.push(str[i]);
//     }
//   }
//   return stack.pop();
// }

// class Queue {
//   constructor() {
//     this.items = [];
//   }
//   enqueue(element) {
//     this.items.push(element);
//   }
//   dequeue() {
//     if (this.isEmpty()) {
//       return "Underflow";
//     } else {
//       this.items.shift();
//     }
//   }
//   front() {
//     if (this.isEmpty()) {
//       return "Underflow";
//     } else {
//       return this.items[0];
//     }
//   }
//   isEmpty() {
//     return this.items.length === 0;
//   }
// }
// let queue = new Queue();
// console.log(queue.isEmpty());
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.dequeue();
// console.log(queue.items);
// queue.dequeue();
// console.log(queue.items);
// console.log(queue.isEmpty());

// class Queue {
//   constructor() {
//     this.stack1 = new Stack();
//     this.stack2 = new Stack();
//   }
//   enqueue(elem) {
//     this.stack1.push(elem);
//   }
//   dequeue() {
//     if (this.stack2.isEmpty()) {
//       while (!this.stack1.isEmpty()) {
//         this.stack2.push(this.stack1.pop());
//       }
//     }
//     return this.stack2.pop();
//   }
//   front() {
//     if (this.stack2.isEmpty()) {
//       while (!this.stack1.isEmpty()) {
//         this.stack2.push(this.stack1.pop());
//       }
//     }
//     return this.stack2.top();
//   }
//   isEmpty() {
//     return this.stack1.length === 0 && this.stack2.length === 0;
//   }
// }

// function longestSubArr(nums, limit) {
//   let left = 0;
//   let queue1 = [];
//   let queue2 = [];
//   let maxLength = 0;
//   for (let right = 0; right < nums.length; right++) {
//     while (
//       queue1.length > 0 &&
//       nums[queue1[queue1.length - 1]] <= nums[right]
//     ) {
//       queue1.pop();
//     }
//     queue1.push(right);
//     while (
//       queue2.length > 0 &&
//       nums[queue2[queue2.length - 1]] >= nums[right]
//     ) {
//       queue2.pop();
//     }
//     queue2.push(right);
//     while (nums[queue1[0]] - nums[queue2[0]] > limit) {
//       left++;
//       if (queue1[0] < left) queue1.shift();
//       if (queue2[0] < left) queue2.shift();
//     }
//     maxLength = Math.max(maxLength, right - left + 1);
//   }
//   return maxLength;
// }
// console.log(longestSubArr([8, 2, 4, 7], 4));

// function printBinaryRep(n) {
//   let queue = []
//   queue.push("1")
//   for(let i = 1; i <= n; i++) {
//       let curr = queue.shift();
//       console.log(i + " -> " +curr)
//       queue.push(curr + "0")
//       queue.push(curr + "1")
//   }
// }
// printBinaryRep(6)

// object destructuring

// let { name, gender } = {
//   name: "chandrashekhar",
//   gender: "male",
// };

// console.log(name);

const obj = {
  name: "Chandrashekhar",
  gender: "male",
};
let { name: firstName, gender: sex } = obj;

// console.log(`my name is ${firstName} and iam ${sex} `);

const cb = {
  stIndex: 1234,
  stName: "csb",
  stDetails: {
    name: "chandu",
    ceo: "shantaram",
    hq: "rangana,yavatmal",
  },
};
let {
  stIndex: index,
  stName: cName,
  stDetails: { name: company, ceo, hq },
} = cb;

let users = {
  name: "SURAJ",
  gender: "male",
};

let products = {
  brand: "Apple",
  price: 1234,
};
// products["storage"] = "123gb";

let productsCopy = { ...users, ...products, storage: "123gb" };

// console.log(productsCopy);
// console.log(products);

//object

let objj = {
  name: "chandrashekhar",
  gender: "male",
};
// objj["email"] = "csb@gmail.com";
// objj.address = "nagpur";
// objj[obj] = "gangapur";
// console.log(objj);

// const { name, gender } = objj;
// console.log(`my name is ${name} and iam ${gender}`);

const { name: userName, gender: ling } = objj;
// console.log(`my name is ${userName} and iam ${ling}`);

//practice 30/12/24
// console.log(parseInt("M7E")); //what does parseInt do? It converts?
// console.log(parseInt(256));
// console.log(parseInt("256mmn"));
// console.log(isNaN(parseInt("M256mmn")));

// console.log(typeof typeof parseInt("234"));
// console.log(isNaN(parseInt("MSAG1789")));

// function abc() {
//   console.log(abc.xyz);
// }
// abc();
// abc.xyz = 400;
// abc.xyz = 200;
// abc();

const numbers = [1, 2, 3, 4, 5];
numbers[100] = 100;
// console.log(numbers);

function jumbo() {
  let obj = { name: "chandu", gender: "male" };
  obj["name"] = "Chandrashekhar";
  console.log(jumbo.abc);
  console.log(obj.name);
}
// obj["name"] = "Chandrashekhar";
jumbo.abc = 400;
// jumbo();

// let object = { name: "shekhar", surname: "bhoyar" };

// function dhum() {
//   let object = { abc: "def", pqr: "xyz" };
//   object.name = "gangadhar";
//   object["surname"] = "shastri";
//   console.log(object);
// }

// dhum();
// console.log(object);

let object = { name: "shekhar", surname: "bhoyar" };
//in this case object got mutated and the reason for this muation is whenever any function takes non primitive data types
//as an argument then it is taken as pass by reference that why it gets mutated but primitive data dosent get mutated
function dhum(obj) {
  // let obj = { name: "gagaram" };
  obj.gender = "male";
  obj.address = "rangana";
  console.log(obj);
}
// dhum(object);
// console.log(object);

let number = 5;
function changeNum(num) {
  num = 8;
  console.log(num);
}
number = 10;
// changeNum(number);
// console.log(number);

let num1 = 5;
num1 = 10;
let nums = [1, 2, 3, 4, 5];
function gang() {
  num1 = 6;
  nums = [1, 2];
  console.log(dhumm);
  dhumm = "setu";
  console.log(dhumm);
  console.log(num1, nums);
  // console.log(dhumm);
}
// let dhumm = "ketu";
let dhumm;
// gang();

num1 = 12;

nums = [0, 9, 8, 7, 6];
// let dhumm;

// console.log(num1);
// console.log(nums);
// let str = "chandu";
let arr = [..."chandu"];
// console.log(arr);

// console.log(isNaN("chandu"));

// console.log(
//   [1, 2].map((num) => {
//     if (num <= 0) return num * 2;
//     return num;
//   })
// );

// function abc() {
//   return 45;
// }
// let value = abc();
// console.log(value);

// function abc() {
//   //nothing
// }
// abc();
// console.log(abc());

function abc() {
  console.log(455);
  return;
}
// abc();
// console.log(abc())

// {
//   function xyz() {
//     return "abc";
//   }
// }
// xyz();

// function outerFunction() {
//   let outvar = "iam from outerfunction";

//   function innerFunction() {
//     console.log(outvar);
//   }

// }
// outerFunction(); //nothing will be shown though function performed its task.
// console.log(outerFunction()); //it will return undefine,because its not returning anything.

function outerFunction() {
  let outvar = "iam from outerfunction";

  function innerFunction(arg) {
    console.log(outvar);
    return arg;
  }
  // innerFunction();
  let gian = innerFunction("mai hu gian");
  return gian;
}
// outerFunction();
// console.log(outerFunction());
// innerFunction(); //it will give reference error because its not accessible outside the outerfunction scope.
// ("use strict");
{
  function pqr() {
    return 24;
  }
}
// pqr();

function mno(a, b) {
  // "use strict";
  a = 100;
  b = 200;
  return a + b; //arguments[0] + arguments[1];
  // console.log(a + b);
}
// console.log(mno(200, 400));
const elements = [
  "apple",
  "grapes",
  "kiwi",
  "banana",
  "mango",
  "orange",
  "gvava",
];
let fruits = elements.slice(2, 5); //return new array
let fruits1 = elements.splice(2, 1, { f1: "pineapple", f2: "custerdapple" }); //mutate the original array
// console.log(fruits);
// console.log(fruits1);
// console.log(elements);

// console.log(ab);
// let ab = 10;

const arrays = [5, 2, 7, 1, 4, 91, 2, 23, 45, 6, 3];
let nummm = arrays.map((num) => num > 40);
// console.log(nummm);

//generate otp function
function generateOtp() {
  let otp = "";
  otp = Math.floor(Math.random() * 1000 + 1000);
  console.log(otp);
  return otp;
}
// generateOtp();
// console.log(generateOtp());

//shorten the name
function shortName(name, maxlength) {
  if (name.length > maxlength) {
    return name.substring(0, 10) + "...";
  }
}
const result = shortName("chandrashekhar", 10);
// console.log(result);

//create password

function createPassword() {
  let password = [];
  let result = password.push(Math.floor(Math.random() * 1000));
  let ultresult = result.toString();
  return ultresult;
}
console.log(createPassword());

function password(maxlength) {
  let password = [];
  let num = "1234567890";
  let symb = "@#$%^&*!";
  let char = "abcdefghijklmnopqrstuvwxyz";
  if (maxlength > 0 && maxlength < 20) {
    for (let i = 0; i < num.length; i++) {
      password.push(i);
    }
    return password;
  }
}
// console.log(password(10));

let obj1 = {
  a: 10,
  b: 20,
  sum() {
    return this.a + this.b;
  },
};
const res = obj1.sum();
// console.log(typeof res);

let AB = "myName";
let CD = "mySurname";
let result1 = AB && CD;
// console.log(result1);


