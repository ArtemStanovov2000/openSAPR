import { drawLine } from "./elementType/drawLine";
import { drawNoStaticLine } from "./elementType/drawNoStaticLine";
import { StoreParams } from "../../models/StoreParams";
import { Data } from "../../data/data";
import { Line, AuxiliaryLine } from "../../models/ElementsType/Line";
import { Text } from "../../models/ElementsType/Text";
import { drawText } from "./elementType/drawText";
import { drawSelection } from "./elementType/drawSelection";

export const renderElement = (context: any, data: Data, storeParams: StoreParams, storeDispatch: any) => {
    data.elements.Lines.forEach((element: Line) => {
        drawLine(context, element)
    })
    data.temporaryStorageElements.Lines.forEach((element: Line) => {
        drawLine(context, element)
    })
    data.centerAxes.forEach((element: Line) => {
        drawLine(context, element)
    })
    data.cursor.forEach((element: Line) => {
        drawLine(context, element)
    })

    data.auxiliaryElements.Text.forEach((element: Text) => {
        drawText(context, element)
    })
    data.auxiliaryElements.Lines.forEach((element: AuxiliaryLine) => {
        drawNoStaticLine(context, element)
    })
    data.auxiliaryElements.Pole.forEach((element: AuxiliaryLine) => {
        drawSelection(context, element)
    })
}