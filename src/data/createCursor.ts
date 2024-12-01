import { Data } from "./data"
import { Line } from "../models/ElementsType/Line"

export const createCursor = (data: Data) => {
    const EMPTY_SIZE = 5
    const FULL_SIZE = 60

    const EMPTY_CENTER = EMPTY_SIZE
    const EMPTY_CENTER_MINUS = -1 * EMPTY_SIZE
    const SIZE = FULL_SIZE
    const SIZE_MINUS = -1 * FULL_SIZE

    const line1: Line = {
        coords: {
            xStart: EMPTY_CENTER,
            yStart: 0,
            xEnd: SIZE,
            yEnd: 0,
        },
        color: "white",
        width: 1,
        zoomCoords: {
            xStart: 0,
            yStart: 0,
            xEnd: 0,
            yEnd: 0,
        },
    }
    data.cursor.push(line1)
    const line2: Line = {
        coords: {
            xStart: 0,
            yStart: EMPTY_CENTER,
            xEnd: 0,
            yEnd: SIZE,
        },
        color: "white",
        width: 1,
        zoomCoords: {
            xStart: 0,
            yStart: 0,
            xEnd: 0,
            yEnd: 0,
        },
    }
    data.cursor.push(line2)
    const line3: Line = {
        coords: {
            xStart: EMPTY_CENTER_MINUS,
            yStart: 0,
            xEnd: SIZE_MINUS,
            yEnd: 0,
        },
        color: "white",
        width: 1,
        zoomCoords: {
            xStart: 0,
            yStart: 0,
            xEnd: 0,
            yEnd: 0,
        },
    }
    data.cursor.push(line3)
    const line4: Line = {
        coords: {
            xStart: 0,
            yStart: EMPTY_CENTER_MINUS,
            xEnd: 0,
            yEnd: SIZE_MINUS,
        },
        color: "white",
        width: 1,
        zoomCoords: {
            xStart: 0,
            yStart: 0,
            xEnd: 0,
            yEnd: 0,
        },
    }
    data.cursor.push(line4)
    const line5: Line = {
        coords: {
            xStart: EMPTY_CENTER_MINUS,
            yStart: EMPTY_CENTER_MINUS,
            xEnd: EMPTY_CENTER_MINUS,
            yEnd: EMPTY_CENTER,
        },
        color: "white",
        width: 1,
        zoomCoords: {
            xStart: 0,
            yStart: 0,
            xEnd: 0,
            yEnd: 0,
        },
    }
    data.cursor.push(line5)
    const line6: Line = {
        coords: {
            xStart: EMPTY_CENTER,
            yStart: EMPTY_CENTER,
            xEnd: EMPTY_CENTER,
            yEnd: EMPTY_CENTER_MINUS,
        },
        color: "white",
        width: 1,
        zoomCoords: {
            xStart: 0,
            yStart: 0,
            xEnd: 0,
            yEnd: 0,
        },
    }
    data.cursor.push(line6)
    const line7: Line = {
        coords: {
            xStart: EMPTY_CENTER,
            yStart: EMPTY_CENTER,
            xEnd: EMPTY_CENTER_MINUS,
            yEnd: EMPTY_CENTER,
        },
        color: "white",
        width: 1,
        zoomCoords: {
            xStart: 0,
            yStart: 0,
            xEnd: 0,
            yEnd: 0,
        },
    }
    data.cursor.push(line7)
    const line8: Line = {
        coords: {
            xStart: EMPTY_CENTER_MINUS,
            yStart: EMPTY_CENTER_MINUS,
            xEnd: EMPTY_CENTER,
            yEnd: EMPTY_CENTER_MINUS,
        },
        color: "white",
        width: 1,
        zoomCoords: {
            xStart: 0,
            yStart: 0,
            xEnd: 0,
            yEnd: 0,
        },
    }
    data.cursor.push(line8)
}