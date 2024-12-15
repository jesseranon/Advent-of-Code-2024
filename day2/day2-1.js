import {readFile} from '../helperFunctions.js'
import {dampenReport} from './day2-2.js'

const inputString = readFile('./day2/day2input.txt')

function splitReports(inputString) {
    return inputString.split(/\s{2}/)
}

function readReports(reportsArray, dampener = false) {
    let nSafeReports = 0
    for (let i = 0; i < reportsArray.length; i++) {
        const report = reportsArray[i]
        if (report.length > 0 && reportIsSafe(report, dampener)) nSafeReports += 1
    }
    return nSafeReports
}

export function reportIsSafe(reportString, dampener = false) {
    const levels = reportString.split(' ')
    let trend = null
    let previousLevel = null
    for (let i = 0; i < levels.length; i++) {
        const currentLevel = Number(levels[i])
        if (previousLevel) {
            if (
                Math.abs(currentLevel - previousLevel) > 3 ||
                currentLevel === previousLevel ||
                (trend === 'increase' && currentLevel < previousLevel) ||
                (trend === 'decrease' && currentLevel > previousLevel)
            ) return (dampener ? dampenReport(reportString) : false)
            if (!trend) {
                if (currentLevel > previousLevel) trend = 'increase'
                else trend = 'decrease'
            }
        } 
        previousLevel = currentLevel
    }

    return true
}

export const day2reports = splitReports(inputString)

const day2part1result = readReports(day2reports)

// console.log(day2part1result)

const day2part2result = readReports(day2reports, true)

console.log(day2part2result)