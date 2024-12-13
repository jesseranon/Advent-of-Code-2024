import fs from 'fs'

export const inputFileString = './day1input.txt'

// split input into lists
function readFile(filePath) {
    try {
        const data = fs.readFileSync(filePath)
        return data.toString()
    } catch (error) {
        console.error(`Got an error trying to read the file: ${error.message}`)
    }
}

export function stringToArrays(inputFileString) {
    let textInput = readFile(inputFileString)
    const regexSubstr = /\s{2,}/g
    const textSplit = textInput.replace(regexSubstr, " ").split(" ")
    const lists = {
        left: [],
        right: []
    }
    for (let i = 0; i < textSplit.length; i++) {
        const strNum = Number(textSplit[i])
        if (i > 0 && i % 2 > 0) lists.right.push(strNum)
        else lists.left.push(strNum)
    }
    return lists
}

function sortListsSumDifferences(inputFileString) {
    const aLists = stringToArrays(inputFileString)
    const {left, right} = aLists
    left.sort()
    right.sort()
    let result = 0
    for (let i = 0; i < left.length; i++) {
        result += Math.abs(left[i] - right[i])
    }
    return result
}

const res = sortListsSumDifferences(inputFileString)
console.log(res)