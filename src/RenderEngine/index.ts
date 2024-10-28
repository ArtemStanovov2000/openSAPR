import { StoreParams } from "../models/StoreParams";
import { Data } from "../data/data";
import { renderElement } from "./renderElement/renderElement";
import { zoomElement } from "./zoomElement/zoomElements";

export const rerender = (context: any, data: Data, storeParams: StoreParams, storeDispatch: any) => {
    renderElement(context, data, storeParams, storeDispatch)
    zoomElement(data, storeParams)
}