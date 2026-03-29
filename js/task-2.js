function makeArray(firstArray, secondArray, maxLength) {
  if (
    !Array.isArray(firstArray) ||
    !Array.isArray(secondArray) ||
    !Number.isInteger(maxLength)
  )
    throw new TypeError(
      `Expected Array, Array, int; got: ${typeof firstArray}, ${typeof secondArray}, ${typeof maxLength}`
    );

  return [...firstArray, ...secondArray].slice(0, maxLength);
}

console.log('----- TASK 2 -----');
console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 1)); // []
console.log('');
