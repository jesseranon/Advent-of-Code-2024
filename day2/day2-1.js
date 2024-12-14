import {readFile} from '../helperFunctions.js'

const inputString = readFile('./day2/day2input.txt')

function splitReports(inputString) {
    return inputString.split(/\s{2}/)
}

export function readReports(reportsArray, safeCheckFunction) {
    let nSafeReports = 0
    for (let i = 0; i < reportsArray.length; i++) {
        const report = reportsArray[i]
        if (report.length > 0 && safeCheckFunction(report)) nSafeReports += 1
    }
    return nSafeReports
}

function reportIsSafe(reportString, dampener = false) {
    const levels = reportString.split(' ')
    let trend = null
    let previousLevel = null
    for (let i = 0; i < levels.length; i++) {
        const currentLevel = Number(levels[i])
        if (previousLevel) {
            if (trend === 'increase' && currentLevel < previousLevel) return false
            if (trend === 'decrease' && currentLevel > previousLevel) return false
            if (Math.abs(currentLevel - previousLevel) > 3 || currentLevel === previousLevel) return false
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

const result = readReports(day2reports, reportIsSafe)

console.log(result)