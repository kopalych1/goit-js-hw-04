function filterArray(numbers, value) {
  if (typeof value !== 'number' || isNaN(value))
    throw new TypeError(
      `Expected Array of numbers, number; got: ${typeof numbers}, ${typeof value}`
    );

  return numbers.filter(number => number > value);
}

console.log('----- TASK 3 -----');
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
console.log('');
