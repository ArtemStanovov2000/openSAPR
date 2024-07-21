export const createLine = (context: any, xStart: number, yStart: number, xEnd: number, yEnd: number, color: string, width: number) => {
    context.beginPath()
    context.moveTo(xStart, yStart)
    context.lineTo(xEnd, yEnd)
    context.strokeStyle = color
    context.lineWidth = width
    context.stroke()
}