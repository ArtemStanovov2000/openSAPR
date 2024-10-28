import { StoreParams } from "../../models/StoreParams";
import { addLine } from "./addLine/addLine";

export const addElement = (tool: string, storeParams: StoreParams, store: any) => {
    switch (tool) {
        case "line":
            addLine(storeParams, store)
            break;
    }
}