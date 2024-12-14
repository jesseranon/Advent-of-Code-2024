import fs from 'fs'

export function readFile(filePath) {
    try {
        const data = fs.readFileSync(filePath)
        return data.toString()
    } catch (error) {
        console.error(`Got an error trying to read the file: ${error.message}`)
    }
}