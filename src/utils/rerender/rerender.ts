import { drawLine } from "../drawLine/drawLine"
import { drawCircle } from "../drawCircle/drawCircle"
import { drawFigure } from "./drawFigure"

export const data: any = []

type Line = {
   type: 'Line',
   coords: {
      x: number,
      y: number,
   },
   zoomCoords: {
      x: number;
      y: number;
   },
   stroke: number;
}

type Circle = {
   type: "Circle",
   x: number;
   y: number;
   radius: number;
}

type ElementsBlock = {
   type: "ElementsBlock",
   elements: CanvasElement[];
}

type CanvasElement = Line | Circle | ElementsBlock;

type RerenderParams = {
   zoom: number;
   elements: CanvasElement[];
}

const drawBlock = (context: any, block: ElementsBlock, isFirstLoop = true) => {
   drawBlockWrapper(context);
   block.elements.forEach((element) => {
      renderElement(context, element, false);
   })
}

export const renderElement = (context: any, element: CanvasElement, isFirstLoop = true) => {
   switch (element.type) {
      case "Line":
         drawLine(context, element);
         break;
      case "Circle":
         drawCircle(context, element);
         break;
      case "ElementsBlock":
         drawBlock(context, element, isFirstLoop);
         break;
   }
}

export const rerender = (context: any, params: RerenderParams) => {
   // drawCircle(context)
   // drawLine(context)
   // drawFigure(context)

   params.elements.forEach((element) => {
      renderElement(context, element);
   })
}