import { CanvasElement } from "../../models/ElementsType/CanvasElement";
import { drawLine } from "./elementType/drawLine";
import { drawCircle } from "./elementType/drawCircle";
import { drawBlock } from "./elementType/drawBlock";
import { StoreParams } from "../../models/StoreParams";

export const renderElement = (context: any, element: CanvasElement, storeParams: StoreParams, isFirstLoop = true) => {
    switch (element.type) {
        case "Line":
            drawLine(context, element, storeParams);
            break;
        case "Circle":
            drawCircle(context, element);
            break;
        case "ElementsBlock":
            drawBlock(context, element, isFirstLoop);
            break;
    }
}