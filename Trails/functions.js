let numArray = [10, 20, 0, -10, 15, 28, -1000, 42, 7];

function returnEven(array) {
    for (let i in array) {
        if (array[i] % 2 !== 0) {
            array.splice(i, 1);
        }
    }
    return array;
}

console.log(numArray);                  // (9) [10, 20, 0, -10, 15, 28, -1000, 42, 7]
let newArray = returnEven(numArray);
console.log(newArray);                  // (7) [10, 20, 0, -10, 28, -1000, 42]
console.log(numArray);                  // (7) [10, 20, 0, -10, 28, -1000, 42]