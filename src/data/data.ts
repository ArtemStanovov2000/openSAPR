import { Line } from "../models/ElementsType/Line"

type Elements = {
    Lines: Line[]
}

export type Data = {
    elements: Elements,
    temporaryStorageElements: Elements,
    auxiliaryElements: Elements,
}

export const data: Data = {
    elements: {
        Lines: []
    },
    temporaryStorageElements: {
        Lines: []
    },
    auxiliaryElements: {
        Lines: []
    },
    
}


data.elements.Lines.push({
    coords: {
        xStart: 319,
        yStart: 341,
        xEnd: 865,
        yEnd: 63,
    },
    color: "white",
    width: 2,
    zoomCoords: {
        xStart: 319,
        yStart: 341,
        xEnd: 865,
        yEnd: 63,
    },
})

data.elements.Lines.push({
    coords: {
        xStart: 320,
        yStart: 342,
        xEnd: 765,
        yEnd: 163,
    },
    color: "white",
    width: 2,
    zoomCoords: {
        xStart: 320,
        yStart: 342,
        xEnd: 765,
        yEnd: 163,
    },
})