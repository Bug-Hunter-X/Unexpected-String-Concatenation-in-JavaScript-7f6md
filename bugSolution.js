function myFunction(a, b) {
  // Type checking to ensure both inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Error: Inputs must be numbers";
  }
  return a + b;
}

console.log(myFunction(1, '2')); // Output: Error: Inputs must be numbers
console.log(myFunction(1, 2));    // Output: 3

//Alternative solution using explicit type conversion:
function myFunction2(a, b) {
  return Number(a) + Number(b);
}
console.log(myFunction2(1, '2')); // Output: 3