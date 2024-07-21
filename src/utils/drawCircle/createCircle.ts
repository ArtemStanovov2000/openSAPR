export const createCircle = (context: any, xStart: number, yStart: number, radius: number) => {
    context.beginPath()
    context.arc(xStart, yStart, radius, 0, 2 * Math.PI)
    context.stroke()
}