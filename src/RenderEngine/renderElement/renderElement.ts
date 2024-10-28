import { drawLine } from "./elementType/drawLine";
import { StoreParams } from "../../models/StoreParams";
import { Data } from "../../data/data";
import { Line } from "../../models/ElementsType/Line";

export const renderElement = (context: any, data: Data, storeParams: StoreParams, storeDispatch: any) => {
    data.elements.Lines.forEach((line: Line) => {
        drawLine(context, line)
    })
    console.log(storeParams.coords.windowMouseCoords)
    console.log(storeParams.coords.zoomMouseCoords)
}