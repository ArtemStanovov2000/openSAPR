export const createDottedElementsArray = (xStart: number, yStart: number, xEnd: number, yEnd: number, length?: number) => {
    const DISTANCE_BETWEEN_START_POINT_DOTTED_ELEMENT = 5
    const SIZE_GAP_BETWEEN_ELEMENT = 2
    const deltaX = xEnd - xStart
    const deltaY = yEnd - yStart
    const lineLength = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2))

    const deltaXDottedElement = deltaX / lineLength * DISTANCE_BETWEEN_START_POINT_DOTTED_ELEMENT
    const deltaYDottedElement = deltaY / lineLength * DISTANCE_BETWEEN_START_POINT_DOTTED_ELEMENT

    const deltaXBetweenDottedElements = deltaX / lineLength * SIZE_GAP_BETWEEN_ELEMENT
    const deltaYBetweenDottedElements = deltaY / lineLength * SIZE_GAP_BETWEEN_ELEMENT

    let dottedElementsCount
    if (length) {
        dottedElementsCount = Number((length / DISTANCE_BETWEEN_START_POINT_DOTTED_ELEMENT).toFixed(0))
    } else {
        dottedElementsCount = Number((lineLength / DISTANCE_BETWEEN_START_POINT_DOTTED_ELEMENT).toFixed(0))
    }

    const dottedElementsArray = []

    for (let i = 0; i < dottedElementsCount; i++) {
        dottedElementsArray.push({
            xStart: i * deltaXDottedElement + xStart,
            yStart: i * deltaYDottedElement + yStart,
            xEnd: i * deltaXDottedElement + xStart - deltaXBetweenDottedElements,
            yEnd: i * deltaYDottedElement + yStart - deltaYBetweenDottedElements
        })
    }

    return dottedElementsArray
}