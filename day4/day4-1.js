import {readFile} from '../helperFunctions.js'

export const day4exampleText = readFile('./day4/day4exampleinput.txt')
export const day4Text = readFile('./day4/day4input.txt')

export function trimString(text, delimiter) {
    const trimmedString = text.replace(/\r\n/g, delimiter)
    return trimmedString
}

export function getGridWidth(string, delimiter) {
    return string.indexOf(delimiter)
}

export function findXMAS(string) {
    // remove carriage return and new line characters, replace with '#' -> line should then become one single string
    const trimmedString = trimString(string, "#") 

    // get # of letters in one line (width)
    const gridWidth = getGridWidth(trimmedString, "#")

    //generate regex
    const horizontalRegex = /(?=(XMAS))/g
    const horizontalBwRegex = /(?=(SAMX))/g

    // generate verticalRegex
    const verticalRegex = new RegExp(`(?=(X.{${gridWidth}}M.{${gridWidth}}A.{${gridWidth}}S))`, 'g')
    const verticalBwRegex = new RegExp(`(?=(S.{${gridWidth}}A.{${gridWidth}}M.{${gridWidth}}X))`, 'g')
    
    // generate toBottomRightRegex
    const toBottomRightRegex = new RegExp(`(?=(X.{${gridWidth + 1}}M.{${gridWidth + 1}}A.{${gridWidth + 1}}S))`, 'g')
    const toBottomRightBwRegex = new RegExp(`(?=(S.{${gridWidth + 1}}A.{${gridWidth + 1}}M.{${gridWidth + 1}}X))`, 'g')

    // generate toBottomLeftRegex
    const toBottomLeftRegex = new RegExp(`(?=(X.{${gridWidth - 1}}M.{${gridWidth - 1}}A.{${gridWidth - 1}}S))`, 'g')
    const toBottomLeftBwRegex = new RegExp(`(?=(S.{${gridWidth - 1}}A.{${gridWidth - 1}}M.{${gridWidth - 1}}X))`, 'g')
    
    const regexArray = [
        horizontalRegex,
        horizontalBwRegex,
        verticalRegex,
        verticalBwRegex,
        toBottomRightRegex,
        toBottomRightBwRegex,
        toBottomLeftRegex,
        toBottomLeftBwRegex
    ]

    // calculate result
    let result = 0

    for (const regex of regexArray) {
        const matchObject = trimmedString.match(regex)
        result += matchObject.length
    }

    return result
}

console.log(findXMAS(day4exampleText))
console.log(findXMAS(day4Text))