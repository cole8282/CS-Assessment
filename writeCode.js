//1 sumZero
//Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

function addToZero(arr) {
  for (let i = 0; i < arr.length; i++) {
   for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === 0) {
      return true;
    }
   }
  }
  return false;
}

// console.log(addToZero([]));
// // -> False

// console.log(addToZero([1]));
// // -> False

// console.log(addToZero([1, 2, 3]));
// // -> False

// console.log(addToZero([1, 2, 3, -2]));
// // -> True

//The run time for the above function is O(n * n)



//2 uniqueCharacters
//Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

function hasUniqueChars(str) {
  let newArray = str.split('');
  let newSet = [...new Set(newArray)];

  return newArray.length === newSet.length;
}

// console.log(hasUniqueChars("Monday"));
// -> True

// console.log(hasUniqueChars("Moonday"));
// -> False

//The run time for the above function is O(1)



//3 panagramSentence
//Write a function to check a sentence to see if it is a pangram or not.

function isPangram(str){
  let lowStr = str.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  for (let i = 0; i < alphabet.length; i++) {
    if (lowStr.indexOf(alphabet[i]) < 0) {
      return false;
    }
  }
  return true;
}

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// // -> True

// console.log(isPangram("I like cats, but not mice"));
// // -> False

//The run time of this function is O(n * n) because .indexOf is similar to a for loop.



//4 longestWord
//Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

function findLongestWord(arr) {
  let longestWordLength = arr[0].length;
  for (let i = 0; i < arr.length; i++) {
   if (arr[i].length > longestWordLength) {
     longestWordLength = arr[i].length;
   }
  }
  return longestWordLength;
}

console.log(findLongestWord(["hi", "hello"]));
// -> 5

//The run time of the above function is O(n)