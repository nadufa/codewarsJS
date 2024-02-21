console.log('1')


// 6 kyu

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
//
//     Examples:
//
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
    const arr = str.split('')
    let result = []
    for (let i = 0; i < arr.length; i += 2 ) {
        const next = arr[i+1] ?? '_'
        result.push(arr[i] + next)
    }
    return result
}

console.log(solution('abc'))
console.log(solution('abcdef'))
