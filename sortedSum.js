
function sortedSum(a) {
    // Write your code here
    let sum = {}
    let sortedSum = 0
    for ( let i=0; i<a.length; i++){
        sum[i]= a.slice(0,i+1).sort((a,b) => a-b)
        // console.log(sum[i], `each s${i}`)
        sum[i]= sum[i].map((each, index) => (index+1) * each).reduce((a,b)=>a+b)
        // console.log(sum[i], `each f${i}`)
        sortedSum+=sum[i]
        // console.log(sortedSum, 'sortedSum')
    }

    return sortedSum % 1000000007 

}


const result = sortedSum([1000000007]);

console.log(result + '=> is the Result');

