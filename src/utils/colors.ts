import { createColorHex } from "./createColorHex"

const createColorsLightnessRatios = (color: string) => {
    const colors = {
        bright6level: createColorHex(color, 3.3),
        bright5level: createColorHex(color, 2.6),
        bright4level: createColorHex(color, 2.1),
        bright3level: createColorHex(color, 1.7),
        bright2level: createColorHex(color, 1.4),
        bright1level: createColorHex(color, 1.2),
        basic: createColorHex(color, 1),
        dark1level: createColorHex(color, 0.9),
        dark2level: createColorHex(color, 0.8),
        dark3level: createColorHex(color, 0.67),
        dark4level: createColorHex(color, 0.55),
        dark5level: createColorHex(color, 0.4),
        dark6level: createColorHex(color, 0.25),
    }
    return colors
}

export const colors = {
    pastelGreen: createColorsLightnessRatios("#d0f4de"),
    pastelBlue: createColorsLightnessRatios("#8cafb5"),
    black: "#000000",
    white: "#ffffff",
    pastelViolet: createColorsLightnessRatios("#bd9eff"),
    pastelYellow: createColorsLightnessRatios("#ffef9f"),
    pastelRed: createColorsLightnessRatios("#F08080")
}

console.log(createColorsLightnessRatios("#d0f4de"))