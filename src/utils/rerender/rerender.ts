import { drawLine } from "../drawLine/drawLine"
import { drawCircle } from "../drawCircle/drawCircle"
import { drawFigure } from "./drawFigure"

export const data: any = []

export const rerender = (context: any) => {
   drawCircle(context)
   drawLine(context)
   drawFigure(context)
}