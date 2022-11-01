Array1 = ["a", "b", "c", "d"];
Array2 = ["e", "f", "g", "h", "a", "i", "j"];
let x = Array1[Symbol.iterator]();
let y = Array2[Symbol.iterator]();

let a = x.next();

console.log(x.next(), y.next());
