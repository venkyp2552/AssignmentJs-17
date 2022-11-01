let lst = ["John", "Rohn", "Danny", "James"];
let res = lst[Symbol.iterator]();
let st = res.next();
// console.log(res.next());
while (!res.next().done) {
  console.log(st);
  st = res.next();
}
