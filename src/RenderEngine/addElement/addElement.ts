import { StoreParams } from "../../models/StoreParams";
import { addLine } from "./addLine/addLine";
import { addCircle } from "./addCircle";

export const addElement = (tool: string, storeParams: StoreParams, store: any, key: string | null) => {
    if (key === "Escape") {
        store.dropClick()
        store.setTool(null)
    }

    switch (tool) {
        case "line":
            addLine(storeParams, store, key)
            break;
        case "circle":
            addCircle(storeParams, store, key)
            break;
    }
}