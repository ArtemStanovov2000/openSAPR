import { StoreParams } from "../models/StoreParams";
import { Data } from "../data/data";
import { renderElement } from "./renderElement/renderElement";
import { zoomElement } from "./zoomElement/zoomElements";
import { zoomAxesElements } from "./zoomElement/zoomAxesElements";
import { zoomCursorElements } from "./zoomElement/zoomCursorElements";
import { addElement } from "../UserEngine/addElement/addElement";
import { zoomClicksCoord } from "./zoomClicksCoord";

export const rerender = (context: any, data: Data, storeParams: StoreParams, storeDispatch: any) => {
    renderElement(context, data, storeParams, storeDispatch)
    zoomElement(data.elements, storeParams)
    zoomAxesElements(data.centerAxes, storeParams, storeDispatch)
    zoomCursorElements(data.cursor, storeParams)
    zoomClicksCoord(storeParams, storeDispatch, data)
    addElement(storeParams, storeDispatch, data)
}