const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given
// array?

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();


console.log('Results for the tinyArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

/*results to compare
extraLargeArray insert function time: 772.826584 ms
extraLargeArray append function time: 4.469625 ms

largeArray insert function time: 7.077791 ms
largeArray append function time: 419.709 microseconds

mediumArray insert function time: 142.167 microseconds
mediumArray append function time: 83.416 microseconds

smallArray insert function time: 38.208 microseconds
smallArray append function time: 54.333 microseconds

tinyArray insert function time: 29.375 microseconds
tinyArray append function time: 48 microseconds
*/



/*The pattern explained

Both functions have an O(n) run time, however the append is far faster in a worst case
scenario where the array passed in is larger than around 100 elements. If the array
is under 100ish elements the insert function has a better run time. But in general,
the append function scales better especially when testing worst case scenarios. This is
obvious based off looking at the test results of each array size being passed into each
function. The append function is better because it uses the .push method which just adds
an index onto the back of each array without changing any other indexes. The insert function
on the other hand uses the .unshift method which adds an element to the front of the array
but also re-indexes every other element to plus one index which is why it's run time can end
up being exponetially larger.
*/