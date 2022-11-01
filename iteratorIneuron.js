let str = "iNeuron";
let res = str[Symbol.iterator]();
let r = res.next();
while (!r.done) {
  console.log(r);
  r = res.next();
}
