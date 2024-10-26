import { StoreParams } from "../../../models/StoreParams"
import { Circle } from "../../../models/ElementsType/Circle"

export const drawCircle = (context: any, circle: Circle) => {
    context.beginPath()
    context.arc(circle.coords.xStart, circle.coords.yStart, circle.coords.radius, 0, 2 * Math.PI)
    context.stroke()
}