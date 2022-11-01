function* display() {
  console.log("First Statemnet");
  yield;
  console.log("Second Statemnet");
  console.log("Third Statemnet");
  yield;
  console.log("Fourth Statemnet");
}

let control = display();
console.log(control.next());
console.log(control.next());
