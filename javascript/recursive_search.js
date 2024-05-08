function recursiveSearch(arr, target) {
  // use the array.includes method to find if target is in array
  if (arr.includes(target)) {
    return true
  } else {
    return false
  }
}

if (require.main === module) {
  //  my own tests
  // console.log("Expecting: false");
  // console.log("=>", recursiveSearch([1, 3, 5, 7, 9, 11, 12], 2));

  // console.log("");

  // console.log("Expecting: true");
  // console.log("=>", recursiveSearch([2, 4, 6, 8, 10, 12], 10));

  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
// And a written explanation of your solution
