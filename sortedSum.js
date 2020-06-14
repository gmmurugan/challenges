// lets take [ 5, 9, 8 ]
// split the array into 
// s1 - 5 - sort them and do n*s1[i]
// s2 - 5, 9 - s2 1*5 + 2*9 = 
// s3 - 5,9,8 - sort them as [ 5, 8, 9 ]  --> 1*5+2*8+3*9 = sum3
// total - sum1+sum2+sum2 mod 10^9+7

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

