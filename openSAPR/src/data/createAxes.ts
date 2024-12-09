import { Data } from "./data"
import { Line } from "../models/ElementsType/Line"

export const createAxes = (data: Data) => {
    const XAxes: Line = {
        coords: {
            xStart: 0,
            yStart: 0,
            xEnd: 70,
            yEnd: 0,
        },
        color: "white",
        width: 2,
        zoomCoords: {
            xStart: 0,
            yStart: 0,
            xEnd: 70,
            yEnd: 0,
        },
    }
    const YAxes: Line = {
        coords: {
            xStart: 0,
            yStart: 0,
            xEnd: 0,
            yEnd: 70,
        },
        color: "white",
        width: 2,
        zoomCoords: {
            xStart: 0,
            yStart: 0,
            xEnd: 0,
            yEnd: 70,
        },
    }
    data.centerAxes.push(XAxes)
    data.centerAxes.push(YAxes)
}