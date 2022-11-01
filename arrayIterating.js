let ar = [1, 2, 3, 4, 5, 6, 7];
//Normal indexing

// console.log(ar[0]);
// console.log(ar[1]);

//Using For Loop

// for (let i = 0; i < ar.length; i++) {
//   console.log(ar[i]);
// }

//Map Function

// ar.map((item) => {
//   return ar[item];
// });
// console.log(rs);

//While Loop

// let i = 0;

// while (i < ar.length) {
//   console.log(ar[i]);
//   i++;
// }

//ForEach Method:

// ar.forEach((i, index) => {
//   console.log(ar[i], index);
// });
// console.log(a);

// let n = 0;
// ar.forEach(myFn);
// function myFn(item, n) {
//   console.log(item);
// }

//Every Method:

// const val = (x) => x < 5;
// if (ar.every(val)) {
//   console.log("All are less than 5 Only");
// } else {
//   console.log("No");
// }

// Some
const lessthanFourCheck = (element) => element < 4;
const lessthanFour = ar.some(lessthanFourCheck);

console.log(ar);
if (lessthanFour) {
  console.log("At least one element is less than 4");
} else {
  console.log("All elements are greater than 4 ");
}
