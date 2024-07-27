import { drawLine } from "../drawLine/drawLine"
import { drawCircle } from "../drawCircle/drawCircle"
import { drawFigure } from "./drawFigure"
import { zoom } from "../zoom/zoom"

export const data: any = []

export const rerender = (context: any) => {
   drawCircle(context)
   drawLine(context)
   drawFigure(context)
   zoom()
}