import {reportIsSafe} from './day2-1.js'

export function dampenReport(reportString) {
    const levelsArray = reportString.split(' ')
    for (let i = 0; i < levelsArray.length; i++) {
        const dampenedReport = levelsArray.filter((n, fi) => fi!==i)
        const dampenedReportString = dampenedReport.join(' ')
        if (reportIsSafe(dampenedReportString)) return true
    }
    return false
}