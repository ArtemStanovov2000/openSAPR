export type Circle = {
    type: 'Circle',
    coords: {
        xStart: number,
        yStart: number,
        radius: number
    },
    color: string,
    width: number
    zoomCoords?: {
        xStart: number,
        yStart: number,
        radius: number
    },
}