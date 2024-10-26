export const calculateGeometricLineParams = (xStart: number, yStart: number, xEnd: number, yEnd: number) => {
    const deltaX = xEnd - xStart
    const deltaY = yEnd - yStart
    const length = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2))

    const lineParams = {
        deltaX: deltaX,
        deltaY: deltaY,
        length: length
    }

    return lineParams
}