// minimum-swap.js
// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    console.log(arr, '=> given inputs')
    let count = 0
    let index = 1
    while(index <= arr.length) {
        let value = arr[index-1]
        if(index!==value) {
        [arr[index - 1], arr[value - 1]] = [arr[value - 1], arr[index - 1]];
        count++
        }
        else { index++ }
    }
    return count
}

let arr = [4,5,6,3,2]
const result = minimumSwaps(arr)
console.log('Minimum Swap is : ', result)
