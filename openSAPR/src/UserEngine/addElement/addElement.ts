import { StoreParams } from "../../models/StoreParams";
import { addLine } from "./addLine/addLine";
import { Data } from "../../data/data";

export const addElement = (storeParams: StoreParams, storeDispatch: any, data: Data) => {
    switch (storeParams.tool) {
        case "Line":
            addLine(storeParams, storeDispatch, data)
            break;
    }
}