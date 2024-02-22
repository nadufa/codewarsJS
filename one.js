// console.log('1')
//
//
// // 6 kyu
//
// // Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
// //
// //     Examples:
// //
// // * 'abc' =>  ['ab', 'c_']
// // * 'abcdef' => ['ab', 'cd', 'ef']
//
// function solution(str){
//     const arr = str.split('')
//     let result = []
//     for (let i = 0; i < arr.length; i += 2 ) {
//         const next = arr[i+1] ?? '_'
//         result.push(arr[i] + next)
//     }
//     return result
// }
//
// console.log(solution('abc'))
// console.log(solution('abcdef'))


// 6 kyu


// Given an array of integers, find the one that appears an odd number of times.
//
//     There will always be only one integer that appears an odd number of times.
//
//     Examples
//     [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// function findOdd(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let countOfEnteries = 1
//         for (let j = 0; j < arr.length; j++) {
//             if (i !== j && arr[i] === arr[j]) {
//                 countOfEnteries++
//             }
//         }
//         if (countOfEnteries % 2 !== 0) {
//             return arr[i]
//         }
//     }
// }
//
// console.log(findOdd([7]))
// console.log(findOdd([0]))
// console.log(findOdd([1,1,2]))
// console.log(findOdd([0,1,0,1,0]))
// console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))



// 7 kyu

// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
//
//     You can assume all values in the array are numbers.

function smallEnough(arr, limit) {
    return  arr.filter(el => el <= limit).length === arr.length
}

console.log(smallEnough([66, 101], 200))
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100))
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107))
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120))
