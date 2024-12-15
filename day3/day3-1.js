import {readFile} from '../helperFunctions.js'
import { part2InstructionRegex } from './day3-2.js'

const inputString = readFile('./day3/day3input.txt')

const instructionRegex = /mul\([0-9]{1,3},[0-9]{1,3}\)/g

function matchUncorruptedInstructions(str, matchRegex) {
    const matchArray = str.match(matchRegex)
    return matchArray
}

function mul(string) {
    const [x, y] = string.split(',')
    const result = Number(x) * Number(y)
    return result
}

function runInstructions(instructionsArray) {
    let sumResults = 0
    let mulEnabled = true
    for (let i = 0; i < instructionsArray.length; i++) {
        const instruction = instructionsArray[i]
        if (instruction === 'do()') mulEnabled = true
        if (instruction === 'don\'t()') mulEnabled = false
        if (mulEnabled && instruction.indexOf('mul') >= 0) {
            const args = instruction.match(/[0-9]{1,3},[0-9]{1,3}/)[0]
            sumResults += mul(args)
        }
    }
    return sumResults
}

// const instructionsArray = matchUncorruptedInstructions(inputString, instructionRegex)


// part 2

const instructionsArray = matchUncorruptedInstructions(inputString, part2InstructionRegex)

const result = runInstructions(instructionsArray)

console.log(result)