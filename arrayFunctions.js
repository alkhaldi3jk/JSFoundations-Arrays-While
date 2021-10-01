/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */

function isArrayLengthOdd(numbers) {
  if (numbers.length % 2 === 1) {
    return true;
  } else {
    return false;
  }
}
// Your code here

/**
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
function isArrayLengthEven(numbers) {
  if (numbers.length % 2 === 1) {
    return false;
  } else {
    return true;
  }
}
//isArrayLengthEven([1, 2, 3])
//console.log(isArrayLengthEven([1, 2, 3]))
//isArrayLengthEven([1, 2, 3, 4])
//console.log(isArrayLengthEven([1, 2, 3, 4]))

/**
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
function addLailaToArray(instructors) {
  instructors.push("Laila");
  return instructors;
}

addLailaToArray(["Mshary", "Hasan"]);
console.log(addLailaToArray(["Mshary", "Hasan"]));
/**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
function eliminateTeam(teams) {
  return teams.pop();
}

/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */
function secondHalfOfArrayIfItIsEven(fruits) {
  if (fruits.length % 2 === 0) {
    return fruits.slice(fruits.length / 2, fruits.length);
    // fruit.length is the length of any arry that we assign
    // to the function (in this case fruits)
  } else {
    return [];
  }
}

/**
 * youGottaCalmDown(shout):
 * - receives a string `shout`
 * - returns the string `shout` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use number method .indexOf()
 * - Use string method .slice()
 */
function youGottaCalmDown(shout) {
  const x = shout.indexOf("!");
  //the string is concedered an array
  // x = an element in the array
  if (x < 0) {
    return shout;
    //we are returning the array if x is not doublicated
  } else {
    return shout.slice(0, x + 1);
    //if x was doublicated we will slice the doubllicated elements
  }
}

let shout = "shout!!!!";
youGottaCalmDown(shout);
console.log(youGottaCalmDown(shout));

module.exports = {
  isArrayLengthOdd,
  isArrayLengthEven,
  addLailaToArray,
  eliminateTeam,
  secondHalfOfArrayIfItIsEven,
  youGottaCalmDown,
};
