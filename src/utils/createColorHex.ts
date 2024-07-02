const conversiontoHexadecimalSystems = (number: number) => {
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    const hexadecimalNumber = []
    for (let i = 0; i < 2; i++) {
            number = number / 16
            hexadecimalNumber.push(Math.floor((number - Math.floor(number)) * 16))
    }
    hexadecimalNumber.reverse()
    const hexadecimalDigit = []
    for (let i = 0; i < hexadecimalNumber.length; i++) {
        hexadecimalDigit.push(numbers[hexadecimalNumber[i]])
    }
    const hexadecimalColor = hexadecimalDigit[0] + hexadecimalDigit[1]
    return hexadecimalColor
}

export const createColorHex = (color: string, ratio: number) => {
    color = color.slice(1)
    const redPart = parseInt(color.slice(0, 2), 16)
    const greenPart = parseInt(color.slice(2, 4), 16)
    const bluePart = parseInt(color.slice(4), 16)

    let newRed
    let newGreen
    let newBlue

    if (ratio < 1) {
        newRed = conversiontoHexadecimalSystems(Number((redPart * ratio).toFixed(0)))
        newGreen = conversiontoHexadecimalSystems(Number((greenPart * ratio).toFixed(0)))
        newBlue = conversiontoHexadecimalSystems(Number((bluePart * ratio).toFixed(0)))
    } else {
        newRed = conversiontoHexadecimalSystems(Number((255 - (255 - redPart) / ratio).toFixed(0)))
        newGreen = conversiontoHexadecimalSystems(Number((255 - (255 - greenPart) / ratio).toFixed(0)))
        newBlue = conversiontoHexadecimalSystems(Number((255 - (255 - bluePart) / ratio).toFixed(0)))
    }

    const newColor = `#${newRed}${newGreen}${newBlue}`
    return newColor
}

console.log(conversiontoHexadecimalSystems(255))