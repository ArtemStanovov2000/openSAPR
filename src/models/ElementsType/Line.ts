export type Line = {
    type: 'Line',
    coords?: {
        xStart: number,
        yStart: number,
        xEnd: number,
        yEnd: number,
    },
    color: string,
    width: number
    zoomCoords?: {
        xStart: number,
        yStart: number,
        xEnd: number,
        yEnd: number,
    },
}