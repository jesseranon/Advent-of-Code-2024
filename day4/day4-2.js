import {day4exampleText, day4Text, trimString, getGridWidth} from './day4-1.js'

const day4exampleTextTrimmed = trimString(day4exampleText, "#")
const day4textTrimmed = trimString(day4Text, "#")

function findXMAS(trimmedString) {
    // get # of letters in one line (width)
    const gridWidth = getGridWidth(trimmedString, "#")
    console.log(gridWidth)
    //generate regex
    const xMasLeft = new RegExp(`(?=((M.S).{${gridWidth - 1}}A.{${gridWidth - 1}}(M.S)))`, 'g')
    const xMasRight = new RegExp(`(?=(S.{1}M.{${gridWidth - 1}}A.{${gridWidth - 1}}S.{1}M))`, 'g')
    const xMasTop = new RegExp(`(?=(M.{1}M.{${gridWidth - 1}}A.{${gridWidth - 1}}S.{1}S))`, 'g')
    const xMasBottom = new RegExp(`(?=(S.{1}S.{${gridWidth - 1}}A.{${gridWidth - 1}}M.{1}M))`, 'g')
    
    const regexArray = [
        xMasLeft,
        xMasRight,
        xMasTop,
        xMasBottom
    ]

    // calculate result
    let result = 0

    for (const regex of regexArray) {
        const matchObject = trimmedString.match(regex)
        if (matchObject == null) result += 0
        else result += matchObject.length
    }

    return result
}

console.log(findXMAS(day4exampleTextTrimmed, ))
console.log(findXMAS(day4textTrimmed))