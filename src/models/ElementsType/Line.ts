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
        xStart: number | null,
        yStart: number | null,
        xEnd: number | null,
        yEnd: number | null,
    },
}