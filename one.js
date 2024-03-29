// console.log('1')

// 6 kyu

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
//
//     Examples:
//
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

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

// function smallEnough(arr, limit) {
//     return  arr.filter(el => el <= limit).length === arr.length
// }
//
// console.log(smallEnough([66, 101], 200))
// console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100))
// console.log(smallEnough([101, 45, 75, 105, 99, 107], 107))
// console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120))


//5 kyu

// Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.
//
//     For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
//
//     As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
//
//     If a string contains all repeating characters, it should return an empty string ("");
//
// † Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.

// function firstNonRepeatingLetter(str) {
//     let arr = str.toLowerCase().split('')
//     for (let i = 0; i < arr.length; i++) {
//         let isNotRepeat = true
//         for (let j = 0; j < arr.length; j++) {
//             if (i !== j && arr[i] === arr[j]) {
//                 isNotRepeat = false
//                 j = arr.length
//             }
//         }
//         if (isNotRepeat) {
//             return str[i]
//         }
//     }
//     return ''
// }
//
// console.log(firstNonRepeatingLetter('a'))
// console.log(firstNonRepeatingLetter('stress'))
// console.log(firstNonRepeatingLetter('moonmen'))
// console.log(firstNonRepeatingLetter('abcabc'))


// 7 kyu

// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?
//
//     Examples:
//
//     input:    output:
//     0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
//     Input may be any positive or negative integer (including 0).
//
// You can assume that all inputs are valid integers.

// function roundToNext5(n){
//     let res = n
//     for (let i = n; i % 5 !== 0; i++){
//         res = i+1
//     }
//     return res
// }
//
// console.log(roundToNext5(0))
// console.log(roundToNext5(2))
// console.log(roundToNext5(-14))


// 6 kyu

// Your task, is to create N×N multiplication table, of size provided in parameter.
//
//     For example, when given size is 3:
//
// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:
//
//     [[1,2,3],[2,4,6],[3,6,9]]

// multiplicationTable = function (size) {
//     let arr = []
//     for (let i = 0; i < size; i++) {
//         arr.push([])
//         if (i === 0) {
//             for (let j = 0; j < size; j++) {
//                 arr[i].push(j + 1)
//             }
//         } else {
//             arr[i].push(i+1)
//         }
//     }
//     for (let i = 1; i < size; i++) {
//         for (let j = 1; j < size; j++) {
//             arr[i] = [...arr[i], arr[0][j] * arr[i][0]]
//         }
//     }
//     return arr
// }
//
//
// console.log(multiplicationTable(1))
// console.log(multiplicationTable(2))
// console.log(multiplicationTable(3))
// console.log(multiplicationTable(5))



// 6 kyu

// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

function findEvenIndex(arr)
{
    for (let i = 0; i < arr.length; i++) {
        let sumBefore = 0
        let sumAfter = 0
        for (let j = 0; j < arr.length; j++) {
            if (j < i) {
                sumBefore += arr[j]
            }
            if (j > i) {
                sumAfter += arr[j]
            }
        }
        if (sumBefore === sumAfter ) {
            return i
        }
    }
    return -1
}

console.log(findEvenIndex([1,2,3,4,3,2,1]))
console.log(findEvenIndex([1,100,50,-51,1,1]))
console.log(findEvenIndex([1,2,3,4,5,6]))
console.log(findEvenIndex([20,10,30,10,10,15,35]))
console.log(findEvenIndex([20,10,-80,10,10,15,35]))