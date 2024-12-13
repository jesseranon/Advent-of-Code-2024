import {inputFileString, stringToArrays} from './day1-1.js'

const day1ListsObject = stringToArrays(inputFileString)

function generateSimilarityScore(listsObject) {
    let result = 0
    
    const {left, right} = listsObject
    for (let i = 0; i < left.length; i++) {
        const currentNumber = left[i]
        const rightFilterCurrentNumber = right.filter(x => x === currentNumber)
        result += currentNumber * rightFilterCurrentNumber.length
    }

    return result
}

const res = generateSimilarityScore(day1ListsObject)

console.log(res)