export type Line = {
    coords: {
        xStart: number,
        yStart: number,
        xEnd: number,
        yEnd: number,
    },
    color: string,
    width: number
    zoomCoords: {
        xStart: number,
        yStart: number,
        xEnd: number,
        yEnd: number,
    },
}

export type AuxiliaryLine = {
    color: string,
    width: number
    coords: {
        xStart: number,
        yStart: number,
        xEnd: number,
        yEnd: number,
    },
}