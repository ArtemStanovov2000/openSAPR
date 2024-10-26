import { CanvasElement } from "../models/ElementsType/CanvasElement";
import { renderElement } from "./renderElement/renderElement";
import { StoreParams } from "../models/StoreParams";
import { addElement } from "./addElement/addElement";

type RerenderParams = {
    zoom: any
    elements?: CanvasElement[];
}

export const rerender = (context: any, data: RerenderParams | any, storeParams: StoreParams, store: any, key: string | null) => {
    data.elements.forEach((element: CanvasElement) => {
        renderElement(context, element, storeParams);
    })

    data.temporaryStorageElements.forEach((element: CanvasElement) => {
        renderElement(context, element, storeParams);
    })

    data.auxiliaryElements.forEach((element: CanvasElement) => {
        renderElement(context, element, storeParams);
    })

    if(storeParams.tool !== null) {
        addElement(storeParams.tool, storeParams, store, key)
    }
}