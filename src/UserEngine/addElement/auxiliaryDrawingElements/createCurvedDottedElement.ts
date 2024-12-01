import { EndPointCoordinates } from "./auxiliaryDrawingElements"

const calculateAngle = (endPointCoordinates: EndPointCoordinates, length: number) => {
    const deltaY = endPointCoordinates.yEnd - endPointCoordinates.yStart
    const deltaX = endPointCoordinates.xEnd - endPointCoordinates.xStart
    const cos = (endPointCoordinates.xEnd - endPointCoordinates.xStart) / length
    if (cos < 0) {
        const angle = 180 + Math.atan(Math.abs(deltaY) / deltaX) * (180 / 3.1415926)
        return angle
    } else {
        const angle = Math.atan(Math.abs(deltaY) / deltaX) * (180 / 3.1415926)
        return angle
    }
}

const countDottedElement = (dottedSize: number, dottedGap: number, endPointCoordinates: EndPointCoordinates, length: number) => {
    const angle = calculateAngle(endPointCoordinates, length)
    const count = Number(((angle / 360) * (3.1415926 * 2 * length) / (dottedSize + dottedGap)).toFixed(0))
    return count
}

const createAnglesArray = (dottedSize: number, dottedGap: number, endPointCoordinates: EndPointCoordinates, length: number, maxCount: number) => {
    const count = countDottedElement(dottedSize, dottedGap, endPointCoordinates, length)
    const angle = calculateAngle(endPointCoordinates, length)
    const anglesArray = []

    const ACCURACITY_DIGITS = 3

    if(count > maxCount) {
        if (endPointCoordinates.yEnd - endPointCoordinates.yStart > 0) {
            for (let i = count - maxCount; i < count; i++) {
                anglesArray.push(Number((angle / count * i).toFixed(ACCURACITY_DIGITS)))
            }
            return anglesArray
        } else {
            for (let i = count - maxCount; i < count; i++) {
                anglesArray.push(Number((-1 * angle / count * i).toFixed(ACCURACITY_DIGITS)))
            }
            return anglesArray
        }
    } else {
        if (endPointCoordinates.yEnd - endPointCoordinates.yStart > 0) {
            for (let i = 1; i < count; i++) {
                anglesArray.push(Number((angle / count * i).toFixed(ACCURACITY_DIGITS)))
            }
            return anglesArray
        } else {
            for (let i = 1; i < count; i++) {
                anglesArray.push(Number((-1 * angle / count * i).toFixed(ACCURACITY_DIGITS)))
            }
            return anglesArray
        }
    }
}

export const createCurvedDottedElement = (dottedSize: number, dottedGap: number, endPointCoordinates: EndPointCoordinates, color: string) => {
    const MAX_COUNT_DOTTED_ELEMENT = 500
    const lengthLine = Math.sqrt(Math.pow(endPointCoordinates.xEnd - endPointCoordinates.xStart, 2) + Math.pow(endPointCoordinates.yEnd - endPointCoordinates.yStart, 2))
    const anglesArray = createAnglesArray(dottedSize, dottedGap, endPointCoordinates, lengthLine, MAX_COUNT_DOTTED_ELEMENT)
    const elementCoordinates = []
    for (let i = 0; i < anglesArray.length; i++) {
        console.log(anglesArray)
        elementCoordinates.push({
            xStart: Math.cos(anglesArray[i] / 57.33) * lengthLine + endPointCoordinates.xStart,
            yStart: Math.sin(anglesArray[i] / 57.33) * lengthLine + endPointCoordinates.yStart,
            xEnd: Math.cos(anglesArray[i] / 57.33) * lengthLine + endPointCoordinates.xStart + 1.5,
            yEnd: Math.sin(anglesArray[i] / 57.33) * lengthLine + endPointCoordinates.yStart + 1.5,
            color: "red"
        })
    }
    return elementCoordinates
}